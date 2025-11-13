import { DataTable } from "@/components/ui/dataTable";
import { DetailData } from "@/components/ui/detailData";
import { ClassFormProps } from "@/components/ui/forms/ClassForms";
import { Class } from "@/types/class";
import { ColumnDef } from "@tanstack/react-table";
import { FC } from "react";

type ClassManagementProps = {
  selectedClass: Class | null;
  classData: Class[] | [];
  classColumns: ColumnDef<Class>[];
  formComponent: FC<ClassFormProps>;
  handleDetail: (rowData: Class) => void;
};

export default function ClassManagementContainer({
  selectedClass,
  classData,
  classColumns,
  formComponent,
  handleDetail,
}: ClassManagementProps) {
  return (
    <section>
      {/* detail teacher */}
      {selectedClass && (
        <DetailData
          title="Detail Guru"
          leftData={[
            { label: "Nama", value: selectedClass.name },
            { label: "Wali Kelas", value: selectedClass.homeroomTeacher },
          ]}
          rightData={[
            { label: "Jumlah Siswa", value: selectedClass.studentCount },
            { label: "Nilai", value: selectedClass.grade },
          ]}
        />
      )}

      {/* table manajemen guru */}
      <DataTable
        data={classData}
        columns={classColumns}
        settingsSearch={{ searchText: "Filter name...", filterKey: "name" }}
        FormComponent={formComponent}
        onDetailClick={handleDetail}
        settingsAction={{ edit: true, detail: true, delete: true }}
      />
    </section>
  );
}
