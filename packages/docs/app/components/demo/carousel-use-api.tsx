import { useState, useEffect } from "react"
import { Carousel, type CarouselApi, CarouselNext, CarouselContent, CarouselItem, CarouselPrevious } from "#/components/ui/Carousel/Carousel.tsx"
import { Flat } from "#/components/preset/flat/index.tsx"

export default () => {
  const [api, setApi] = useState<CarouselApi>()
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
        <CarouselNext />
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, $i) => (
            <CarouselItem key={$i} className="tw:basis-1/2 tw:md:basis-1/3 tw:lg:basis-1/4">
              <Flat className="tw:aspect-square tw:p-1 tw:h-full tw:w-full tw:flex-center">
                {$i + 1}
              </Flat>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
      <br />
      <div className="py-2 text-center text-sm text-muted-foreground">Slide {current} of {count}</div>
    </div>
  )
}