import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster tw:group"
      // toastOptions={{
      //   classNames: {
      //     toast:
      //       "tw:group toast tw:group-[.toaster]:bg-background tw:group-[.toaster]:text-foreground tw:group-[.toaster]:border-border tw:group-[.toaster]:shadow-lg",
      //     description: "tw:group-[.toast]:text-muted-foreground",
      //     actionButton:
      //       "tw:group-[.toast]:bg-primary tw:group-[.toast]:text-primary-foreground",
      //     cancelButton:
      //       "tw:group-[.toast]:bg-muted tw:group-[.toast]:text-muted-foreground",
      //   },
      // }}
      {...props}
    />
  )
}

export { Toaster }
