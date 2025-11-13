"use client";

import { subjectColumns, subjectData } from "@/_mocks/subject";
import SubjectForm from "@/components/ui/forms/SubjectForms";
import SubjectManagementContainer from "@/containers/admin/subjectManagement/SubjectManagementContainer";

export default function SubjectManagement() {
  return (
    <main className="p-5 space-y-5">
      <SubjectManagementContainer
        subjectData={subjectData}
        subjectColumns={subjectColumns}
        formComponent={SubjectForm}
      />
    </main>
  );
}
