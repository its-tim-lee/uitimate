import { Flat } from "../../preset/flat/index.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./Carousel.tsx"
import { useEffect, useState, } from "react";

export default {
  title: 'Example/Carousel',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Loop, Multiple Items',
  render: () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!api) return
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
    return (
      <>
        <Carousel className="tw-w-full tw-max-w-xs"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, $i) => (
              <CarouselItem key={$i} className="tw-basis-1/2 md:tw-basis-1/3 lg:tw-basis-1/4">
                <Flat className="tw-aspect-square tw-p-1 tw-h-full tw-w-full tw-flex tw-items-center tw-justify-center">{$i + 1}</Flat>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">Slide {current} of {count}</div>
      </>
    )
  },
};

