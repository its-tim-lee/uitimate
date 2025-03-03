import { AspectRatio } from "@/components/ui/AspectRatio/AspectRatio.tsx";
import { Image } from "@/components/ui/Image/Image.tsx";

export default () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
      />
    </AspectRatio>
  );
};
