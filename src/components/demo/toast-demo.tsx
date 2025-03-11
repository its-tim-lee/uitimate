import { Toaster } from "../ui/Toast/Toast"
import { toast } from "sonner"
import { Button } from "../ui/Button/Button"

export default () => {
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
        Click repeatedly
      </Button>
    </>)
}