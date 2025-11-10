"use client";

import { DataTable } from "@/components/ui/dataTable";
import { DetailData } from "@/components/ui/detailData";
import ClassForm from "@/components/ui/forms/ClassForms";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

type Kelas = {
  id: string;
  name: string;
  homeroomTeacher: string;
  studentCount: number;
  grade: string;
};

const classData: Kelas[] = [
  {
    id: "C001",
    name: "7A",
    homeroomTeacher: "Afrian Fahrurrozi",
    studentCount: 30,
    grade: "7",
  },
  {
    id: "C002",
    name: "7B",
    homeroomTeacher: "Dewi Lestari",
    studentCount: 28,
    grade: "7",
  },
  {
    id: "C003",
    name: "8A",
    homeroomTeacher: "Rizky Pratama",
    studentCount: 32,
    grade: "8",
  },
  {
    id: "C004",
    name: "8B",
    homeroomTeacher: "Nadia Putri",
    studentCount: 29,
    grade: "8",
  },
  {
    id: "C005",
    name: "9A",
    homeroomTeacher: "Bagas Saputra",
    studentCount: 31,
    grade: "9",
  },
];

const classColumns: ColumnDef<Kelas>[] = [
  { accessorKey: "id", header: "ID Kelas" },
  { accessorKey: "name", header: "Nama Kelas" },
  { accessorKey: "homeroomTeacher", header: "Wali Kelas" },
  { accessorKey: "studentCount", header: "Jumlah Siswa" },
  { accessorKey: "grade", header: "Tingkat" },
];

export default function ClassManagement() {
  const [selectedClass, setSelectedClass] = useState<Kelas | null>(null);

  const handleDetail = (rowData: Kelas) => {
    setSelectedClass(rowData);
  };

  return (
    <main className="p-5 space-y-5">
      <section>
        <div className="w-full">
          <div className="text-2xl font-bold mb-4">
            <h1>Table Manajemen Kelas</h1>
          </div>
        </div>

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
          FormComponent={ClassForm}
          onDetailClick={handleDetail}
          settingsAction={{ edit: true, detail: true, delete: true }}
        />
      </section>
    </main>
  );
}
