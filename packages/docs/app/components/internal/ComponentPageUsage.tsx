import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Cta } from "#/components/ui/Cta/Cta";
import { memo, useState, lazy, useMemo, Suspense, type ComponentProps, useEffect } from "react";
import { Checkbox, type CheckedState } from '#/components/ui/Checkbox/Checkbox.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "#/components/improper/DialogOld/Dialog"
import lf from 'localforage';
import VersatileTabs from "#/components/internal/VersatileTabs";
import { UsageSection } from "#/components/internal/ApiDoc.tsx";

type ComponentPageUsageProps = {
  anatomy?: string,
  demoId: string,
  preview?: React.ReactNode,
  enableHeading?: boolean
}

export default ({ demoId, anatomy, preview, enableHeading = false }: ComponentPageUsageProps) => {
  console.log('anatomy', anatomy)
  console.log('demoId', demoId)
  const [activeTab, setActveTab] = useState('preview');
  const [touchedTab, setTouchedTab] = useState(activeTab);
  const [isDialogOpening, setIsDialogOpening] = useState(false);
  const [shouldNotRemindAgain, setShouldNotRemindAgain] = useState(true);

  const handleTabChange = (tabId: string) => {
    setTouchedTab(tabId);
    if (tabId !== 'download' && tabId !== 'playground') return setActveTab(tabId);
    lf.getItem('shouldNotShowComponentUsageReminder').then($v => $v ? proceed() : setIsDialogOpening(true))
  };
  const proceed = async () => {
    if (touchedTab === 'download') {
      try {
        const fileHandle = await (window as any).showSaveFilePicker({
          suggestedName: 'dummy.txt',
          types: [
            {
              description: 'Text Files',
              accept: {
                'text/plain': ['.txt'],
              },
            },
          ],
        });

        const writable = await fileHandle.createWritable();
        await writable.write('This is a dummy text file.');
        await writable.close();
      } catch (error) {
        console.error('Error saving file:', error);
      }
      return
    }
    // Add logic for playground if needed
  };
  const onToggleReminder = ($e: CheckedState) => setShouldNotRemindAgain($e === true)

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      lf.setItem('shouldNotShowComponentUsageReminder', shouldNotRemindAgain)
      setShouldNotRemindAgain(true) // always show "don't remind me" in checked-in whenever the dialog is opened
    };
    setIsDialogOpening(open);
  };

  const tabSettings = [
    {
      title: 'Preview',
      type: 'preview' as const,
      demoId,
      content: preview
    },
    ...(anatomy ? [{
      title: 'Anatomy',
      type: 'normal' as const,
      content: <CodeBlock>{anatomy}</CodeBlock>,
    }] : []),
    {
      title: 'Download',
      type: 'link' as const,
      onClick: () => handleTabChange('download'),
    },
    {
      title: 'Playground',
      type: 'link' as const,
      onClick: () => handleTabChange('playground'),
    },
  ];
  return (
    <div className='not-prose'>
      {enableHeading && <UsageSection />}

      <VersatileTabs settings={tabSettings} />

      <Dialog open={isDialogOpening} onOpenChange={handleDialogOpenChange}>
        <DialogContent>
          <DialogTitle>Friendly Reminder</DialogTitle>
          <DialogDescription>In case you not FULLY UNDERSTAND how this option work due to the past usage experience on almost all the libraries (ie., first installation, then setup, and finally use), be sure to check this page first. </DialogDescription>
          <DialogFooter>
            <div className="tw:flex tw:justify-between tw:items-center tw:w-full">
              <Checkbox checked={shouldNotRemindAgain} onCheckedChange={onToggleReminder} >
                Don't remind me next time
              </Checkbox>
              <DialogClose asChild><Cta variant="primary" onClick={proceed}>Proceeed</Cta></DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
