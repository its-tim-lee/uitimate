import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { type KeyboardEvent, type ComponentProps, useCallback, useContext, useEffect, useState, createContext } from "react"
import { cn } from "#/helpers"
import { Icon } from "#/components/ui/Icon/Icon"
import { Cta } from "#/components/ui/Cta/Cta"
import { type EmblaOptionsType, type EmblaPluginType } from 'embla-carousel'

type CarouselApi = UseEmblaCarouselType[1]
type CarouselBaseProps = {
  opts?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  setApi?: (api: CarouselApi) => void
}
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselBaseProps

const CarouselCtx = createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
  const ctx = useContext(CarouselCtx)
  if (!ctx) { throw new Error("useCarousel must be used within a <Carousel />") }
  return ctx
}
type CarouselProps = ComponentProps<"div"> & CarouselBaseProps
const Carousel = (
  {
    opts = {},
    setApi,
    plugins,
    className,
    children,
    ...props
  }: CarouselProps
) => {
  const [carouselRef, api] = useEmblaCarousel(opts as any, plugins as any)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const handleKeyDown = ($e: KeyboardEvent<HTMLDivElement>) => {
    if ($e.key === "ArrowLeft") {
      $e.preventDefault()
      api?.scrollPrev()
    } else if ($e.key === "ArrowRight") {
      $e.preventDefault()
      api?.scrollNext()
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
    api.on("reInit", setCanScroll) // Embla can re-init itself when the viewport size changes
    api.on("select", setCanScroll)
    return () => { api?.off("select", setCanScroll) }
  }, [api])

  return (
    <CarouselCtx.Provider
      value={{
        carouselRef,
        api,
        opts,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("tw:relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselCtx.Provider>
  )
}

type CarouselContentProps = ComponentProps<"div">
const CarouselContent = ({ className, ...props }: CarouselContentProps) => {
  const { carouselRef, opts } = useCarousel()
  return (
    // This is called "overflow wrapper", which is required from Embla
    // `ref` is also part of setup
    <div ref={carouselRef} className="tw:overflow-hidden">
      <div
        className={cn(
          "tw:flex", // "scroll container" is required from Embla
          (!opts?.axis || opts?.axis === "x") ? "tw:-ml-4" : "tw:-mt-4 tw:flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

type CarouselItemProps = ComponentProps<"div">
const CarouselItem = ({ className, ...props }: CarouselItemProps) => {
  const { opts } = useCarousel()
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "tw:min-w-0 tw:shrink-0 tw:grow-0 tw:basis-full",
        (!opts?.axis || opts?.axis === "x") ? "tw:pl-4" : "tw:pt-4",
        className
      )}
      {...props}
    />
  )
}

type CarouselPreviousProps = ComponentProps<typeof Cta>
const CarouselPrevious = (
  { className, variant = "outline", ...props }: CarouselPreviousProps
) => {
  const { api, canScrollPrev, opts } = useCarousel()
  return (
    <Cta
      variant={variant}
      className={cn(
        "tw:absolute tw:size-8 tw:rounded-full",
        (!opts?.axis || opts?.axis === "x")
          ? "tw:-left-12 tw:top-1/2 tw:-translate-y-1/2"
          : "tw:-top-12 tw:left-1/2 tw:-translate-x-1/2 tw:rotate-90",
        className
      )}
      shapes={['icon']}
      disabled={!canScrollPrev}
      onClick={() => api?.scrollPrev()}
      {...props}
    >
      <Icon icon='lucide:arrow-left' className="tw:h-4 tw:w-4" />
      <span className="tw:sr-only">Previous slide</span>
    </Cta>
  )
}

type CarouselNextProps = ComponentProps<typeof Cta>
const CarouselNext = (
  { className, variant = "outline", ...props }: CarouselNextProps
) => {
  const { api, canScrollNext, opts } = useCarousel()
  return (
    <Cta
      variant={variant}
      className={cn(
        "tw:absolute tw:size-8 tw:rounded-full",
        (!opts?.axis || opts?.axis === "x")
          ? "tw:-right-12 tw:top-1/2 tw:-translate-y-1/2"
          : "tw:-bottom-12 tw:left-1/2 tw:-translate-x-1/2 tw:rotate-90",
        className
      )}
      shapes={['icon']}
      disabled={!canScrollNext}
      onClick={() => api?.scrollNext()}
      {...props}
    >
      <Icon icon='lucide:arrow-right' className="tw:h-4 tw:w-4" />
      <span className="tw:sr-only">Next slide</span>
    </Cta>
  )
}

Carousel.displayName = "Carousel"
CarouselContent.displayName = "CarouselContent"
CarouselItem.displayName = "CarouselItem"
CarouselPrevious.displayName = "CarouselPrevious"
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  type CarouselBaseProps,
  type CarouselContextProps,
  type CarouselContentProps,
  type CarouselItemProps,
  type CarouselNextProps,
  type CarouselPreviousProps,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
