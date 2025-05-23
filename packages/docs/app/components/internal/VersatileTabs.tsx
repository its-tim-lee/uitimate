import React, { useState, useEffect, lazy, useMemo, type ComponentProps } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/Tabs/Tabs.tsx';
import { CodeBlock } from '#/components/internal/CodeBlock.tsx';
import PreviewBlock from '#/components/internal/PreviewBlock.tsx';
import { kebabCase, toLower } from 'lodash-es';
import { cn } from '#/helpers/utils.ts';
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
  showCodeFirst?: boolean;
  caption?: string;
}

type VersatileTabsProps = {
  settings: TabSetting[];
  className?: string;
  compact?: boolean;
} & ComponentProps<typeof Tabs>;

/**
 * TODO: able to show code at first, but still allowed to check the preview
 */
export default ({ id, settings, className, compact = false, variant = 'underline', ...props }: VersatileTabsProps) => {
  const [activeTab, setActiveTab] = useState(kebabCase(toLower(settings[0]?.title)));
  const [demoCodeStrings, setDemoCodeStrings] = useState<Record<string, string>>({});
  const [codeBlockVisibility, setCodeBlockVisibility] = useState<Record<string, boolean>>(
    settings.reduce((acc, $s) => {
      if ($s.type === 'preview') {
        acc[kebabCase(toLower($s.title))] = $s.showCodeFirst ?? false;
      }
      return acc;
    }, {} as Record<string, boolean>)
  );
  const [previewVisibility, setPreviewVisibility] = useState<Record<string, boolean>>(
    settings.reduce((acc, $s) => {
      if ($s.type === 'preview') {
        acc[kebabCase(toLower($s.title))] = !($s.showCodeFirst ?? false);
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

  const togglePreviewVisibility = (tabId: string) => {
    setPreviewVisibility(prev => ({
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
    <Tabs variant={variant} value={activeTab} onValueChange={handleTabChange} className={cn('not-prose', className)} {...props}>
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
                {$s.showCodeFirst ? (
                  <>
                    <CodeBlock
                      id={id}
                      showPreviewToggle={$s.showCodeFirst}
                      previewVisible={previewVisibility[tabId]}
                      onTogglePreview={() => togglePreviewVisibility(tabId)}
                    >
                      {demoCodeStrings[tabId]}
                    </CodeBlock>
                    {previewVisibility[tabId] && (
                      <>
                        <PreviewBlock compact={compact} showCode={false}>
                          {DemoComponent && <DemoComponent />}
                        </PreviewBlock>
                        {$s.caption && (
                          <div className="tw:text-sm tw:text-muted-foreground tw:my-2 tw:mb-4 tw:text-center">
                            {$s.caption}
                          </div>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <PreviewBlock showCode={$s.showCode} toggleCodeBlock={() => toggleCodeBlockVisibility(tabId)} compact={compact}>
                      {DemoComponent && <DemoComponent />}
                    </PreviewBlock>
                    {$s.caption && (
                      <div className="tw:text-sm tw:text-muted-foreground tw:my-2 tw:mb-4 tw:text-center">
                        {$s.caption}
                      </div>
                    )}
                    {codeBlockVisibility[tabId] && <CodeBlock id={id}>{demoCodeStrings[tabId]}</CodeBlock>}
                  </>
                )}
              </>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};