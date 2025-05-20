import { useState, useEffect } from 'react';
import { generate } from '#/helpers/lock-info-generator';
import pkg from '#/../package.json';
import { track } from '#/helpers/analytics/ga/index.ts';
import { toast } from '../ui/Toast/Toast.tsx';
import TerminalCommandInstructor from './TerminalCommandInstructor';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Icon } from "../ui/Icon/Icon.tsx";
import { TooltipTrigger, TooltipContent, Tooltip } from '../ui/Tooltip/Tooltip.tsx';
import Banner from './InfoBanner.tsx';
import FileSystemApiDialog from './FileSystemApiDialog';
import { usePathPreferences } from './PathPreferencesContext';
import { backOff } from 'exponential-backoff';
import { TrackableSummary } from '#/components/internal/TrackableSummary.tsx';
import { serializeError } from 'serialize-error';

const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/its-tim-lee/uitimate/main/packages/docs/app/components/ui';

// Helper function to replace paths in code according to user preferences
function replacePathsInCode(code: string, preferences: { helpersPath: string; componentsPath: string }) {
  let result = code;

  // Replace helpers path (e.g., "#/helpers/utils" -> "#/lib/utils")
  if (preferences.helpersPath) {
    result = result.replace(/#\/helpers\//g, `#/${preferences.helpersPath}/`);
  }

  // Replace components path (e.g., "#/components/ui/Button" -> "#/ui/Button")
  if (preferences.componentsPath) {
    result = result.replace(/#\/components\/ui\//g, `#/${preferences.componentsPath}/`);
  }

  return result;
}

async function fetchComponentSource(component: string): Promise<string> {
  const url = `${GITHUB_RAW_BASE}/${component}/${component}.tsx`;
  try {
    return await backOff(async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${component}.tsx`);
      return await res.text();
    }, { numOfAttempts: 3 });
  } catch (e) {
    toast('Failed to fetch component source', {
      description: `We couldn't fetch ${component}.tsx after 3 attempts. Please try again or contact support.`
    });
    throw e;
  }
}

async function fetchAdditionalFile(component: string, filename: string): Promise<string> {
  const url = `${GITHUB_RAW_BASE}/${component}/${filename}`;
  try {
    return await backOff(async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${filename}`);
      return await res.text();
    }, { numOfAttempts: 3 });
  } catch (e) {
    toast('Failed to fetch additional file', {
      description: `We couldn't fetch ${filename} after 3 attempts. Please try again or contact support.`
    });
    throw e;
  }
}

interface ComponentFile {
  name: string;
  code: string;
  filename?: string;
}

async function collectDeps(
  component: string,
  pkgDeps: Record<string, string>,
  additionalFiles: string[] = [],
  visited = new Set<string>()
): Promise<{ vendor: Record<string, string>; files: ComponentFile[] }> {
  if (visited.has(component)) return { vendor: {}, files: [] };
  visited.add(component);

  const code = await fetchComponentSource(component);
  const { vendor, native } = generate(code, pkgDeps);

  let allVendor = { ...vendor };
  let allFiles: ComponentFile[] = [{ name: component, code }];

  // Fetch additional files
  for (const filename of additionalFiles) {
    try {
      const additionalCode = await fetchAdditionalFile(component, filename);
      allFiles.push({ name: component, code: additionalCode, filename });
    } catch (error) {
      console.error(`Failed to fetch additional file ${filename}:`, error);
    }
  }

  for (const nativeComp of native) {
    const { vendor: v, files: f } = await collectDeps(nativeComp, pkgDeps, [], visited);
    allVendor = { ...allVendor, ...v };
    allFiles = [...allFiles, ...f];
  }

  return { vendor: allVendor, files: allFiles };
}

interface OneClickSetupProps {
  component: string;
  additionalFiles?: string[];
  children?: React.ReactNode;
}

export default function OneClickSetup({ component, additionalFiles = [], children }: OneClickSetupProps) {
  const [cli, setCli] = useState('');
  const [files, setFiles] = useState<ComponentFile[]>([]);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { preferences } = usePathPreferences();
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    handleAnalyze();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component, additionalFiles]);

  async function handleAnalyze() {
    setError('');
    setAnalyzing(true);
    try {
      const { vendor, files } = await collectDeps(component, pkg.dependencies, additionalFiles);
      setFiles(files);
      // Build CLI command
      const cliCmd =
        'pnpm add ' +
        Object.entries(vendor)
          .map(([lib, ver]) => `${lib}@npm:${ver}`)
          .join(' ');
      setCli(cliCmd);
    } catch (e: any) {
      setError(e.message);
    }
    setAnalyzing(false);
  }

  async function handleDownload() {
    setError(''); // Clear error at start
    // Check for File System API support
    // @ts-ignore
    if (typeof window.showDirectoryPicker !== 'function') {
      track('not_support_file_system_api');
      setDialogOpen(true);
      return;
    }
    setDownloading(true);
    try {
      // Prompt user for directory
      // @ts-ignore
      const dirHandle = await window.showDirectoryPicker();

      // Process each file, replacing paths according to user preferences
      for (const { name, code, filename } of files) {
        const adjustedCode = replacePathsInCode(code, preferences);
        const folder = await dirHandle.getDirectoryHandle(name, { create: true });
        const actualFilename = filename || `${name}.tsx`;
        const fileHandle = await folder.getFileHandle(actualFilename, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(adjustedCode);
        await writable.close();
      }
      setError(''); // Clear error on success
      toast('All source files copied successfully!', {
        description: 'All selected component source files have been saved to your folder.'
      });
      track('download_component', { id: component });
    } catch (e: any) {
      track('exception', { error: JSON.stringify(serializeError(e)), description: `fail to download ${component} source files` });
      setError(e.message);
    }
    setDownloading(false);
  }

  return (
    <div className="tw:p-4 tw:rounded-lg">
      <FileSystemApiDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        featureName="Save Source Files"
      />
      <strong>1️⃣ &nbsp; Make sure you have finished the global setup:</strong>
      <ul className='tw:list-disc tw:pl-4 tw:mb-10'>
        <li>
          If you haven't, please <a href="/docs/get-started/setup/read-me-first" className='tw:link'>do so.</a>
        </li>
      </ul>
      <strong>2️⃣ &nbsp; Install vendor dependencies:</strong>
      {analyzing ? (
        <div className="tw:flex tw:items-center tw:gap-2 tw:pt-4">
          <span className="tw:animate-spin">🔄</span>
          <span>Analyzing which dependencies need to be installed...</span>
        </div>
      ) : cli && cli.trim() !== 'pnpm add' ? (
        <TerminalCommandInstructor cli={cli}>{children}</TerminalCommandInstructor>
      ) : (
        <div className="tw:pt-4">Nothing needed to be installed.</div>
      )}

      <br />
      <strong>3️⃣ &nbsp; Install component:</strong>
      <br />
      <Cta onClick={handleDownload} disabled={downloading} className="tw:mt-2 tw:w-fit tw:relative">
        <Icon icon='lucide:cloud-download' />
        {downloading ? 'Saving...' : 'Save Source Files'}
      </Cta>
      <details className='tw:mt-4'>
        <TrackableSummary id="save_source_files">
          Learn how to use "Save Source Files" correctly if this is your first time
        </TrackableSummary>
        <div>
          <p>
            This is VERY DIFFERENT from traditional "installation"
            because we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API" className='tw:link'>File System API</a>.
          </p>

          <p>
            Your browser will ask for permission—just accept all the prompts, and the files will be saved directly to your local folder (no zip file involved). That’s why you can use the component immediately.
          </p>
          <Banner>
            The "source files" are just one or more "component folders". Currently,
            We don’t recommend renaming these folders or moving the files, as this could break best practices and may cause issues with future updates
          </Banner>
          <hr />
          <p>
            If you're curious why we use this API, the simple answer is: because we adopt a VPM (Virtual Package Management) approach.
          </p>
          <p>
            Explaining all the details would require a full article, but in short: with VPM, you can’t use NPM commands to install the component. So how do you use it?
          </p>
          <p>
            One way is to create a CLI tool to do the work,
            but that means you need to learn more tools,
            and it can be more complicated than you expect depending on your development environment.
            That can be frustrating!
          </p>
          <p>
            That’s why we use the File System API: with just a few clicks—often only one—the component will be added to your project. It’s incredibly easy!
          </p>
          <p>
            You might ask, "But does using that API mean it can download the component regardless of the development environment's complexity?"
          </p>
          <p>
            We’ve found this approach works much better overall. While there are still some edge cases, the feature is evolving and should cover most needs.

            In the future, we’ll also use this API to make it easy for you to receive updates to components and related files.
          </p>
        </div>
      </details>
      {error && <div className="tw:text-destructive tw:font-bold tw:mt-2">{error}</div>}
    </div>
  );
}