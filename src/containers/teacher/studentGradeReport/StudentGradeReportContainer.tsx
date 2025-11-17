import ReportFilter from "./components/elements/ReportFilter";
import ReportTable from "./components/fragments/ReportTable";
import { ColumnDef } from "@tanstack/react-table";
import { ValueSummary } from "@/types/chart";
import { ChartBarLabel } from "@/components/ui/barChart";
import { ReportStudent } from "@/types/student";

type StudentGradeCardContainerProps = {
  data: ReportStudent[];
  columns: ColumnDef<ReportStudent>[];
  valueSummaryData: ValueSummary[];
};

export default function StudentGradeReportContainer({
  data,
  columns,
  valueSummaryData
}: StudentGradeCardContainerProps) {
  return (
    <section className="p-10 space-y-5">
      <div className="flex">
        <h1 className="text-2xl font-bold">Laporan Nilai</h1>
        <ReportFilter />
      </div>
      <div className="flex gap-3">
        <ReportTable data={data} columns={columns} />
        <div className="w-full border rounded-md">
          <div className="p-5">
            <h1 className="text-xl">Rata-Rata Nilai</h1>
            <h4 className="text-4xl font-bold p-3">84.8</h4>
          </div>
          <ChartBarLabel
            chartData={valueSummaryData}
            xKey={"grade"}
            yKey={"value"}
          />
        </div>
      </div>
    </section>
  );
}
