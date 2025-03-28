import React, { useEffect } from 'react';
import { type Decorator } from '@storybook/react';

export const sidebarTogglable = () => {
  let visible = localStorage.getItem('sidebarVisible') === 'true';
  if (visible === null) {
    visible = true;
    localStorage.setItem('sidebarVisible', 'true');
  }

  const toggleSidebar = () => {
    const url = new URL(window.location.href);
    visible = !visible;
    url.searchParams.set('nav', visible.toString());
    localStorage.setItem('sidebarVisible', visible.toString());
    window.location.href = url.toString();
  };

  window.parent.addEventListener('keydown', ($e) => {
    if ($e.metaKey && $e.key === '\\') {
      $e.preventDefault();
      toggleSidebar();
    }
  });

  window.addEventListener('message', ($e) => $e.data === 'toggleSidebar' && toggleSidebar());
}

export const listenSidebarTogglingInCanvas: Decorator = (StoryFn) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === '\\') {
        event.preventDefault();
        window.parent.postMessage('toggleSidebar', '*');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return React.createElement(StoryFn);
};

