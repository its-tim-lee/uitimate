import { useRef, useCallback } from 'react';
import { track } from '#/helpers/analytics/ga/index.ts';

/**
 * useHoverTrack - Returns handlers to track hover events after a delay.
 * @param eventName - The event name to track
 * @param delay - Delay in ms before tracking (default: 1000)
 */
export function useHoverTrack(eventName: string, delay = 1000) {
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    hoverTimeout.current = setTimeout(() => {
      track(eventName);
    }, delay);
  }, [eventName, delay]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = null;
  }, []);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
}