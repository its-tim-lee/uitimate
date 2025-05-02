import { type ReactNode } from 'react';
import { usePathPreferences } from './PathPreferencesContext';
import PathAdjuster from './PathAdjusterWrapper';
import DownloadHelpers from './DownloadHelpers';
import { PathPreferencesProvider } from './PathPreferencesContext';
import { TrackableSummary } from './TrackableSummary';
import { track } from '#/helpers/analytics/ga/index.ts';
function _HelpersPathSection() {
  const { preferences, updateHelpersPath } = usePathPreferences();
  const changePath = (path: string) => {
    updateHelpersPath(path);
    track('change_helpers_path', { to: path });
  }
  return (
    <details>
      <TrackableSummary id="setup__helpers-path-instruction">
        <span className='tw:code'>import ... from '#/helpers/...'</span>
      </TrackableSummary>

      <div className="tw:pl-4">
        <p>
          We built some helpers to make the code more maintainable,
          so it makes sense to have a folder named <span className='tw:code'>helpers</span> to store them.
          If the name <span className='tw:code'>helpers</span> doesn't fit your case, you can adjust it below:
        </p>
        <PathAdjuster
          adjustablePath={preferences.helpersPath}
          onChange={changePath}
        />
        <p>
          Next, you need to download the "helpers" folder to your project
          (PLEASE ensure that it is placed under the folder that you configured to represent <span className='tw:code'>#</span>.)
        </p>
        <DownloadHelpers />
        <br />
        <br />
      </div>
    </details>
  );
}

export const HelpersPathSection = () => {
  return (
    <PathPreferencesProvider>
      <_HelpersPathSection />
    </PathPreferencesProvider>
  )
}

function _ComponentsPathSection() {
  const { preferences, updateComponentsPath } = usePathPreferences();
  const changePath = (path: string) => {
    updateComponentsPath(path);
    track('change_components_path', { to: path });
  }
  return (
    <details>
      <TrackableSummary id="setup__components-path-instruction">
        <span className='tw:code'>import ... from '#/components/ui/...'</span>
      </TrackableSummary>
      <div className="tw:pl-4">
        <p>
          The path
          <span className='tw:code'>components/ui</span> is the default. In this structure,
          <span className='tw:code'>components</span> means you only place component-related files under that folder,
          and <span className='tw:code'>ui</span> stands for the component library, which is where we recommend you store all our components.
          If the default doesn't fit your case, you can adjust it below:
        </p>
        <PathAdjuster
          adjustablePath={preferences.componentsPath}
          onChange={changePath}
        />
      </div>
    </details>
  );
}

export const ComponentsPathSection = () => {
  return (
    <PathPreferencesProvider>
      <_ComponentsPathSection />
    </PathPreferencesProvider>
  )
}