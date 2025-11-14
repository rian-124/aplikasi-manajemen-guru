import { DataTable } from "@/components/ui/dataTable";
import { ListClass } from "@/types/class";
import { ColumnDef } from "@tanstack/react-table";
import Title from "../elements/Title";

type ClassTableSectionProps = {
  listClassData: ListClass[] | [];
  listClassColumns: ColumnDef<ListClass>[];
};

export default function ClassTableSection({
  listClassData,
  listClassColumns,
}: ClassTableSectionProps) {
  return (
    <div className="w-1/2 rounded-md shadow-lg border p-2">
      <Title>Daftar Kelas</Title>
      <div className="p-3">
        <DataTable
          data={listClassData}
          columns={listClassColumns}
          isAction={false}
          isFilterColumn={false}
          isPagination={false}
        />
      </div>
    </div>
  );
}
