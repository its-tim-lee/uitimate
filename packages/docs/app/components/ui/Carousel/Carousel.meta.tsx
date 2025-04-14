export default {
  description: 'browse through a collection of items with navigation controls.',
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
}