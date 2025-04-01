import { Image } from "#/components/ui/Image/Image"
import 'react-lazy-load-image-component/src/effects/blur.css';
import smallerSizeDarkImage from "#/assets/demo/image-demo--dark.webp"
import originalSizeDarkImage from "#/assets/demo/image-demo--dark.jpg"
import smallerSizeLightImage from "#/assets/demo/image-demo--light.webp"
import originalSizeLightImage from "#/assets/demo/image-demo--light.jpg"
import { useColorScheme } from '#/helpers/hooks/useColorScheme'

export default () => {
  const { isDark } = useColorScheme();
  return (
    <Image
      effect="blur"
      className="tw:w-full tw:h-full"
      src={isDark ? originalSizeDarkImage : originalSizeLightImage}
      placeholderSrc={isDark ? smallerSizeDarkImage : smallerSizeLightImage}
    />
  );
}