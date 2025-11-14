import { ChartBarLabel } from "@/components/ui/barChart";
import { ChartPieDonutActive } from "@/components/ui/pieChart";
import { DonutChart } from "@/types/chart";
import { AverageClass } from "@/types/report";

type ChartSectionProps = {
  dataAverageClass: AverageClass[] | [];
  dataSubjects: DonutChart[] | [];
};

export default function ChartSection({
  dataAverageClass,
  dataSubjects,
}: ChartSectionProps) {
  return (
    <div className="flex gap-3 items-center text-xl">
      <div className="border border-gray-300 rounded-md p-5 w-full h-[370px]">
        <h1>Nilai rata-rata per Kelas</h1>
        <ChartBarLabel
          chartData={dataAverageClass}
          xKey={"class"}
          yKey={"value"}
        />
      </div>
      <div className="border border-gray-300 rounded-md p-5 w-full h-[370px]">
        <h1>Jumlah Mapel yang Diajarkan</h1>
        <ChartPieDonutActive
          chartData={dataSubjects}
          label={true}
          title="Mapel"
          dotLegend={true}
        />
      </div>
    </div>
  );
}
