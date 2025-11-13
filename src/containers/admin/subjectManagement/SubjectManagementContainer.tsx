import { DataTable } from "@/components/ui/dataTable";
import { SubjectFormProps } from "@/components/ui/forms/SubjectForms";
import { Subject } from "@/types/subject";
import { ColumnDef } from "@tanstack/react-table";
import { FC } from "react";

type SubjectManagementContainerProps = {
    subjectData: Subject[] | [];
    subjectColumns: ColumnDef<Subject>[];
    formComponent: FC<SubjectFormProps>;
}

export default function SubjectManagementContainer({ subjectData, subjectColumns, formComponent } : SubjectManagementContainerProps ) {
  return (
    <section>
      {/* table manajemen mata pelajaran */}
      <DataTable
        data={subjectData}
        columns={subjectColumns}
        settingsSearch={{ searchText: "Filter name...", filterKey: "name" }}
        FormComponent={formComponent}
        settingsAction={{ edit: true, detail: false, delete: true }}
      />
    </section>
  );
}
