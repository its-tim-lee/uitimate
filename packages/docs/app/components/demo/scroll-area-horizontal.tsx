import { ScrollArea, ScrollBar } from "../ui/ScollArea/ScollArea";
import { Image } from '#/components/ui/Image/Image'

interface Artwork {
  artist: string
  art: string
}

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

export default () => (
  <ScrollArea className="tw:w-96 tw:whitespace-nowrap tw:rounded-md tw:border">
    <div className="tw:flex tw:w-max tw:space-x-4 tw:p-4">
      {works.map((artwork) => (
        <figure key={artwork.artist} className="tw:shrink-0">
          <div className="tw:overflow-hidden tw:rounded-md">
            <Image
              src={artwork.art}
              alt={`Photo by ${artwork.artist}`}
              className="tw:aspect-[3/4] tw:h-fit tw:w-fit tw:object-cover"
              width={300}
              height={400}
            />
          </div>
          <figcaption className="tw:pt-2 tw:text-xs tw:text-muted-foreground">
            Photo by{" "}
            <span className="tw:font-semibold tw:text-foreground">
              {artwork.artist}
            </span>
          </figcaption>
        </figure>
      ))
      }
    </div >
    <ScrollBar orientation="horizontal" />
  </ScrollArea >
)