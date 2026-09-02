"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@workspace/ui/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@workspace/ui/components/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export const description = "Marks entry progress over time"

const chartData = [
  { date: "2026-06-01", entered: 120, pending: 280 },
  { date: "2026-06-02", entered: 180, pending: 220 },
  { date: "2026-06-03", entered: 150, pending: 250 },
  { date: "2026-06-04", entered: 220, pending: 180 },
  { date: "2026-06-05", entered: 310, pending: 90 },
  { date: "2026-06-06", entered: 280, pending: 120 },
  { date: "2026-06-07", entered: 200, pending: 200 },
  { date: "2026-06-08", entered: 350, pending: 50 },
  { date: "2026-06-09", entered: 90, pending: 310 },
  { date: "2026-06-10", entered: 240, pending: 160 },
  { date: "2026-06-11", entered: 300, pending: 100 },
  { date: "2026-06-12", entered: 270, pending: 130 },
  { date: "2026-06-13", entered: 320, pending: 80 },
  { date: "2026-06-14", entered: 180, pending: 220 },
  { date: "2026-06-15", entered: 150, pending: 250 },
  { date: "2026-06-16", entered: 170, pending: 230 },
  { date: "2026-06-17", entered: 380, pending: 20 },
  { date: "2026-06-18", entered: 340, pending: 60 },
  { date: "2026-06-19", entered: 220, pending: 180 },
  { date: "2026-06-20", entered: 110, pending: 290 },
  { date: "2026-06-21", entered: 160, pending: 240 },
  { date: "2026-06-22", entered: 210, pending: 190 },
  { date: "2026-06-23", entered: 180, pending: 220 },
  { date: "2026-06-24", entered: 330, pending: 70 },
  { date: "2026-06-25", entered: 250, pending: 150 },
  { date: "2026-06-26", entered: 120, pending: 280 },
  { date: "2026-06-27", entered: 360, pending: 40 },
  { date: "2026-06-28", entered: 190, pending: 210 },
  { date: "2026-06-29", entered: 280, pending: 120 },
  { date: "2026-06-30", entered: 400, pending: 50 },
  { date: "2026-07-01", entered: 200, pending: 200 },
  { date: "2026-07-02", entered: 260, pending: 140 },
  { date: "2026-07-03", entered: 230, pending: 170 },
  { date: "2026-07-04", entered: 340, pending: 60 },
  { date: "2026-07-05", entered: 410, pending: 20 },
  { date: "2026-07-06", entered: 450, pending: 10 },
  { date: "2026-07-07", entered: 380, pending: 40 },
  { date: "2026-07-08", entered: 210, pending: 170 },
  { date: "2026-07-09", entered: 260, pending: 120 },
  { date: "2026-07-10", entered: 310, pending: 80 },
  { date: "2026-07-11", entered: 340, pending: 50 },
  { date: "2026-07-12", entered: 240, pending: 150 },
  { date: "2026-07-13", entered: 220, pending: 170 },
  { date: "2026-07-14", entered: 390, pending: 30 },
  { date: "2026-07-15", entered: 420, pending: 20 },
  { date: "2026-07-16", entered: 350, pending: 50 },
  { date: "2026-07-17", entered: 430, pending: 20 },
  { date: "2026-07-18", entered: 320, pending: 80 },
  { date: "2026-07-19", entered: 250, pending: 150 },
  { date: "2026-07-20", entered: 200, pending: 200 },
  { date: "2026-07-21", entered: 140, pending: 260 },
  { date: "2026-07-22", entered: 130, pending: 270 },
  { date: "2026-07-23", entered: 280, pending: 120 },
  { date: "2026-07-24", entered: 320, pending: 80 },
  { date: "2026-07-25", entered: 250, pending: 150 },
  { date: "2026-07-26", entered: 230, pending: 170 },
  { date: "2026-07-27", entered: 380, pending: 40 },
  { date: "2026-07-28", entered: 280, pending: 120 },
  { date: "2026-07-29", entered: 150, pending: 250 },
  { date: "2026-07-30", entered: 340, pending: 60 },
  { date: "2026-07-31", entered: 220, pending: 180 },
  { date: "2026-08-01", entered: 220, pending: 180 },
  { date: "2026-08-02", entered: 400, pending: 40 },
  { date: "2026-08-03", entered: 160, pending: 240 },
  { date: "2026-08-04", entered: 390, pending: 50 },
  { date: "2026-08-05", entered: 140, pending: 260 },
  { date: "2026-08-06", entered: 280, pending: 120 },
  { date: "2026-08-07", entered: 310, pending: 90 },
  { date: "2026-08-08", entered: 350, pending: 50 },
  { date: "2026-08-09", entered: 400, pending: 20 },
  { date: "2026-08-10", entered: 200, pending: 200 },
  { date: "2026-08-11", entered: 160, pending: 240 },
  { date: "2026-08-12", entered: 420, pending: 20 },
  { date: "2026-08-13", entered: 140, pending: 240 },
  { date: "2026-08-14", entered: 380, pending: 40 },
  { date: "2026-08-15", entered: 320, pending: 80 },
  { date: "2026-08-16", entered: 350, pending: 50 },
  { date: "2026-08-17", entered: 420, pending: 20 },
  { date: "2026-08-18", entered: 180, pending: 220 },
  { date: "2026-08-19", entered: 320, pending: 70 },
  { date: "2026-08-20", entered: 380, pending: 40 },
  { date: "2026-08-21", entered: 220, pending: 180 },
  { date: "2026-08-22", entered: 300, pending: 100 },
  { date: "2026-08-23", entered: 420, pending: 20 },
  { date: "2026-08-24", entered: 200, pending: 200 },
  { date: "2026-08-25", entered: 210, pending: 190 },
  { date: "2026-08-26", entered: 380, pending: 40 },
  { date: "2026-08-27", entered: 400, pending: 20 },
  { date: "2026-08-28", entered: 220, pending: 180 },
  { date: "2026-08-29", entered: 160, pending: 240 },
  { date: "2026-08-30", entered: 400, pending: 40 },
]

const chartConfig = {
  marks: {
    label: "Marks",
  },
  entered: {
    label: "Entered",
    color: "var(--primary)",
  },
  pending: {
    label: "Pending",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2026-08-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Marks Entry Progress</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Daily marks entered vs pending
          </span>
          <span className="@[540px]/card:hidden">Marks entry trend</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            multiple={false}
            value={timeRange ? [timeRange] : []}
            onValueChange={(value) => {
              setTimeRange(value[0] ?? "90d")
            }}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value !== null) {
                setTimeRange(value)
              }
            }}
          >
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillEntered" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-entered)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-entered)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillPending" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pending)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pending)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="pending"
              type="natural"
              fill="url(#fillPending)"
              stroke="var(--color-pending)"
              stackId="a"
            />
            <Area
              dataKey="entered"
              type="natural"
              fill="url(#fillEntered)"
              stroke="var(--color-entered)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
