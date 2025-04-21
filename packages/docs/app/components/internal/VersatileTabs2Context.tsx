import { createContext, useContext, type ReactNode } from 'react';

interface VersatileTabs2ContextProps {
  demoCodeStrings: Record<string, string>;
  demoComponents: Record<string, React.LazyExoticComponent<any>>;
  codeBlockVisibility: Record<string, boolean>;
  previewVisibility: Record<string, boolean>;
  toggleCodeBlockVisibility: (tabId: string) => void;
  togglePreviewVisibility: (tabId: string) => void;
  registerDemo: (tabId: string, demoId: string, showCodeFirst?: boolean) => void;
  compact?: boolean;
}

const VersatileTabs2Context = createContext<VersatileTabs2ContextProps | undefined>(undefined);

export const useVersatileTabs2Context = () => {
  const context = useContext(VersatileTabs2Context);
  if (!context) {
    throw new Error('useVersatileTabs2Context must be used within a VersatileTabs2Provider');
  }
  return context;
};

export const VersatileTabs2Provider = ({ children, value }: { children: ReactNode, value: VersatileTabs2ContextProps }) => {
  return (
    <VersatileTabs2Context.Provider value={value}>
      {children}
    </VersatileTabs2Context.Provider>
  );
};