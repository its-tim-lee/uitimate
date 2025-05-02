import * as React from 'react';
import { type ComponentProps } from 'react';
import { track } from '#/helpers/analytics/ga/index.ts';
import { cn } from '#/helpers/utils.ts';
export const TrackableSummary = ({ id, children, className, onClick, ...props }: ComponentProps<'summary'>) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // The <summary> toggles the parent <details> open/closed
      // We need to check if it will be opened after this click
      // So, we use a timeout to check the open state after the event
      setTimeout(() => {
        const details = (e.target as HTMLElement).closest('details');
        if (details && details.open && !open) {
          track('check_summary', { id });
          setOpen(true);
        } else if (details && !details.open && open) {
          setOpen(false);
        }
      }, 0);
      if (onClick) onClick(e);
    },
    [id, onClick, open]
  );

  return <summary className={cn('tw:cursor-pointer', className)} {...props} id={id} onClick={handleClick}>{children}</summary>;
};
