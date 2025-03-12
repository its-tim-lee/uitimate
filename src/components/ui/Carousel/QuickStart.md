You can just use Carousel component with a set of composition,
and if you want to have more control, you can also access the Embla API that Carousel is using under the hood.

The family components of Carousel:
- Carousel
- CarouselContent
- CarouselItem
- CarouselPrevious
- CarouselNext

There's no problem to understand the last two, but we've to explain the first three,
so that you'd be in a better position to know how to use it effectively.

So the reason that slides (in this case, CarouselItem), can be managed horizontally by CarouselContent is just because of using Flexbox, so you can imagine CarouselContent is a Flexbox container, and CarouselItem is a Flexbox item.

This is an important concept, cuz now you'll understand that, why we need to use flex basis on CarouselItem to set the width of each slide.

# Agenda




# Caveats:
- If the CarouselItem is a new instance in every render, it'll cause animation issues of Embla.
  This can happen if you extract the CarouselItem as a separate component. Embla expects an exact the same DOM node in every render to animate properly, so if you really want to extract the CarouselItem as a separate component, make sure to use `memo`