import { useState, useEffect } from "react";
import { Progress } from "./Progress.tsx"

export default {
  title: 'Example/Progress',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    const [progress, setProgress] = useState(13)

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])
    return <Progress value={progress} className="!tw-w-[300px]" />
  }
};