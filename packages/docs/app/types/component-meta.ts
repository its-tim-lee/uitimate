import type { ReactNode } from 'react';

/**
 * Type definition for component metadata files (.meta.tsx)
 */
export interface ComponentMeta {
  /**
   * Tags for categorizing or identifying special features of the component
   */
  tags?: {
    root?: ('WIP' | 'NEW')[];
    tutorial?: ('WIP' | 'NEW')[];
    introduction?: ('WIP' | 'NEW')[];
    api?: ('WIP' | 'NEW')[];
    [key: string]: ('WIP' | 'NEW')[] | undefined;
  };

  /**
   * Description of the component, can include JSX elements
   */
  description: ReactNode | string;

  /**
   * String representation of the component's usage structure
   */
  anatomy?: string;

  /**
   * Any additional metadata fields that might be added in the future
   */
  [key: string]: unknown;
}