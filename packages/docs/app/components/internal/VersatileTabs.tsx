import React, { useState, useEffect, lazy, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs/Tabs.tsx';
import { CodeBlock } from './CodeBlock.tsx';
import PreviewBlock from './PreviewBlock.tsx';
import { kebabCase, toLower } from 'lodash-es';

interface TabSetting {
  title: string;
  type: 'link' | 'normal' | 'preview';
  /**
   * HACK:
   * Currently, the only reason that `content` can be a string is literally just for Astro limitation.
   * In .astro file, we can't provide a JSX as content, so the alternative is to provide that in a string.
   */
  content?: string | React.ReactNode;
  onClick?: () => void;
  demoId?: string;
}

interface VersatileTabsProps {
  settings: TabSetting[];
}

export default ({ settings }: VersatileTabsProps) => {
  const [activeTab, setActiveTab] = useState(kebabCase(toLower(settings[0]?.title)));
  const [demoCodeStrings, setDemoCodeStrings] = useState<Record<string, string>>({});
  const [codeBlockVisibility, setCodeBlockVisibility] = useState<Record<string, boolean>>(
    settings.reduce((acc, $s) => {
      if ($s.type === 'preview') {
        acc[kebabCase(toLower($s.title))] = true;
      }
      return acc;
    }, {} as Record<string, boolean>)
  );
  const demoComponents = useMemo(() => {
    return settings.reduce((acc, $s) => {
      if ($s.type === 'preview' && $s.demoId) {
        acc[kebabCase(toLower($s.title))] = lazy(() =>
          import(`./../demo/${$s.demoId}.tsx`)
        );
      }
      return acc;
    }, {} as Record<string, React.LazyExoticComponent<any>>);
  }, [settings]);

  useEffect(() => {
    const loadDemoCodeStrings = async () => {
      const codeStrings: Record<string, string> = {};
      for (const setting of settings) {
        if (setting.type === 'preview' && setting.demoId) {
          try {
            const tabId = kebabCase(toLower(setting.title));
            const module = await import(`./../demo/${setting.demoId}.tsx?raw`);
            codeStrings[tabId] = module.default;
          } catch (error) {
            console.error(`Failed to load demo code for ${setting.demoId}:`, error);
          }
        }
      }
      setDemoCodeStrings(codeStrings);
    };
    loadDemoCodeStrings();
  }, [settings]);

  const toggleCodeBlockVisibility = (tabId: string) => {
    setCodeBlockVisibility(prev => ({
      ...prev,
      [tabId]: !prev[tabId]
    }));
  };

  const handleTabChange = (tabId: string) => {
    const selectedSetting = settings.find($s => kebabCase(toLower($s.title)) === tabId);
    selectedSetting?.onClick && selectedSetting.onClick();
    if (selectedSetting?.type === 'link') return
    setActiveTab(tabId);
  };

  return (
    <Tabs variant="underline" value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        {settings.map($s => (
          <TabsTrigger key={$s.title} value={kebabCase(toLower($s.title))}>{$s.title}</TabsTrigger>
        ))}
      </TabsList>
      {settings.map($s => {
        const tabId = kebabCase(toLower($s.title));
        const DemoComponent = $s.type === 'preview' && $s.demoId ? demoComponents[tabId] : null;
        return (
          <TabsContent
            key={tabId} value={tabId}
            className={$s.type === 'preview' ? 'tw:p-4' : ''}>
            {$s.type === 'normal' && (
              typeof $s.content === 'string'
                ? <div dangerouslySetInnerHTML={{ __html: $s.content }} />
                : $s.content
            )}
            {$s.type === 'preview' && (
              <>
                {typeof $s.content === 'string'
                  ? <div dangerouslySetInnerHTML={{ __html: $s.content }} />
                  : $s.content
                }
                <PreviewBlock toggleCodeBlock={() => toggleCodeBlockVisibility(tabId)}>
                  {DemoComponent && <DemoComponent />}
                </PreviewBlock>
                {codeBlockVisibility[tabId] && <CodeBlock>{demoCodeStrings[tabId]}</CodeBlock>}
              </>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};