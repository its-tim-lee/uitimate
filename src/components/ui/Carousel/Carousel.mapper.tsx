import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel.tsx";
import { Flat } from "../../preset/flat/index.tsx";

interface FigmaCarouselProps extends BaseFigmaProps {
  Orientation?: "Horizontal" | "Vertical";
  Breakpoint?: "lg" | "md" | "sm";
}

figmaMapping({
  componentKey: "77787f6576d919389f396471e8e1f0f8a9680131",
  mapper(figma: FigmaCarouselProps) {
    return (
      <Carousel className="tw:w-full tw:max-w-xs">
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, $i) => (
            <CarouselItem key={$i} className="tw:basis-1/2 tw:md:basis-1/3 tw:lg:basis-1/4">
              <Flat className="tw:aspect-square tw:p-1 tw:h-full tw:w-full tw:flex tw:items-center tw:justify-center">{$i + 1}</Flat>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
});
