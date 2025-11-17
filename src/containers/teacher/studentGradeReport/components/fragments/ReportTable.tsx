import { DataTable } from "@/components/ui/dataTable";
import DownloadReportButton from "../elements/DownloadReportButton";
import { ColumnDef } from "@tanstack/react-table";
import { ReportStudent } from "@/types/student";

type ReportTableProps = {
  data: ReportStudent[];
  columns: ColumnDef<ReportStudent>[];
};

export default function ReportTable({ data, columns }: ReportTableProps) {
  return (
    <div className="w-full border p-3 rounded-md space-y-5">
      <h1 className="text-xl">Daftar Nilai</h1>
      <DataTable
        data={data}
        columns={columns}
        isAction={false}
        isFilterColumn={false}
        isPagination={false}
      />
      <DownloadReportButton />
    </div>
  );
}
