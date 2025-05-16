import React, { useEffect } from 'react';
import { motion } from "motion/react"

interface MarqueeProps {
  direction?: 'up' | 'down';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  title?: string;
  description?: string;
  button?: React.ReactNode;
}

const cardImages = import.meta.glob('./../../assets/cards/*.svg', { eager: true, as: 'url' });

const Marquee: React.FC<MarqueeProps> = ({
  speed = 'slow',
  className = '',
  title = "The UI library that makes human & AI life easier",
  description = "Boost DX with a set of beautiful yet carefully crafted components. ",
  button,
}) => {
  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Restore scrolling on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const speedMap = {
    slow: { mobile: 10, desktop: 50 },
    medium: { mobile: 15, desktop: 25 },
    fast: { mobile: 10, desktop: 20 }
  };

  // Get all image paths and shuffle them
  const allImages = Object.values(cardImages);
  const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);

  const generateCards = (colIndex: number, totalColumns: number) => {
    // Calculate how many images each column should have
    const imagesPerColumn = Math.ceil(allImages.length / totalColumns);
    // Get the subset of images for this column
    const columnImages = shuffledImages.slice(
      colIndex * imagesPerColumn,
      (colIndex + 1) * imagesPerColumn
    );

    return Array.from({ length: 15 }, (_, cardIndex) => {
      const imageIndex = cardIndex % columnImages.length;
      return (
        <img
          key={cardIndex}
          src={columnImages[imageIndex]}
          alt={`Card ${cardIndex + 1}`}
          className="tw:w-full tw:object-contain"
        />
      );
    });
  };

  const getAnimationProps = (index: number, isMobile: boolean = false) => ({
    animate: {
      y: index % 2 === 0 ? ['0vh', '-100vh'] : ['0vh', '100vh'],
    },
    transition: {
      duration: isMobile ? speedMap[speed].mobile : speedMap[speed].desktop,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop' as const,
    },
  });

  const renderColumn = (column: any, index: number, widthClass: string, totalColumns: number, isMobile: boolean = false) => (
    <motion.div
      key={index}
      className={`tw:flex tw:flex-col tw:gap-4 ${widthClass}`}
      {...getAnimationProps(index, isMobile)}
    >
      {[...column, ...column, ...column]}
    </motion.div>
  );

  return (
    <div className={`tw:fixed tw:inset-0 tw:w-screen tw:h-screen tw:overflow-hidden ${className}`}>
      {/* Dark overlay */}
      <div className="tw:absolute tw:inset-0 tw:z-10 tw:h-full tw:w-full tw:bg-black/80 dark:tw:bg-black/40" />

      {/* Content */}
      <div className="tw:relative tw:z-20 tw:flex tw:h-full tw:w-full tw:flex-col tw:items-center tw:justify-center tw:px-4">
        <h2 className="tw:mx-auto tw:max-w-4xl tw:text-center tw:text-6xl tw:font-bold tw:text-balance tw:text-white md:tw:text-4xl lg:tw:text-6xl">
          {title}
        </h2>
        <p className="tw:mx-auto tw:max-w-2xl tw:py-8 tw:text-center tw:text-lg tw:text-neutral-200 md:tw:text-base">
          {description}
        </p>

        <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-center tw:gap-4 tw:pt-4">
          {button}
        </div>
      </div>

      {/* Marquee background */}
      <div className="tw:absolute tw:inset-0 tw:pointer-events-none">
        <div className="tw:flex tw:justify-center tw:items-center tw:overflow-hidden tw:h-full tw:w-full tw:max-w-full tw:px-4">
          {/* Mobile: 1 column */}
          <div className="tw:block tw:sm:hidden tw:w-full tw:max-w-full tw:overflow-x-hidden">
            {[generateCards(0, 1)].map((column, index) => renderColumn(column, index, 'tw:w-full tw:max-w-full', 1, true))}
          </div>

          {/* Tablet: 2 columns */}
          <div className="tw:hidden tw:sm:block tw:lg:hidden tw:w-full tw:max-w-full tw:overflow-x-hidden">
            <div className="tw:flex tw:gap-4 tw:w-full tw:max-w-full">
              {Array.from({ length: 2 }, (_, index) => generateCards(index, 2))
                .map((column, index) => renderColumn(column, index, 'tw:w-1/2 tw:max-w-full', 2))}
            </div>
          </div>

          {/* Desktop: 3 columns */}
          <div className="tw:hidden tw:lg:block tw:w-full tw:max-w-full tw:overflow-x-hidden">
            <div className="tw:flex tw:gap-4 tw:w-full tw:max-w-full tw:justify-center">
              {Array.from({ length: 3 }, (_, index) => generateCards(index, 3))
                .map((column, index) => renderColumn(column, index, 'tw:w-[300px] tw:max-w-full', 3))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;