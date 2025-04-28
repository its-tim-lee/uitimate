import { useState, useEffect } from 'react';
import { generate } from '#/helpers/lock-info-generator';
import pkg from '#/../package.json';
import { toast, Toaster } from '../ui/Toast/Toast.tsx';
import TerminalCommandInstructor from './TerminalCommandInstructor';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Icon } from "../ui/Icon/Icon.tsx";
import { TooltipTrigger, TooltipContent, Tooltip } from '../ui/Tooltip/Tooltip.tsx';
import Banner from './InfoBanner.tsx';
import { Dialog, DialogHeading, DialogSubtitle, DialogAction } from '../ui/Dialog/Dialog.tsx';
const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/its-tim-lee/uitimate/main/packages/docs/app/components/ui';

async function fetchComponentSource(component: string): Promise<string> {
  const url = `${GITHUB_RAW_BASE}/${component}/${component}.tsx`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${component}.tsx`);
  return await res.text();
}

async function collectDeps(
  component: string,
  pkgDeps: Record<string, string>,
  visited = new Set<string>()
): Promise<{ vendor: Record<string, string>; files: { name: string; code: string }[] }> {
  if (visited.has(component)) return { vendor: {}, files: [] };
  visited.add(component);

  const code = await fetchComponentSource(component);
  const { vendor, native } = generate(code, pkgDeps);

  let allVendor = { ...vendor };
  let allFiles = [{ name: component, code }];

  for (const nativeComp of native) {
    const { vendor: v, files: f } = await collectDeps(nativeComp, pkgDeps, visited);
    allVendor = { ...allVendor, ...v };
    allFiles = [...allFiles, ...f];
  }

  return { vendor: allVendor, files: allFiles };
}

export default function OneClickSetup({ component }: { component: string }) {
  const [cli, setCli] = useState('');
  const [files, setFiles] = useState<{ name: string; code: string }[]>([]);
  const [error, setError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    handleAnalyze();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component]);

  async function handleAnalyze() {
    setError('');
    try {
      const { vendor, files } = await collectDeps(component, pkg.dependencies);
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
      for (const { name, code } of files) {
        const folder = await dirHandle.getDirectoryHandle(name, { create: true });
        const fileHandle = await folder.getFileHandle(`${name}.tsx`, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(code);
        await writable.close();
      }
      toast('All source files copied successfully!', {
        description: 'All selected component source files have been saved to your folder.'
      });
    } catch (e: any) {
      setError(e.message);
    }
    setDownloading(false);
  }

  async function handleCopy(command: string) {
    if (!command) return;
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast('Install command copied!', {
        description: 'You can now paste it into your terminal.'
      });
      setTimeout(() => setCopied(false), 1500);
    } catch (e: any) {
      toast('Failed to copy command', { description: e?.message || JSON.stringify(e) });
    }
  }

  return (
    <div className="tw:p-4 tw:rounded-lg">
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogHeading>Feature is Not Supported</DialogHeading>
        <DialogSubtitle>
          Your browser does not support the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API" className='tw:link'>File System API</a>
          {` `}
          required for "Save Source Files" to work.
          <br />
          <br />
          Please use a Chromium-based browser (eg., <b>Google Chrome</b>) to visit this page and do again.
        </DialogSubtitle>
        <DialogAction>
          <Cta onClick={() => setDialogOpen(false)} variant="primary">OK</Cta>
        </DialogAction>
      </Dialog>
      <Toaster />
      <strong>Install vendor dependencies:</strong>
      <TerminalCommandInstructor
        cli={cli}
        onCopy={handleCopy}
        copied={copied}
      />
      <br />
      <strong>Install relevant files:</strong>
      <br />
      <Cta onClick={handleDownload} disabled={downloading} className="tw:mt-2 tw:w-fit tw:relative">
        <Icon icon='lucide:cloud-download' />
        {downloading ? 'Saving...' : 'Save Source Files'}
      </Cta>
      <details className='tw:mt-4 tw:cursor-pointer'>
        <summary>Watch out how to use "Save Source Files" correctly if this is your first time</summary>
        <p>
          This is VERY DIFFERENT from the traditional "Installation",
          because we use <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API" className='tw:link'>File System API</a>.
        </p>

        <p>
          Browser will ask the permission, but just say-yes all the way down,
          then it'll literally save files to your local folder (ie., no zip file), that's why you can use the component immediately.
          So making sure you pick the folder that contains all the (library) components, and using Git.
        </p>
        <Banner>
          The source files are just "component folders". Currently,
          we don't recommend you to change those folder name,
          nor extract the files from them,
          because that would break the best practices, and you may get trouble in the future to get the updates.
        </Banner>
        <hr />
        <p>
          In case you curious that why we use that API, a simple answer is: because of we adopt VPM (ie., Virtual Package Manager) approach.
        </p>
        <p>
          In fact, explaining all the relevant concepts will be an article,
          so a big longer answer is: under VPM architecture, no NPM command can be used to install the component,
          so how can you use the component then?
        </p>
        <p>
          One way is creating a CLI tool to do the work,
          but that means that you need to learn more stuff,
          and it can be MORE than you thought depends on the complexity of your development environment,
          and that sucks!
        </p>
        <p>
          That's why we use File System API, and you literally can just do few clicks and in many times, just one click,
          and the component will be in your project, incredible easy!
        </p>
        <p>
          You might ask that, "But does use that API means it can download the component regardless of the development environment complexity?"
        </p>
        <p>
          Well, we certainly found that it's far more better, and even though there are some complexities that aren't covered,
          this feature is evolving, so shouldn't be a problem!
        </p>
      </details>
      {error && <div className="tw:text-destructive tw:font-bold tw:mt-2">{error}</div>}
    </div>
  );
}