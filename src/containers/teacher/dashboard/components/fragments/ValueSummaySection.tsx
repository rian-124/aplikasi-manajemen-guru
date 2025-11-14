import { ChartBarLabel } from "@/components/ui/barChart";
import Title from "../elements/Title";
import { ValueSummary } from "@/types/chart";

type ValueSummarySectionProps = {
  valueSummaryData: ValueSummary[] | [];
};

export default function ValueSummarySection({
  valueSummaryData,
}: ValueSummarySectionProps) {
  return (
    <div className="p-10 border rounded-md">
      <Title>Ringkasan Nilai</Title>
      <ChartBarLabel
        chartData={valueSummaryData}
        xKey={"grade"}
        yKey={"value"}
      />
    </div>
  );
}
