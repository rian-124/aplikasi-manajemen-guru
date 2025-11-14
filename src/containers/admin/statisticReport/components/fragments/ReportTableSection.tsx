import { DataTable } from "@/components/ui/dataTable";
import { Report } from "@/types/report";
import { ColumnDef } from "@tanstack/react-table";

type ReportTableSectionProps = {
  dataReport: Report[] | [];
  reportColumns: ColumnDef<Report>[];
};

export default function ReportTableSection({
  dataReport,
  reportColumns,
}: ReportTableSectionProps) {
  return (
    <div>
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
  );
}
