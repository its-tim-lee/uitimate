import { Dialog, DialogHeading, DialogSubtitle, DialogAction } from '../ui/Dialog/Dialog.tsx';
import { Cta } from '../ui/Cta/Cta.tsx';
import { Toaster } from '../ui/Toast/Toast.tsx';

interface FileSystemApiDialogProps {
  open: boolean;
  onClose: () => void;
  featureName?: string;
}

export default function FileSystemApiDialog({ open, onClose, featureName = '' }: FileSystemApiDialogProps) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogHeading>Feature is Not Supported</DialogHeading>
        <DialogSubtitle>
          Your browser does not support the <a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API" className='tw:link'>File System API</a>
          {` `}
          required for {featureName ? `"${featureName}"` : 'this feature'} to work.
          <br />
          <br />
          Please use a Chromium-based browser (eg., <b>Google Chrome</b>) to visit this page and try again.
        </DialogSubtitle>
        <DialogAction>
          <Cta onClick={onClose} variant="primary">OK</Cta>
        </DialogAction>
      </Dialog>
      <Toaster />
    </>
  );
}