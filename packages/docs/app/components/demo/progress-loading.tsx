import { useState, useEffect } from "react";
import { Progress } from "#/components/ui/Progress/Progress";

export default () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(e => e === 100 ? 0 : Math.min(e + 10, 100));
    }, 500);
    return () => clearInterval(timer)
  }, []);
  return (
    <div className='tw:w-[300px]'>
      <Progress value={progress} />
    </div>
  );
}