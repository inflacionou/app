"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { format } from "date-fns"
import { ProductWithPrices } from "@/types/Product"

const chartConfig = {
  price: {
    label: "Preço",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Component({ data }: { data: ProductWithPrices }) {

  const finalDate = () => {
    return data.prices[data.prices.length - 1].updateTime.toString()
  }

  const initialDate = () => {
    return data.prices[0].updateTime.toString()
  }

  const maskMoney = (value: string) => {
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
      parseFloat(value)
    )
  }

  return (
    <Card className="bg-white z-10">
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{initialDate()} - {finalDate()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data.prices}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="updateTime"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="price"
              type="natural"
              stroke="#EF4444"
              strokeWidth={2}
              dot={{
                fill: "#EF4444",
              }}
              activeDot={{
                r: 6,
              }}
              mask=""
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
