import { Class } from "@/types/class";
import { ColumnDef } from "@tanstack/react-table";

export const classData: Class[] = [
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

export const classColumns: ColumnDef<Class>[] = [
  { accessorKey: "id", header: "ID Kelas" },
  { accessorKey: "name", header: "Nama Kelas" },
  { accessorKey: "homeroomTeacher", header: "Wali Kelas" },
  { accessorKey: "studentCount", header: "Jumlah Siswa" },
  { accessorKey: "grade", header: "Tingkat" },
];