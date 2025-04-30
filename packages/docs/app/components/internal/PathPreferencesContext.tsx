import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface PathPreferences {
  helpersPath: string;
  componentsPath: string;
}

interface PathPreferencesContextType {
  preferences: PathPreferences;
  updateHelpersPath: (path: string) => void;
  updateComponentsPath: (path: string) => void;
}

const DEFAULT_PREFERENCES: PathPreferences = {
  helpersPath: 'helpers',
  componentsPath: 'components/ui'
};

const STORAGE_KEY = 'uitimate-path-preferences';

const PathPreferencesContext = createContext<PathPreferencesContextType | null>(null);

export function PathPreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<PathPreferences>(() => {
    if (typeof window === 'undefined') return DEFAULT_PREFERENCES;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_PREFERENCES;

    try {
      return JSON.parse(stored);
    } catch {
      return DEFAULT_PREFERENCES;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const updateHelpersPath = (path: string) => {
    setPreferences(prev => ({ ...prev, helpersPath: path }));
  };

  const updateComponentsPath = (path: string) => {
    setPreferences(prev => ({ ...prev, componentsPath: path }));
  };

  return (
    <PathPreferencesContext.Provider value={{ preferences, updateHelpersPath, updateComponentsPath }}>
      {children}
    </PathPreferencesContext.Provider>
  );
}

export function usePathPreferences() {
  const context = useContext(PathPreferencesContext);
  if (!context) {
    throw new Error('usePathPreferences must be used within a PathPreferencesProvider');
  }
  return context;
}