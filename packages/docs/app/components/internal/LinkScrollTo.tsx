import { scroller } from "react-scroll";
import { useState, useEffect, useCallback } from "react";

interface LinkScrollToProps {
  /**
   * The ID of the element to scroll to
   */
  to: string;

  /**
   * Optional CSS classes to apply to the button
   */
  className?: string;

  /**
   * Optional offset to apply when scrolling (useful for fixed headers)
   */
  offset?: number;

  /**
   * Duration of the scroll animation in milliseconds
   */
  duration?: number;

  /**
   * Duration of the highlight effect in milliseconds
   */
  highlightDuration?: number;

  /**
   * CSS classes to apply to the target element during highlighting
   */
  highlightClasses?: string[];

  /**
   * The content of the link
   */
  children: React.ReactNode;

  /**
   * Maximum number of retries to find the element
   */
  maxRetries?: number;
}

/**
 * A component that scrolls to and highlights a target element when clicked.
 *
 * Special handling for MDX content:
 * - MDX content goes through additional processing (markdown → components → DOM)
 * - This means target elements might not be immediately available in the DOM
 * - We use a retry mechanism to wait for MDX content to be fully rendered
 *
 * Important note about IDs:
 * - Make sure IDs in MDX links don't have quotes around them
 * - Example: [link](definition) NOT [link]('definition')
 * - The quotes will be treated as part of the ID and the element won't be found
 */
const LinkScrollTo = ({
  to,
  className = "tw:underline tw:font-medium tw:cursor-pointer",
  offset = -80,
  duration = 200,
  highlightDuration = 2000,
  highlightClasses = ['tw:ring-2', 'tw:ring-muted-foreground', 'tw:rounded-md', 'tw:transition-all'],
  children,
  maxRetries = 10
}: LinkScrollToProps) => {
  // Track scroll state and retry attempts
  const [hasScrolled, setHasScrolled] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [retryTimeout, setRetryTimeout] = useState<number | null>(null);

  // Attempt to find and scroll to the target element
  const attemptScroll = useCallback(() => {
    const targetElement = document.getElementById(to);

    if (targetElement) {
      // Element found, perform the scroll
      scroller.scrollTo(to, {
        duration,
        delay: 0,
        offset,
        containerId: 'doc-scroll-container',
      });
      setHasScrolled(true);
      setRetryCount(0);
      return true;
    }

    return false;
  }, [to, duration, offset, retryCount]);

  // Cleanup any pending retry timeouts when component unmounts
  // or when we successfully find and scroll to the element
  useEffect(() => {
    return () => {
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [retryTimeout]);

  // Handle click with retry mechanism
  const handleClick = useCallback(() => {
    // Clear any existing retry attempts
    if (retryTimeout) {
      clearTimeout(retryTimeout);
    }

    // If element not found and we haven't exceeded max retries
    if (!attemptScroll() && retryCount < maxRetries) {
      // Use exponential backoff for retry delays
      // This gives more time for MDX content to render between attempts
      const retryDelay = Math.min(100 * Math.pow(1.5, retryCount), 1000);

      // Schedule next retry attempt
      const timeoutId = window.setTimeout(() => {
        setRetryCount(prev => prev + 1);
      }, retryDelay);

      setRetryTimeout(timeoutId);
    }
  }, [attemptScroll, retryCount, maxRetries, retryTimeout]);

  // Effect to handle retries when retryCount changes
  // This separates the retry scheduling from the actual scroll attempts
  // to avoid infinite loops and ensure proper state updates
  useEffect(() => {
    if (retryCount > 0 && retryCount <= maxRetries) {
      attemptScroll();
    }
  }, [retryCount, maxRetries, attemptScroll]);

  // Apply highlight effect after successful scroll
  useEffect(() => {
    if (hasScrolled) {
      const targetElement = document.getElementById(to);

      if (targetElement) {
        // Add highlight classes to make the target element more visible
        highlightClasses.forEach(cls => targetElement.classList.add(cls));

        // Remove highlight after specified duration
        const timer = setTimeout(() => {
          highlightClasses.forEach(cls => targetElement.classList.remove(cls));
          setHasScrolled(false);
        }, highlightDuration);

        return () => clearTimeout(timer);
      }

      setHasScrolled(false);
    }
  }, [hasScrolled, to, highlightClasses, highlightDuration]);

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export { LinkScrollTo };