"use client";

import { teacherColumns, teacherData } from "@/_mocks/teacher";
import TeacherForm from "@/components/ui/forms/TeacherForms";
import TeacherManagementContainer from "@/containers/admin/teacher-manajemen/TeacherManagementContainer";
import { Teacher } from "@/types/teacher";
import { useState } from "react";

export default function ManajemenGuru() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const handleTeacherDetail = (rowData: Teacher) => {
    setSelectedTeacher(rowData);
  };

  return (
    <main className="p-5 space-y-5">
      <TeacherManagementContainer
        selectedTeacher={selectedTeacher}
        teacherData={teacherData}
        teacherColumns={teacherColumns}
        formComponent={TeacherForm}
        handleTeacherDetail={handleTeacherDetail}
      />
    </main>
  );
}
