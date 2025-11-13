import { Subject } from "@/types/subject";
import { ColumnDef } from "@tanstack/react-table";

export const subjectData: Subject[] = [
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

export const subjectColumns: ColumnDef<Subject>[] = [
  { accessorKey: "name", header: "Nama" },
  { accessorKey: "code", header: "Kode" },
  { accessorKey: "status", header: "Status" },
];