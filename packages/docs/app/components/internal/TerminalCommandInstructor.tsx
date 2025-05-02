import { useState, useEffect, Children, isValidElement } from 'react';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Icon } from "../ui/Icon/Icon.tsx";
import { Tabs, TabsList, TabsTrigger } from '../ui/Tabs/Tabs.tsx';
import { track } from '#/helpers/analytics/ga/index.ts';

const CLI_TABS = ["pnpm", "yarn", "npm"];

// Named slot components for MDX/React composition
export function Pnpm({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Yarn({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Npm({ children }: { children: React.ReactNode }) { return <>{children}</>; }

export default function TerminalCommandInstructor({
  cli,
  children,
}: {
  cli: string,
  children?: React.ReactNode,
}) {
  const [cliTab, setCliTab] = useState('pnpm');
  const [copied, setCopied] = useState(false);

  // On mount, check localStorage for saved tab
  useEffect(() => {
    const savedTab = localStorage.getItem('terminal-cli-tab');
    if (savedTab && CLI_TABS.includes(savedTab)) {
      setCliTab(savedTab);
    }
  }, []);

  // When cliTab changes, save to localStorage
  useEffect(() => {
    if (cliTab !== 'pnpm') {
      localStorage.setItem('terminal-cli-tab', cliTab);
    } else {
      localStorage.removeItem('terminal-cli-tab');
    }
  }, [cliTab]);

  function cliForTab(tab: string) {
    if (!cli) return '';
    return cli.replace(/^\w+/, tab);
  }
  const copy = () => {
    navigator.clipboard.writeText(cliForTab(cliTab));
    setCopied(true);
    track('copy_cli_command', { manager: cliTab, command: cli });
    setTimeout(() => setCopied(false), 1500);
  }

  // Find slot content for the current tab
  let slotContent = null;
  Children.forEach(children, child => {
    if (!isValidElement(child)) return;
    if (cliTab === 'pnpm' && child.type === Pnpm) slotContent = child;
    if (cliTab === 'yarn' && child.type === Yarn) slotContent = child;
    if (cliTab === 'npm' && child.type === Npm) slotContent = child;
  });

  return (
    cli ? (
      <div className='tw:flex tw:flex-col'>
        <Tabs value={cliTab} onValueChange={setCliTab} variant="underline">
          <TabsList>
            {CLI_TABS.map(tab => (
              <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Cta muted shapes={['badge']} variant="outline" size="lg" className="tw:cursor-default tw:p-4 tw:font-mono tw:w-full tw:max-w-[450px] tw:justify-between">
          <span className="tw:py-2 tw:overflow-x-scroll tw:break-all">{cliForTab(cliTab)}</span>
          <Cta shapes={['icon']} variant="ghost" size="sm" className="tw:shadow-none tw:pointer-events-auto" onClick={copy}>
            <Icon icon={copied ? 'lucide:check' : 'lucide:copy'} />
          </Cta>
        </Cta>
        {slotContent && <div className="tw:mt-2">{slotContent}</div>}
      </div>
    ) : null
  );
}
