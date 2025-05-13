import React from 'react';
import { cn } from '#/helpers/utils';

interface CloudinaryResponsiveImageProps {
  imageId: string; // just the public ID with extension, e.g. "ai.png"
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

// https://res.cloudinary.com/dioorltki/image/upload/v1747084795/ai.png

const BASE_URL = 'https://res.cloudinary.com/dioorltki/image/upload/';
const WIDTHS = [400, 768, 1920];
const TRANSFORMATION = 'q_auto,f_auto';
const SIZES = '(max-width: 400px) 400px, (max-width: 768px) 768px, 1920px';

// Map imageId to version string
const IMAGE_VERSION_MAP: Record<string, string> = {
  'ai.png': 'v1747084795',
  'playground.png': 'v1747084795',
  'editor.png': 'v1747084794'
};

const buildCldSrcSet = (imageId: string) => WIDTHS.map(w => `${buildCldURI({ imageId, width: w })} ${w}w`).join(', ');
const buildCldURI = ({ imageId, width }: { imageId: string, width: number }) => {
  const version = IMAGE_VERSION_MAP[imageId];
  const versionSegment = version ? `${version}/` : '';
  return `${BASE_URL}${TRANSFORMATION},w_${width}/${versionSegment}${imageId}`;
}
/**
 * Responsive image that uses local /public images in development and Cloudinary in production.
 * - In dev: if children are provided, render them (e.g., a Markdown image).
 * - In prod: always render Cloudinary image logic.
 */
const CloudinaryResponsiveImage: React.FC<CloudinaryResponsiveImageProps> = ({ imageId, alt, className, children }) => {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) return <>{children}</>;
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={buildCldSrcSet(imageId)}
        sizes={SIZES}
      />
      <img
        src={buildCldURI({ imageId, width: 400 })}
        srcSet={buildCldSrcSet(imageId)}
        sizes={SIZES}
        alt={alt}
        className={cn('tw:w-full tw:h-auto tw:block', className)}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export default CloudinaryResponsiveImage;