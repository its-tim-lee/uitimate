import { useState, useEffect } from 'react';
import { generate } from '#/helpers/lock-info-generator';
import pkg from '#/../package.json';
import { toast } from '../ui/Toast/Toast.tsx';
import TerminalCommandInstructor from './TerminalCommandInstructor';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Icon } from "../ui/Icon/Icon.tsx";
import { TooltipTrigger, TooltipContent, Tooltip } from '../ui/Tooltip/Tooltip.tsx';
import Banner from './InfoBanner.tsx';
import FileSystemApiDialog from './FileSystemApiDialog';
import { usePathPreferences } from './PathPreferencesContext';

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
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${component}.tsx`);
  return await res.text();
}

async function fetchAdditionalFile(component: string, filename: string): Promise<string> {
  const url = `${GITHUB_RAW_BASE}/${component}/${filename}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${filename}`);
  return await res.text();
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
}

export default function OneClickSetup({ component, additionalFiles = [] }: OneClickSetupProps) {
  const [cli, setCli] = useState('');
  const [files, setFiles] = useState<ComponentFile[]>([]);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { preferences } = usePathPreferences();

  useEffect(() => {
    handleAnalyze();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component, additionalFiles]);

  async function handleAnalyze() {
    setError('');
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
  }

  async function handleDownload() {
    setError(''); // Clear error at start
    // Check for File System API support
    // @ts-ignore
    if (typeof window.showDirectoryPicker !== 'function') {
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
    } catch (e: any) {
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
      <strong>1️⃣ &nbsp; Have finished the setup:</strong>
      <ul className='tw:list-disc tw:pl-4 tw:mb-10'>
        <li>
          <a href="/docs/get-started/setup/read-me-first" className='tw:link'>Setup Uitimate</a>
        </li>
      </ul>
      <strong>2️⃣ &nbsp; Install vendor dependencies:</strong>
      <TerminalCommandInstructor
        cli={cli}
      />

      <br />
      <strong>3️⃣ &nbsp; Install relevant files:</strong>
      <br />
      <Banner className='tw:my-3'>
        Since you've accepted <span className='tw:code'>{preferences.componentsPath}</span> as the path to store all our components in
        {` `} <a href='/docs/get-started/setup/read-me-first' className='tw:link'>Setup Uitimate</a>,
        so, after pressing the button below, you <span className='tw:text-destructive'>MUST</span> pick the same path!
      </Banner>
      <Cta onClick={handleDownload} disabled={downloading} className="tw:mt-2 tw:w-fit tw:relative">
        <Icon icon='lucide:cloud-download' />
        {downloading ? 'Saving...' : 'Save Source Files'}
      </Cta>
      <details className='tw:mt-4'>
        <summary className='tw:cursor-pointer'>Watch how to use "Save Source Files" correctly if this is your first time</summary>
        <div>
          <p>
            This is VERY DIFFERENT from traditional "installation"
            because we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API" className='tw:link'>File System API</a>.
          </p>

          <p>
            Your browser will ask for permission—just accept all prompts,
            and it will literally save files to your local folder (i.e., no zip file involved). That's why you can use the component immediately.
          </p>
          <Banner>
            The source files are just "component folders". Currently,
            we don't recommend changing those folder names,
            nor extracting the files from them,
            because that would break best practices, and you may have trouble getting updates in the future.
          </Banner>
          <hr />
          <p>
            If you're curious why we use this API, the simple answer is: because we adopt a VPM (Virtual Package Management) approach.
          </p>
          <p>
            In fact, explaining all the relevant concepts would require an article,
            so a slightly longer answer is: under the VPM architecture, no NPM command can be used to install the component,
            so how can you use the component then?
          </p>
          <p>
            One way is to create a CLI tool to do the work,
            but that means you need to learn more tools,
            and it can be more complicated than you expect depending on your development environment.
            That can be frustrating!
          </p>
          <p>
            That's why we use the File System API: you can literally just do a few clicks—and often just one click—
            and the component will be in your project. Incredibly easy!
          </p>
          <p>
            You might ask, "But does using that API mean it can download the component regardless of the development environment's complexity?"
          </p>
          <p>
            Well, we've certainly found that it's much better, and even though there are some complexities that aren't covered,
            this feature is evolving, so it shouldn't be a problem!

            Plus, we use that API for other purposes as well, such as in the future,
            making it possible for you to get component (or relevant info/files) updates without any hassle.
          </p>
        </div>
      </details>
      {error && <div className="tw:text-destructive tw:font-bold tw:mt-2">{error}</div>}
    </div>
  );
}