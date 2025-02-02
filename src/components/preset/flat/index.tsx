import { cn } from "@/lib/utils"

/**
 * TODO: figure out the mental model of the rounded API (ie., why they use `--radius`)
 * TODO: think about the applicability, cuz in practice, there're stil many design cases that
 * can be different kind of variations (eg., no bottom border), and implemeting them using code can be tedious
 * (we might need to reset a lot on `Flat` component)
 *
 * Or maybe we should only allow a few variations, so it's easier to use in both design and development
 *
 * TODO: doc how this works with the design: no mapper, but should still define the few variations in both design and development,
 * cuz in CMS AI, we should still map them
 */
const Flat =
  ({ className, children, ...props }: App.ComponentProps) => {
    return (
      <div
        {...props}
        className={cn("tw:shadow-base tw:p-6 tw:rounded-[8px] tw:border tw:border-solid tw:border-zinc-200", className)}
      >
        {children}
      </div>
    )
  }

Flat.displayName = "Flat"

export { Flat }
