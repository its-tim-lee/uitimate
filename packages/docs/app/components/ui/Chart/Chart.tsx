import * as React from "react"
import * as RechartsPrimitive from "@uitimate/lib-chart"
import { cn, casing } from "#/helpers/utils.ts"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"]
}) {
  const chartId = `chart-${id || React.useId().replace(/:/g, "")}`
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-tag={casing.kebabCase(ChartContainer.displayName)}
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "tw:[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground ",
          "tw:[&_.recharts-cartesian-grid_line[stroke=#ccc]]:stroke-border/50 ",
          "tw:[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "tw:[&_.recharts-polar-grid_[stroke=#ccc]]:stroke-border",
          "tw:[&_.recharts-radial-bar-background-sector]:fill-muted",
          "tw:[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
          "tw:[&_.recharts-reference-line_[stroke=#ccc]]:stroke-border",
          "tw:flex tw:aspect-video tw:justify-center tw:text-xs",
          "tw:[&_.recharts-dot[stroke=#fff]]:stroke-transparent",
          "tw:[&_.recharts-layer]:outline-hidden",
          "tw:[&_.recharts-sector]:outline-hidden",
          "tw:[&_.recharts-sector[stroke=#fff]]:stroke-transparent ",
          "tw:[&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, c]) => c.theme || c.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                .map(([key, itemConfig]) => {
                  const color =
                    itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
                    itemConfig.color
                  return color ? `  --color-${key}: ${color};` : null
                })
                .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip
ChartTooltip.displayName = "ChartTooltip";

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div"> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("tw:font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn("tw:font-medium", labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      data-tag={casing.kebabCase(ChartTooltipContent.displayName)}
      className={cn(
        "tw:border-border/50 tw:bg-background tw:grid tw:min-w-[8rem] tw:items-start tw:gap-1.5 tw:rounded-lg tw:border tw:px-2.5 tw:py-1.5 tw:text-xs tw:shadow-xl",
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="tw:grid tw:gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                "tw:[&>svg]:text-muted-foreground tw:flex tw:w-full tw:flex-wrap tw:items-stretch tw:gap-2 tw:[&>svg]:h-2.5 tw:[&>svg]:w-2.5",
                indicator === "dot" && "tw:items-center"
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          "tw:shrink-0 tw:rounded-[2px] tw:border-(--color-border) tw:bg-(--color-bg)",
                          {
                            "tw:h-2.5 tw:w-2.5": indicator === "dot",
                            "tw:w-1": indicator === "line",
                            "tw:w-0 tw:border-[1.5px] tw:border-dashed tw:bg-transparent":
                              indicator === "dashed",
                            "tw:my-0.5": nestLabel && indicator === "dashed",
                          }
                        )}
                        style={
                          {
                            "--color-bg": indicatorColor,
                            "--color-border": indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      "tw:flex tw:flex-1 tw:justify-between tw:leading-none",
                      nestLabel ? "tw:items-end" : "tw:items-center"
                    )}
                  >
                    <div className="tw:grid tw:gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="tw:text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="tw:text-foreground tw:font-mono tw:font-medium tw:tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend
ChartLegend.displayName = "ChartLegend";

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey,
}: React.ComponentProps<"div"> &
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }
  return (
    <div
      data-tag={casing.kebabCase(ChartLegendContent.displayName)}
      className={cn(
        "tw:flex tw:items-center tw:justify-center tw:gap-4",
        verticalAlign === "top" ? "tw:pb-3" : "tw:pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)
        return (
          <div
            key={item.value}
            className={cn(
              "tw:[&>svg]:text-muted-foreground tw:flex tw:items-center tw:gap-1.5 tw:[&>svg]:h-3 tw:[&>svg]:w-3"
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="tw:h-2 tw:w-2 tw:shrink-0 tw:rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}
ChartLegendContent.displayName = "ChartLegendContent";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
      typeof payload.payload === "object" &&
      payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export * from "@uitimate/lib-chart"

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
