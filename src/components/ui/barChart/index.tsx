"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../chart/chart";

type ChartBarLabelProps<Cdata> = {
  chartData: Cdata[];
  xKey: keyof Cdata;
  yKey: keyof Cdata;
};

export const description = "A bar chart with a label";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3B82F6",
  },
} satisfies ChartConfig;

export function ChartBarLabel<Cdata>({ chartData, xKey, yKey }: ChartBarLabelProps<Cdata>) {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 20,
        }}
      >
        <CartesianGrid vertical={false} />
        <YAxis
          domain={[0, 100]}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <XAxis
          dataKey={xKey as string}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey={yKey as string} fill="var(--color-desktop)" radius={9}>
          <LabelList
            position="top"
            offset={0}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
