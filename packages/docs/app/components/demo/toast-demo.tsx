import { Toaster } from "#/components/ui/Toast/Toast"
import { toast } from "sonner"
import { Cta } from "#/components/ui/Cta/Cta"

export default () => {
  return (
    <>
      <Toaster />
      <Cta
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }>
        Click repeatedly
      </Cta>
    </>)
}