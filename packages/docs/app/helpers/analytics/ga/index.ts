import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const InitializeGA = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    const measurementId = 'G-NG3646V7SM';
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', measurementId);
    }
    document.head.appendChild(script);
  }, []);
  return null;
}

export const track = (event: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return; // Only run client-side
  if (!window.gtag) return;
  try {
    if (process.env.NODE_ENV !== 'production') {
      console.group('TRACKING')
      console.log('Event = ', event)
      console.log('Params = ', params)
      console.groupEnd()
    }
    else {
      window.gtag('event', event, params);
    }
  } catch (e) {
    console.error('Error tracking event:', e);
  }
}