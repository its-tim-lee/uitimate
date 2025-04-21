import React, { useState, useEffect, lazy, useMemo, useCallback, type ComponentProps, type ReactNode } from 'react';
import { Tabs as TabsPrimitive, TabsContent as TabsContentPrimitive, TabsList as TabsListPrimitive, TabsTrigger as TabsTriggerPrimitive } from '#/components/ui/Tabs/Tabs.tsx';
import { CodeBlock } from '#/components/internal/CodeBlock.tsx';
import PreviewBlock from '#/components/internal/PreviewBlock.tsx';
import { cn } from '#/helpers/css.ts';
import { VersatileTabs2Provider, useVersatileTabs2Context } from './VersatileTabs2Context';

// --- Helper functions for dynamic imports (copied from VersatileTabs) ---
const tryImportComponent = async (demoId: string) => {
  try {
    return await import(`./../demo/${demoId}.tsx`);
  } catch (error) {
    try {
      return await import(`./../demo/recipe/${demoId}.tsx`);
    } catch (error) {
      console.error(`Failed to load demo component: ${demoId}`, error);
      return { default: () => <div>Error loading demo: {demoId}</div> };
    }
  }
};

const tryImportRawContent = async (demoId: string) => {
  try {
    return await import(`./../demo/${demoId}.tsx?raw`);
  } catch (error) {
    try {
      return await import(`./../demo/recipe/${demoId}.tsx?raw`);
    } catch (error) {
      console.error(`Failed to load demo code: ${demoId}`, error);
      return { default: '// Error loading code' };
    }
  }
};
// --- End Helper Functions ---

// Main Tabs Component (Provider)
type VersatileTabs2Props = ComponentProps<typeof TabsPrimitive> & {
  compact?: boolean; // Add compact to our component props but don't pass it to DOM
};

const VersatileTabs2 = ({ children, className, variant = 'underline', compact, ...props }: VersatileTabs2Props) => {
  const [demoRegistry, setDemoRegistry] = useState<Record<string, { demoId: string, showCodeFirst?: boolean }>>({});
  const [demoCodeStrings, setDemoCodeStrings] = useState<Record<string, string>>({});
  const [demoComponents, setDemoComponents] = useState<Record<string, React.LazyExoticComponent<any>>>({});
  const [codeBlockVisibility, setCodeBlockVisibility] = useState<Record<string, boolean>>({});
  const [previewVisibility, setPreviewVisibility] = useState<Record<string, boolean>>({});

  const registerDemo = useCallback((tabId: string, demoId: string, showCodeFirst?: boolean) => {
    setDemoRegistry(prev => ({ ...prev, [tabId]: { demoId, showCodeFirst } }));
    setCodeBlockVisibility(prev => ({ ...prev, [tabId]: showCodeFirst ?? false }));
    setPreviewVisibility(prev => ({ ...prev, [tabId]: !(showCodeFirst ?? false) }));
  }, []);

  useEffect(() => {
    const loadDemos = async () => {
      const codeStrings: Record<string, string> = {};
      const components: Record<string, React.LazyExoticComponent<any>> = {};
      for (const tabId in demoRegistry) {
        const { demoId } = demoRegistry[tabId];
        if (!demoCodeStrings[tabId]) {
          const codeModule = await tryImportRawContent(demoId);
          codeStrings[tabId] = codeModule.default;
        }
        if (!demoComponents[tabId]) {
          components[tabId] = lazy(() => tryImportComponent(demoId));
        }
      }
      setDemoCodeStrings(prev => ({ ...prev, ...codeStrings }));
      setDemoComponents(prev => ({ ...prev, ...components }));
    };

    if (Object.keys(demoRegistry).length > 0) {
      loadDemos();
    }
  }, [demoRegistry]); // Rerun when demos are registered

  const toggleCodeBlockVisibility = useCallback((tabId: string) => {
    setCodeBlockVisibility(prev => ({ ...prev, [tabId]: !prev[tabId] }));
  }, []);

  const togglePreviewVisibility = useCallback((tabId: string) => {
    setPreviewVisibility(prev => ({ ...prev, [tabId]: !prev[tabId] }));
  }, []);

  const contextValue = useMemo(() => ({
    demoCodeStrings,
    demoComponents,
    codeBlockVisibility,
    previewVisibility,
    toggleCodeBlockVisibility,
    togglePreviewVisibility,
    registerDemo,
    compact // Pass compact to context so child components can use it
  }), [demoCodeStrings, demoComponents, codeBlockVisibility, previewVisibility, toggleCodeBlockVisibility, togglePreviewVisibility, registerDemo, compact]);

  return (
    <VersatileTabs2Provider value={contextValue}>
      <TabsPrimitive variant={variant} className={cn('not-prose', className)} {...props}>
        {children}
      </TabsPrimitive>
    </VersatileTabs2Provider>
  );
};

// Basic Wrappers
const VersatileTabs2List = ({ className, ...props }: ComponentProps<typeof TabsListPrimitive>) => (
  <TabsListPrimitive className={className} {...props} />
);

const VersatileTabs2Trigger = ({ className, ...props }: ComponentProps<typeof TabsTriggerPrimitive>) => (
  <TabsTriggerPrimitive className={className} {...props} />
);

// const VersatileTabs2Content = ({ className, ...props }: ComponentProps<typeof TabsContentPrimitive>) => (
//   <TabsContentPrimitive className={className} {...props} />
// );

// Specialized Content for Previews
interface VersatileTabs2PreviewContentProps extends ComponentProps<typeof TabsContentPrimitive> {
  demoId: string;
  showCode?: boolean;
  showCodeFirst?: boolean;
  caption?: string;
  compact?: boolean;
  children?: ReactNode; // For optional extra content like descriptions
}

const VersatileTabs2Content = ({
  demoId,
  showCode = true, // Default to true like PreviewBlock
  showCodeFirst = false,
  caption,
  compact, // Get compact from props
  children,
  value,
  className,
  ...props
}: VersatileTabs2PreviewContentProps) => {
  const {
    demoCodeStrings,
    demoComponents,
    codeBlockVisibility,
    previewVisibility,
    toggleCodeBlockVisibility,
    togglePreviewVisibility,
    registerDemo,
    compact: contextCompact // Get compact from context
  } = useVersatileTabs2Context();

  // Use compact from props or context, with props taking precedence
  const resolvedCompact = compact !== undefined ? compact : contextCompact;

  useEffect(() => {
    if (value) {
      registerDemo(value, demoId, showCodeFirst);
    }
  }, [registerDemo, value, demoId, showCodeFirst]);

  if (!value) return null; // Required for context operations

  const DemoComponent = demoComponents[value];
  const codeString = demoCodeStrings[value] || '// Loading code...';
  const isCodeVisible = codeBlockVisibility[value] ?? showCodeFirst;
  const isPreviewVisible = previewVisibility[value] ?? !showCodeFirst;

  return (
    <TabsContentPrimitive value={value} className={cn('tw:p-4 tw:py-0', className)} {...props}>
      {children && (
        <div className='tw:text-sm tw:text-muted-foreground tw:leading-relaxed tw:mb-4'>
          {children}
        </div>
      )}
      {showCodeFirst ? (
        <>
          <CodeBlock
            showPreviewToggle={true} // Always allow toggling back to preview
            previewVisible={isPreviewVisible}
            onTogglePreview={() => togglePreviewVisibility(value)}
          >
            {codeString}
          </CodeBlock>
          {isPreviewVisible && (
            <>
              <PreviewBlock compact={resolvedCompact} showCode={false}>
                {DemoComponent ? <React.Suspense fallback={<div>Loading Demo...</div>}><DemoComponent /></React.Suspense> : <div>Loading...</div>}
              </PreviewBlock>
              {caption && (
                <div className="tw:text-sm tw:text-muted-foreground tw:my-2 tw:mb-4 tw:text-center">
                  {caption}
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <PreviewBlock showCode={showCode} toggleCodeBlock={() => toggleCodeBlockVisibility(value)} compact={resolvedCompact}>
            {DemoComponent ? <React.Suspense fallback={<div>Loading Demo...</div>}><DemoComponent /></React.Suspense> : <div>Loading...</div>}
          </PreviewBlock>
          {caption && (
            <div className="tw:text-sm tw:text-muted-foreground tw:my-2 tw:mb-4 tw:text-center">
              {caption}
            </div>
          )}
          {isCodeVisible && showCode && <CodeBlock>{codeString}</CodeBlock>}
        </>
      )}
    </TabsContentPrimitive>
  );
};

export {
  VersatileTabs2,
  VersatileTabs2List,
  VersatileTabs2Trigger,
  VersatileTabs2Content,
};