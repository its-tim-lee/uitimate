import { toast } from "sonner"
import { Toaster } from "./Sonner.tsx"
import { Button } from "@/components/ui/Button/Button.tsx"

export default {
  title: 'Example/Sonner',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }>
          Show Toast
        </Button>
      </>)
  },
};

