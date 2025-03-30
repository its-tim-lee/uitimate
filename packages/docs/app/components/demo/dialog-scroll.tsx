import { Button } from "@/components/ui/Button/Button.tsx"
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle

} from "@/components/ui/Dialog/Dialog.tsx"
import { useState } from "react"
import { Collection, Header, ListBox, ListBoxItem, ListBoxSection } from "react-aria-components";
import { Separator } from "../ui/Separator/Separator";

// TBD: doc: why scrollable is user's duty to implement?
const regions = [
  {
    name: 'Africa',
    children: [
      { id: 'africa-south1', name: 'africa-south1' },
    ]
  },
  {
    name: 'Asia',
    children: [
      { id: 'asia-east1', name: 'asia-east1' },
      { id: 'asia-east2', name: 'asia-east2' },
      { id: 'asia-northeast1', name: 'asia-northeast1' },
      { id: 'asia-northeast2', name: 'asia-northeast2' },
      { id: 'asia-northeast3', name: 'asia-northeast3' },
      { id: 'asia-south1', name: 'asia-south1' },
      { id: 'asia-south2', name: 'asia-south2' },
      { id: 'asia-southeast1', name: 'asia-southeast1' },
      { id: 'asia-southeast2', name: 'asia-southeast2' },
    ]
  },
  {
    name: 'Australia',
    children: [
      { id: 'australia-southeast1', name: 'australia-southeast1' },
      { id: 'australia-southeast2', name: 'australia-southeast2' },
    ]
  },
  {
    name: 'Europe',
    children: [
      { id: 'europe-central2', name: 'europe-central2' },
      { id: 'europe-north1', name: 'europe-north1' },
      { id: 'europe-southwest1', name: 'europe-southwest1' },
      { id: 'europe-west1', name: 'europe-west1' },
      { id: 'europe-west2', name: 'europe-west2' },
      { id: 'europe-west3', name: 'europe-west3' },
      { id: 'europe-west4', name: 'europe-west4' },
      { id: 'europe-west6', name: 'europe-west6' },
      { id: 'europe-west8', name: 'europe-west8' },
      { id: 'europe-west9', name: 'europe-west9' },
      { id: 'europe-west10', name: 'europe-west10' },
      { id: 'europe-west12', name: 'europe-west12' },
    ]
  }
];


export default () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeading>
          <DialogTitle>
            Select Region
          </DialogTitle>
          <DialogSubtitle>
            To reduce latency and increase availability, choose the same region for your data and your Compute Engine instances, standard environment applications, and other services.
          </DialogSubtitle>
        </DialogHeading>
        <Separator></Separator>
        <ListBox items={regions} className='tw:h-[50vh] tw:overflow-y-scroll tw:my-2'>
          {section => (
            <ListBoxSection id={section.name} className='tw:mb-2'>
              <Header className='tw:text-muted-foreground tw:font-bold'>{section.name}</Header>
              <Collection items={section.children}>
                {item => (
                  <ListBoxItem className='tw:p-2'>
                    {item.name}
                  </ListBoxItem>
                )}
              </Collection>
            </ListBoxSection>
          )}
        </ListBox>
        <DialogAction>
          <Button variant="ghost" className="tw:shadow-none">CLOSE</Button>
          <Button variant="primary" className="tw:shadow-none">SAVE</Button>
        </DialogAction>
      </Dialog>
      <Button onClick={() => setIsOpen(true)}>Create Database</Button>
    </>
  )
}