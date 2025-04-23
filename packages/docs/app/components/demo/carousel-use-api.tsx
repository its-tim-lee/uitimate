import { useState, useEffect } from "react"
import { Carousel, type Type, CarouselNext, CarouselContent, CarouselItem, CarouselPrevious } from "#/components/ui/Carousel/Carousel.tsx"

export default () => {
  const [api, setApi] = useState<Type.CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])
  return (
    <div className="tw:flex-center tw:flex-col tw:gap-2">
      <Carousel className="tw:w-full tw:max-w-xs" setApi={setApi}>
        <CarouselPrevious />
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, $i) => (
            <CarouselItem key={$i} className="tw:basis-1/2 tw:md:basis-1/3 tw:lg:basis-1/4">
              <div className="tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:border-zinc-200 tw:rounded-[8px] tw:aspect-square tw:h-full tw:w-full tw:flex-center">
                {$i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
      <br />
      <div className="py-2 text-center text-sm text-muted-foreground">Slide {current} of {count}</div>
    </div>
  )
}