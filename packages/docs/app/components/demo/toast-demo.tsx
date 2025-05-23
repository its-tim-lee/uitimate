import { toast, Toaster } from "#/components/ui/Toast/Toast"
import { Cta } from "#/components/ui/Cta/Cta"

export default () => {
  return (
    <>
      <Cta
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            }
          })
        }>
        Click repeatedly
      </Cta>
    </>)
}