import { useEffect, useState } from "react";

export default function StagewiseToolbarClient() {
  const [Toolbar, setToolbar] = useState<null | React.FC<any>>(null);

  useEffect(() => {
    import('@stagewise/toolbar-react').then(mod => {
      setToolbar(() => mod.StagewiseToolbar);
    });
  }, []);

  if (!Toolbar) return null;

  const stagewiseConfig = { plugins: [] };

  return <Toolbar config={stagewiseConfig} />;
}