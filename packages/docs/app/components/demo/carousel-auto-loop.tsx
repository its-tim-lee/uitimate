import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "#/components/ui/Carousel/Carousel.tsx"
import Autoplay from 'embla-carousel-autoplay'

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
            <div className="tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:border-zinc-200 tw:rounded-[8px] tw:aspect-square tw:h-full tw:w-full tw:flex-center">
              {$i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
    </Carousel>
  )

}