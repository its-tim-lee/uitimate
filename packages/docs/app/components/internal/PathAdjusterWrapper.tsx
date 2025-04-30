import { lazy, Suspense } from 'react';

const PathAdjuster = lazy(() => import('./PathAdjuster'));

interface PathAdjusterProps {
  adjustablePath: string;
  onChange?: (path: string) => void;
}

/**
 * Without this wrapper, the PathAdjuster component will be rendered on the server,
 * and the adjusted path can cause hydration mismatch error.
 *
 * Basically this just makes sure the PathAdjuster component is rendered on the client.
 */
export default function PathAdjusterWrapper(props: PathAdjusterProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PathAdjuster {...props} />
    </Suspense>
  );
}