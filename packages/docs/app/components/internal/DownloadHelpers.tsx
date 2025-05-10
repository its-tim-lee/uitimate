import { useState } from 'react';
import { toast } from '../ui/Toast/Toast.tsx';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Icon } from "../ui/Icon/Icon.tsx";
import Banner from './InfoBanner.tsx';
import FileSystemApiDialog from './FileSystemApiDialog';
import { useFileSystemDownload } from './useFileSystemDownload';
import { usePathPreferences } from './PathPreferencesContext';
import type { FileToDownload } from './useFileSystemDownload';
import { serializeError, deserializeError } from 'serialize-error';
import { track } from '#/helpers/analytics/ga/index.ts';


const GITHUB_BASE =
  'https://raw.githubusercontent.com/its-tim-lee/uitimate/main/packages/docs/app/helpers';

export default function DownloadHelpers() {
  const {
    dialogOpen,
    setDialogOpen,
    downloading,
    error,
    downloadFiles,
  } = useFileSystemDownload();
  const [fetching, setFetching] = useState(false);
  const { preferences } = usePathPreferences();

  // Get the user's preferred helpers path, fallback to 'helpers' if not set
  const helpersPath = preferences.helpersPath || 'helpers';

  async function handleDownload() {
    setFetching(true);
    try {
      // Download utils.ts
      const utilsRes = await fetch(`${GITHUB_BASE}/utils.ts`);
      if (!utilsRes.ok) throw new Error('Failed to fetch utils.ts');
      const utilsCode = await utilsRes.text();

      // Download use-mobile.tsx
      const mobileHookRes = await fetch(`${GITHUB_BASE}/hooks/use-mobile.tsx`);
      if (!mobileHookRes.ok) throw new Error('Failed to fetch use-mobile.tsx');
      const mobileHookCode = await mobileHookRes.text();

      const files: FileToDownload[] = [
        { path: `${helpersPath}/utils.ts`, content: utilsCode },
        { path: `${helpersPath}/hooks/use-mobile.tsx`, content: mobileHookCode }
      ];

      const success = await downloadFiles(files);

      if (success) {
        toast('Helpers folder downloaded!', {
          description: 'The "helpers" folder has been saved to your folder.'
        });
      }
    } catch (e: any) {
      track('exception', { error: JSON.stringify(serializeError(e)), description: 'fail to download helpers' });
      // Let the useFileSystemDownload hook handle File System API errors
      if (!e.message.includes('File System API')) {
        toast('Download failed', { description: e.message });
      }
    }
    setFetching(false);
  }

  return (
    <div>
      <FileSystemApiDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        featureName="Download helpers"
      />
      <Cta onClick={handleDownload} disabled={downloading || fetching} className="tw:w-fit tw:relative">
        <Icon icon='lucide:cloud-download' />
        {downloading || fetching ? 'Saving...' : 'Download "helpers"'}
      </Cta>
      <details className='tw:mt-4 tw:cursor-pointer'>
        <summary>Watch how to use "Download helpers" correctly if this is your first time</summary>
        <p>
          This is VERY DIFFERENT from traditional "installation"
          because we use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API" className='tw:link'>File System API</a>.
          You'll see this approach in other places on our site as well.
        </p>
        <p>
          Your browser will ask for permission—just accept all prompts,
          and it will literally save files to your local folder (i.e., no zip file involved).
        </p>
        <hr />
        <p>
          If you're curious why we use this API, the simple answer is: because we adopt a VPM (Virtual Package Management) approach.
        </p>
        <p>
          In fact, explaining all the relevant concepts would require an article,
          so a slightly longer answer is: under the VPM architecture, no NPM command can be used to install our components (or the relevant files),
          so how can you use the component then?
        </p>
        <p>
          One way is to create a CLI tool to do the work,
          but that means you need to learn more tools,
          and it can be more complicated than you expect depending on your development environment.
          That can be frustrating! (note: it's freaking frustrated to me when I used shadcn/ui's whatever installation or setup)
        </p>
        <p>
          That's why we use the File System API: you can literally just do a few clicks ⎯ and often just one click ⎯
          and the component will be in your project. Incredibly easy!
        </p>
        <p>
          You might ask, "But does using that API mean it can download the component regardless of the development environment's complexity?"
        </p>
        <p>
          Well, we've certainly found that it's much better, and even though there are some complexities that aren't covered,
          this feature is evolving, so it shouldn't be a problem!

          Plus, we use that API for other purposes as well, such as in the future,
          making you get the component (or the relevant info/files) update without any hassle.
        </p>
      </details>
      {error && <div className="tw:text-destructive tw:font-bold tw:mt-2">{error}</div>}
    </div>
  );
}