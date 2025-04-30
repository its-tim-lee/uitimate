import { useState } from 'react';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Icon } from "../ui/Icon/Icon.tsx";
import { Tabs, TabsList, TabsTrigger } from '../ui/Tabs/Tabs.tsx';

const CLI_TABS = ["pnpm", "yarn", "npm"];

export default function TerminalCommandInstructor({
  cli,
}: {
  cli: string,
}) {
  const [cliTab, setCliTab] = useState('pnpm');
  const [copied, setCopied] = useState(false);

  function cliForTab(tab: string) {
    if (!cli) return '';
    return cli.replace(/^\w+/, tab);
  }
  const copy = () => {
    navigator.clipboard.writeText(cliForTab(cliTab));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }
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
      </div>
    ) : null
  );
}
