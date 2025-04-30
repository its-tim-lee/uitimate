import { useState } from 'react';

export interface FileToDownload {
  // path relative to the root chosen by the user, e.g. 'helpers/utils.ts' or 'helpers/hooks/index.ts'
  path: string;
  content: string;
}

export function useFileSystemDownload() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState('');

  // Check for File System API support
  const isSupported = typeof window !== 'undefined' && typeof (window as any).showDirectoryPicker === 'function';

  // Download files/folders to user-picked directory
  const downloadFiles = async (files: FileToDownload[]) => {
    if (!isSupported) {
      setDialogOpen(true);
      return false;
    }
    setDownloading(true);
    setError('');
    try {
      // @ts-ignore
      const dirHandle = await (window as any).showDirectoryPicker();
      for (const file of files) {
        const parts = file.path.split('/');
        let currentDir = dirHandle;
        // Create folders as needed
        for (let i = 0; i < parts.length - 1; i++) {
          currentDir = await currentDir.getDirectoryHandle(parts[i], { create: true });
        }
        // Create and write file
        const fileHandle = await currentDir.getFileHandle(parts[parts.length - 1], { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(file.content);
        await writable.close();
      }
      return true;
    } catch (e: any) {
      setError(e.message);
      return false;
    } finally {
      setDownloading(false);
    }
  };

  return {
    dialogOpen,
    setDialogOpen,
    downloading,
    error,
    downloadFiles,
    isSupported,
  };
}