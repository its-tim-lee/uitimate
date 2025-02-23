import React, { useState } from 'react';

const FileSystemDemo = () => {

  const handleSelectFolder = async () => {
    try {
      await (window as any).showDirectoryPicker();
    } catch (error) {
      console.error('Error selecting folder:', error);
    }
  };

  // Function to fetch the raw content of Dialog.tsx from GitHub
  const fetchDialogFileContent = async () => {
    const response = await fetch('https://raw.githubusercontent.com/shadcn-ui/ui/refs/heads/main/apps/www/registry/default/ui/dialog.tsx');
    if (!response.ok) {
      throw new Error('Failed to fetch Dialog.tsx');
    }
    return await response.text();
  };

  const handleDownload = async () => {
    try {
      const directoryHandle = await (window as any).showDirectoryPicker();
      const content = await fetchDialogFileContent();
      const fileHandle = await directoryHandle.getFileHandle('Dialog.tsx', { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(content);
      await writable.close();
      alert('Dialog.tsx downloaded successfully.');
    } catch (error) {
      console.error('Error writing file:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSelectFolder}>Components File Path</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default FileSystemDemo;