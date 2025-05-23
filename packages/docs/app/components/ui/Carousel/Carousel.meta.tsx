import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'Browse through a collection of items with navigation controls.',
  anatomy: `
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem />
        {/* more <CarouselItem /> */}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  `,
} as ComponentMeta;