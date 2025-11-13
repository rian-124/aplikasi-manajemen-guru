import { DataTable } from "@/components/ui/dataTable";
import { DetailData } from "@/components/ui/detailData";
import { TeacherFormProps } from "@/components/ui/forms/TeacherForms";
import { Teacher } from "@/types/teacher";
import { ColumnDef } from "@tanstack/react-table";
import { FC } from "react";

type TeacherManagementContainerProps = {
  selectedTeacher: Teacher | null;
  teacherData: Teacher[] | [];
  teacherColumns: ColumnDef<Teacher>[];
  formComponent: FC<TeacherFormProps>;
  handleTeacherDetail: (rowdata: Teacher) => void;
};

export default function TeacherManagementContainer({
  selectedTeacher,
  teacherData,
  teacherColumns,
  formComponent,
  handleTeacherDetail,
}: TeacherManagementContainerProps) {
  return (
    <section>
      {/* detail teacher */}
      {selectedTeacher && (
        <DetailData
          title="Detail Guru"
          leftData={[
            { label: "Nip", value: selectedTeacher.nip },
            { label: "Nama", value: selectedTeacher.name },
          ]}
          rightData={[
            { label: "Mata Pelajaran", value: selectedTeacher.subject },
            { label: "Kelas", value: selectedTeacher.class },
          ]}
        />
      )}
      {/* table manajemen guru */}
      <DataTable
        data={teacherData}
        columns={teacherColumns}
        settingsSearch={{ searchText: "Filter name...", filterKey: "name" }}
        FormComponent={formComponent}
        onDetailClick={handleTeacherDetail}
        settingsAction={{ edit: true, detail: true, delete: true }}
      />
    </section>
  );
}
