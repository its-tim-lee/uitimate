import { useState } from 'react';
import { Cta } from '#/components/ui/Cta/Cta.tsx';
import { Icon } from '#/components/ui/Icon/Icon.tsx';

const Comp = () => {
  const [rating, setRating] = useState<number | null>(null);
  const rate = ($v: number) => setRating(prev => prev !== $v ? $v : ($v > 1 ? $v - 1 : null));
  const isStarFilled = (v: number) => rating !== null && v <= rating;
  return (
    <div className='tw:flex'>
      {[1, 2, 3, 4, 5].map(($v) => (
        <Cta
          key={$v}
          size='lg'
          shapes={['icon']}
          variant='ghost'
          className='tw:rounded-none'
          pressed={rating === $v}
          onPressedChange={() => rate($v)}
        >
          <Icon
            icon={isStarFilled($v) ? 'material-symbols-light:star' : 'material-symbols-light:star-outline'}
            className={isStarFilled($v) ? 'tw:text-yellow-400' : 'tw:text-gray-300'}
          />
        </Cta>
      ))}
    </div>
  );
}
Comp.displayName = 'Ratings';

export default Comp;