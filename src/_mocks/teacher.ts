import { Teacher } from "@/types/teacher";
import { ColumnDef } from "@tanstack/react-table";

export const teacherData: Teacher[] = [
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

export const teacherColumns: ColumnDef<Teacher>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nama Guru" },
  { accessorKey: "nip", header: "NIP" },
  { accessorKey: "subject", header: "Mata Pelajaran" },
  { accessorKey: "class", header: "Kelas" },
];