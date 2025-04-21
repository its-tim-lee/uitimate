import React, { useState, useEffect, lazy, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/Tabs/Tabs.tsx';
import { CodeBlock } from '#/components/internal/CodeBlock.tsx';
import PreviewBlock from '#/components/internal/PreviewBlock.tsx';
import { kebabCase, toLower } from 'lodash-es';
import { cn } from '#/helpers/css.ts';
// Helper function to try importing with fallbacks
const tryImportComponent = async (demoId: string) => {
  try {
    return await import(`./../demo/${demoId}.tsx`);
  } catch (error) {
    try {
      return await import(`./../demo/recipe/${demoId}.tsx`);
    } catch (error) {
      return { default: () => null };
    }
  }
};

// Helper function to try importing raw content with fallbacks
const tryImportRawContent = async (demoId: string) => {
  try {
    return await import(`./../demo/${demoId}.tsx?raw`);
  } catch (error) {
    try {
      return await import(`./../demo/recipe/${demoId}.tsx?raw`);
    } catch (error) {
      return { default: '' };
    }
  }
};

interface TabSetting {
  title?: string;
  type: 'link' | 'normal' | 'preview';
  /**
   * HACK:
   * Currently, the only reason that `content` can be a string is literally just for Astro limitation.
   * In .astro file, we can't provide a JSX as content, so the alternative is to provide that in a string.
   */
  content?: string | React.ReactNode;
  onClick?: () => void;
  demoId?: string;
  showCode?: boolean;
  caption?: string;
}

interface VersatileTabsProps {
  settings: TabSetting[];
  className?: string;
  compact?: boolean;
}

/**
 * TODO: able to show code at first, but still allowed to check the preview
 */
export default ({ settings, className, compact = false }: VersatileTabsProps) => {
  const [activeTab, setActiveTab] = useState(kebabCase(toLower(settings[0]?.title)));
  const [demoCodeStrings, setDemoCodeStrings] = useState<Record<string, string>>({});
  const [codeBlockVisibility, setCodeBlockVisibility] = useState<Record<string, boolean>>(
    settings.reduce((acc, $s) => {
      if ($s.type === 'preview') {
        acc[kebabCase(toLower($s.title))] = false;
      }
      return acc;
    }, {} as Record<string, boolean>)
  );
  const demoComponents = useMemo(() => {
    return settings.reduce((acc, $s) => {
      if ($s.type === 'preview' && $s.demoId) {
        acc[kebabCase(toLower($s.title))] = lazy(() => tryImportComponent($s.demoId!));
      }
      return acc;
    }, {} as Record<string, React.LazyExoticComponent<any>>);
  }, [settings]);

  useEffect(() => {
    const loadDemoCodeStrings = async () => {
      const codeStrings: Record<string, string> = {};
      for (const setting of settings) {
        if (setting.type === 'preview' && setting.demoId) {
          const tabId = kebabCase(toLower(setting.title));
          const module = await tryImportRawContent(setting.demoId);
          codeStrings[tabId] = module.default;
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
    <Tabs variant="underline" value={activeTab} onValueChange={handleTabChange} className={cn('not-prose', className)}>
      <TabsList>
        {settings.map($s => (
          $s.title && (
            <TabsTrigger key={$s.title} value={kebabCase(toLower($s.title))}>{$s.title}</TabsTrigger>
          )
        ))}
      </TabsList>
      {settings.map($s => {
        const tabId = kebabCase(toLower($s.title));
        const DemoComponent = $s.type === 'preview' && $s.demoId ? demoComponents[tabId] : null;
        return (
          <TabsContent
            key={tabId} value={tabId}
            className={$s.type === 'preview' ? 'tw:p-4 tw:py-0' : ''}>
            {$s.type === 'normal' && (
              typeof $s.content === 'string'
                ? <div dangerouslySetInnerHTML={{ __html: $s.content }} />
                : $s.content
            )}
            {$s.type === 'preview' && (
              <>
                <div className='tw:text-sm tw:text-muted-foreground tw:leading-relaxed'>
                  {typeof $s.content === 'string'
                    ? <div dangerouslySetInnerHTML={{ __html: $s.content }} />
                    : $s.content
                  }
                </div>
                <PreviewBlock showCode={$s.showCode} toggleCodeBlock={() => toggleCodeBlockVisibility(tabId)} compact={compact}>
                  {DemoComponent && <DemoComponent />}
                </PreviewBlock>
                {$s.caption && <div className="tw:text-sm tw:text-muted-foreground tw:mt-2 tw:text-center">
                  {$s.caption}
                </div>}
                {codeBlockVisibility[tabId] && <CodeBlock>{demoCodeStrings[tabId]}</CodeBlock>}
              </>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};