import { ChartBarLabel } from "@/components/ui/barChart";
import { AverageScore } from "../elements/AverageScore";
import { ValueSummary } from "@/types/chart";

type ReportAverageChartProps = {
  value: number;
  chartData: ValueSummary[];
};

export default function ReportAverageChart({
  value,
  chartData,
}: ReportAverageChartProps) {
  return (
    <div className="w-full border rounded-md">
      <AverageScore value={value} />
      <ChartBarLabel chartData={chartData} xKey="grade" yKey="value" />
    </div>
  );
}
