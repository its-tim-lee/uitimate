import { Slider } from "@/components/ui/Slider/Slider"
import { useState } from "react"
export default () => {
  const [temperature, setTemperature] = useState(1)
  const [maxTokens, setMaxTokens] = useState(2048)
  return (
    <div className="tw:w-[320px] tw:flex tw:flex-col tw:gap-4">
      <h3 className="tw:font-bold">Model configuration</h3>
      <section className="tw:flex tw:flex-col tw:gap-3">
        <div className="tw:flex tw:items-center tw:justify-between">
          <h5 className="tw:text-sm">Temperature</h5>
          <p className="tw:text-sm">{temperature.toFixed(2)}</p>
        </div>
        <Slider
          value={[temperature]}
          max={2}
          step={0.01}
          onValueChange={(value) => setTemperature(value[0])}
        />
      </section>
      <section className="tw:flex tw:flex-col tw:gap-3">
        <div className="tw:flex tw:items-center tw:justify-between">
          <h5 className="tw:text-sm">Max tokens</h5>
          <p className="tw:text-sm">{maxTokens}</p>
        </div>
        <Slider
          value={[maxTokens]}
          max={10000}
          onValueChange={(value) => setMaxTokens(value[0])}
        />
      </section>
    </div>
  )
}