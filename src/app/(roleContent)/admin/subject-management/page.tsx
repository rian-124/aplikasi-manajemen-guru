'use client'

import { DataTable } from "@/components/ui/dataTable";
import SubjectForm from "@/components/ui/forms/SubjectForms";
import { ColumnDef } from "@tanstack/react-table";

type Subject = {
  name: string;
  code: string;
  status: string;
};

const subjectColumns: ColumnDef<Subject>[] = [
  { accessorKey: "name", header: "Nama" },
  { accessorKey: "code", header: "Kode" },
  { accessorKey: "status", header: "Status" },
];

const subjectData: Subject[] = [
  { name: "Matematika", code: "MTK101", status: "aktif" },
  { name: "Bahasa Indonesia", code: "BIN102", status: "aktif" },
  { name: "Bahasa Inggris", code: "BIG103", status: "aktif" },
  { name: "Fisika", code: "FIS104", status: "tidak aktif" },
  { name: "Kimia", code: "KIM105", status: "aktif" },
  { name: "Biologi", code: "BIO106", status: "tidak aktif" },
  { name: "Pendidikan Agama", code: "PAI107", status: "aktif" },
  { name: "Sejarah", code: "SEJ108", status: "aktif" },
  { name: "Ekonomi", code: "EKO109", status: "tidak aktif" },
  { name: "Seni Budaya", code: "SBD110", status: "aktif" },
];

export default function SubjectManagement() {
  return (
    <main className="p-5 space-y-5">
      <section>
        <div className="w-full">
          <div className="text-2xl font-bold mb-4">
            <h1>Table Mata Pelajaran Manajemen</h1>
          </div>
        </div>
        {/* table manajemen mata pelajaran */}
        <DataTable
          data={subjectData}
          columns={subjectColumns}
          settingsSearch={{ searchText: "Filter name...", filterKey: "name" }}
          FormComponent={SubjectForm}
          settingsAction={{ edit: true, detail: false, delete: true }}
        />
      </section>
    </main>
  );
}
