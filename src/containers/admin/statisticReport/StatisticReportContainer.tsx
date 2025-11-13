import { ChartBarLabel } from "@/components/ui/barChart";
import Card from "@/components/ui/card";
import { DataTable } from "@/components/ui/dataTable";
import { ChartPieDonutActive } from "@/components/ui/pieChart";
import { CardItem } from "@/types/cardItem";
import { AverageClass, Report, SubjectReport } from "@/types/report";
import { ColumnDef } from "@tanstack/react-table";

type StatisticReportContainerProps = {
    cardItem: CardItem[] | [];
    dataAverageClass: AverageClass[] | [];
    dataSubjects: SubjectReport[] | [];
    dataReport: Report[] | [];
    reportColumns: ColumnDef<Report>[];
}

export default function StatisticReportContainer({ cardItem, dataAverageClass, dataSubjects, dataReport, reportColumns } : StatisticReportContainerProps) {
  return (
    <section className="p-10 space-y-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Laporan & Statistik</h1>
        <div className="text-xs flex items-center gap-5 text-blue-500">
          <button className="w-24 p-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white">
            Unduh PDF
          </button>
          <button className="w-24 p-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white">
            Unduh Excel
          </button>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-5 flex justify-between text-xs items-center">
        <div className="space-x-5">
          <button className="w-24 p-2 text-black border border-gray-300 rounded-md">
            Tahun Ajaran
          </button>
          <button className="w-24 p-2 text-black border border-gray-300 rounded-md">
            2024/2025
          </button>
          <button className="w-24 p-2 text-black border border-gray-300 rounded-md">
            Tahun Ajaran
          </button>
        </div>
        <div>
          <button className="w-24 p-2 text-white bg-blue-500 rounded-md">
            Tampilkan
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        {cardItem.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>

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

      <div className="">
        <DataTable
          data={dataReport}
          columns={reportColumns}
          settingsSearch={{
            searchText: "Filter name...",
            filterKey: "class",
          }}
          isAction={false}
        />
      </div>
    </section>
  );
}
