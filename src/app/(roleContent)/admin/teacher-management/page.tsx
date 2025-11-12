'use client'

import { DataTable } from "@/components/ui/dataTable";
import { DetailData } from "@/components/ui/detailData";
import TeacherForm from "@/components/ui/forms/TeacherForms";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

type Guru = {
  id: string;
  name: string;
  nip: string;
  subject: string;
  class: string;
};

const guruData: Guru[] = [
  {
    id: "G001",
    name: "Afrian Fahrurrozi",
    nip: "1987654321001",
    subject: "Informatika",
    class: "7A",
  },
  {
    id: "G002",
    name: "Dewi Lestari",
    nip: "1987654321002",
    subject: "Matematika",
    class: "8B",
  },
  {
    id: "G003",
    name: "Rizky Pratama",
    nip: "1987654321003",
    subject: "Bahasa Inggris",
    class: "9A",
  },
  {
    id: "G004",
    name: "Nadia Putri",
    nip: "1987654321004",
    subject: "IPA",
    class: "7C",
  },
  {
    id: "G005",
    name: "Bagas Saputra",
    nip: "1987654321005",
    subject: "IPS",
    class: "8A",
  },
];

const guruColumns: ColumnDef<Guru>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nama Guru" },
  { accessorKey: "nip", header: "NIP" },
  { accessorKey: "subject", header: "Mata Pelajaran" },
  { accessorKey: "class", header: "Kelas" },
];

export default function ManajemenGuru() {

  const [selectedTeacher, setSelectedTeacher] = useState<Guru | null>(null);

  const handleTeacherDetail = (rowData : Guru) => {
    setSelectedTeacher(rowData)
  };
  
  return (
    <main className="p-5 space-y-5">
      <section>
        {/* detail teacher */}
        { selectedTeacher && 
        <DetailData 
        title="Detail Guru" 
        leftData={[
          {label: "Nip", value: selectedTeacher.nip},
          {label: "Nama", value: selectedTeacher.name},
        ]} 
        rightData={[
          {label: "Mata Pelajaran", value: selectedTeacher.subject},
          {label: "Kelas", value: selectedTeacher.class}
        ]}
        />
        }
        {/* table manajemen guru */}
        <DataTable
          data={guruData}
          columns={guruColumns}
          settingsSearch={{ searchText: "Filter name...", filterKey: "name" }}
          FormComponent={TeacherForm}
          onDetailClick={handleTeacherDetail}
          settingsAction={{ edit: true, detail: true, delete: true }}
        />
      </section>
    </main>
  );
}
