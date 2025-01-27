import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { type KeyboardEvent, type ComponentProps, useCallback, useContext, useEffect, useState, createContext } from "react"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { cn } from "@/lib/utils"
import { Toggle } from "@/components/ui/Toggle/Toggle.tsx"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselCtx = createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
  const ctx = useContext(CarouselCtx)
  if (!ctx) { throw new Error("useCarousel must be used within a <Carousel />") }
  return ctx
}

const Carousel = (
  {
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }: ComponentProps<"div"> & CarouselProps
) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [scrollPrev, scrollNext] = [() => api?.scrollPrev(), () => api?.scrollNext()]
  /**
   * This supports user to press arrow keys on the keybpard to scroll the carousel.
   */
  const handleKeyDown = ($e: KeyboardEvent<HTMLDivElement>) => {
    if ($e.key === "ArrowLeft") {
      $e.preventDefault()
      scrollPrev()
    } else if ($e.key === "ArrowRight") {
      $e.preventDefault()
      scrollNext()
    }
  }
  useEffect(() => { api && setApi && setApi(api) }, [api, setApi])
  useEffect(() => {
    if (!api) return
    const setCanScroll = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }
    setCanScroll()
    api.on("reInit", setCanScroll)
    api.on("select", setCanScroll)

    return () => { api?.off("select", setCanScroll) }
  }, [api])

  return (
    <CarouselCtx.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("tw-relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselCtx.Provider>
  )
}

const CarouselContent = ({ className, ...props }: ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="tw-overflow-hidden">
      <div
        className={cn(
          "tw-flex",
          orientation === "horizontal" ? "tw--ml-4" : "tw--mt-4 tw-flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

const CarouselItem = ({ className, ...props }: ComponentProps<"div">) => {
  const { orientation } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "tw-min-w-0 tw-shrink-0 tw-grow-0 tw-basis-full",
        orientation === "horizontal" ? "tw-pl-4" : "tw-pt-4",
        className
      )}
      {...props}
    />
  )
}

const CarouselPrevious = (
  { className, variant = "outline", size = "default", ...props }: ComponentProps<typeof Toggle>
) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Toggle
      pressed={false}
      variant={variant}
      size={size}
      className={cn(
        "tw-absolute tw- tw-h-8 tw-w-8 tw-rounded-full",
        orientation === "horizontal"
          ? "tw--left-12 tw-top-1/2 tw--translate-y-1/2"
          : "tw--top-12 tw-left-1/2 tw--translate-x-1/2 tw-rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <Icon icon='lucide:arrow-left' className="tw-h-4 tw-w-4" />
      <span className="tw-sr-only">Previous slide</span>
    </Toggle>
  )
}

const CarouselNext = (
  { className, variant = "outline", size = "default", ...props }: ComponentProps<typeof Toggle>
) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Toggle
      pressed={false}
      variant={variant}
      size={size}
      className={cn(
        "tw-absolute tw-h-8 tw-w-8 tw-rounded-full",
        orientation === "horizontal"
          ? "tw--right-12 tw-top-1/2 tw--translate-y-1/2"
          : "tw--bottom-12 tw-left-1/2 tw--translate-x-1/2 tw-rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <Icon icon='lucide:arrow-right' className="tw-h-4 tw-w-4" />
      <span className="tw-sr-only">Next slide</span>
    </Toggle>
  )
}

Carousel.displayName = "Carousel"
CarouselContent.displayName = "CarouselContent"
CarouselItem.displayName = "CarouselItem"
CarouselPrevious.displayName = "CarouselPrevious"
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
