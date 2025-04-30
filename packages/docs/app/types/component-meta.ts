import type { ReactNode } from 'react';
type Status = 'WIP' | 'NEW' | 'ALPHA';

/**
 * Type definition for component metadata files (.meta.tsx)
 */
export interface ComponentMeta {
  /**
   * Tags for categorizing or identifying special features of the component
   */
  tags?: {
    root?: Status[];
    tutorial?: Status[];
    introduction?: Status[];
    api?: Status[];
    [key: string]: Status[] | undefined;
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