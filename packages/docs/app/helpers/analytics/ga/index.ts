import { analytics } from '#/helpers/firebase/index.ts';
import { logEvent } from 'firebase/analytics';

export const track = (event: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return; // Only run client-side
  if (process.env.NODE_ENV !== 'production') return;
  if (!analytics) return;
  try {
    logEvent(analytics, event, params);
  } catch (e) {
    // Optionally handle/log error
  }
}