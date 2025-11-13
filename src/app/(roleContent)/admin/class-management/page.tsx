"use client";

import { classColumns, classData } from "@/_mocks/class";
import ClassForm from "@/components/ui/forms/ClassForms";
import ClassManagementContainer from "@/containers/admin/classManagement/ClassManagementContainer";
import { Class } from "@/types/class";
import { useState } from "react";


export default function ClassManagement() {
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);

  const handleDetail = (rowData: Class) => {
    setSelectedClass(rowData);
  };

  return (
    <main className="p-5 space-y-5">
      <ClassManagementContainer
        selectedClass={selectedClass}
        classData={classData}
        classColumns={classColumns}
        formComponent={ClassForm}
        handleDetail={handleDetail}
      />
    </main>
  );
}
