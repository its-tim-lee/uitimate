import { useState, useEffect } from "react";
import { Progress } from "../ui/Progress/Progress";

export default () => {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return <Progress value={progress} className="tw:w-[300px]!" />
}