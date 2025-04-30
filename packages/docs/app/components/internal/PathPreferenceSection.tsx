import { type ReactNode } from 'react';
import { usePathPreferences } from './PathPreferencesContext';
import PathAdjuster from './PathAdjusterWrapper';
import DownloadHelpers from './DownloadHelpers';
import { PathPreferencesProvider } from './PathPreferencesContext';

function _HelpersPathSection() {
  const { preferences, updateHelpersPath } = usePathPreferences();

  return (
    <details>
      <summary className="tw:cursor-pointer">
        <span className='tw:code'>import ... from '#/helpers/...'</span>
      </summary>
      <div className="tw:pl-4">
        <p>
          We built some helpers to make the code more maintainable,
          so it makes sense to have a folder named <span className='tw:code'>helpers</span> to store them.
          If the name <span className='tw:code'>helpers</span> doesn't fit your case, you can adjust it below:
        </p>
        <PathAdjuster
          adjustablePath={preferences.helpersPath}
          onChange={updateHelpersPath}
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
  return (
    <details>
      <summary className="tw:cursor-pointer">
        <span className='tw:code'>import ... from '#/components/ui/...'</span>
      </summary>
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
          onChange={updateComponentsPath}
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