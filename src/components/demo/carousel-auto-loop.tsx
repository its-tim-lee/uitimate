import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel/Carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Flat } from "../preset/flat"

export default () => {
  return (
    <Carousel
      className="tw:w-full tw:max-w-xs"
      plugins={[Autoplay()]}
      opts={{ loop: true, align: "start" }}
    >
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
  )

}