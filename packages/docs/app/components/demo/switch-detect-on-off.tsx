import { Switch } from "#/components/ui/Switch/Switch"
import { Cta } from "#/components/ui/Cta/Cta";
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle
} from "#/components/ui/Dialog/Dialog.tsx"
import React from "react"
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading";

export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isSwitched, setIsSwitched] = React.useState(true)
  const onSwitch = (cmd: boolean) => cmd ? setIsSwitched(true) : setIsOpen(true);
  const onConfirm = () => (setIsOpen(false), setIsSwitched(false));

  return (
    <div className="tw:flex tw:items-center tw:gap-10">

      <Heading size="h4">
        <HeadingTitle>Allow JavaScript Source Fetching</HeadingTitle>
        <HeadingSubtitle>Allow Sentry to scrape missing JavaScript source context when possible</HeadingSubtitle>
      </Heading>

      <Switch checked={isSwitched} onCheckedChange={onSwitch} />

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <p>Are you sure you want to disable sourcecode fetching for JavaScript events? This will affect Sentry's ability to aggregate issues if you're not already uploading sourcemaps as artifacts.</p>
        <DialogAction>
          <Cta onClick={() => setIsOpen(false)}>Cancel</Cta>
          <Cta onClick={onConfirm}>Confirm</Cta>
        </DialogAction>
      </Dialog>

    </div>
  )
}