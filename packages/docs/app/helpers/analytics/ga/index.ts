import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const InitializeGA = () => {
  const fireEventInDebugModeOnDemand = () => {
    let debugMode = false;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const isInternalTraffic = urlParams.has('debug');
      const hasEverSetInternalTraffic = localStorage.getItem('debug') === '1';
      if (isInternalTraffic) localStorage.setItem('debug', '1');
      debugMode = isInternalTraffic || hasEverSetInternalTraffic;
    } catch (e) {
    }
    if (window.gtag) {
      window.gtag('config', measurementId, debugMode ? { traffic_type: 'internal' } : {});
    }
  }
  const measurementId = 'G-NG3646V7SM';
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      fireEventInDebugModeOnDemand();
    }
    document.head.appendChild(script);
  }, [])
  return null;
}

export const track = (event: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return; // Only run client-side
  if (process.env.NODE_ENV !== 'production') {
    console.group('TRACKING')
    console.log('Event = ', event)
    console.log('Params = ', params)
    console.groupEnd()
    return;
  }
  if (!window.gtag) return;
  try {
    window.gtag('event', event, params);
  } catch (e) {
    console.error('Error tracking event:', e);
  }
}