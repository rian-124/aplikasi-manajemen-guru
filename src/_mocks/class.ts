import { Class, ListClass } from "@/types/class";
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

export const listClassData: ListClass[] = [
  { name: "X IPA 1", student: 32 },
  { name: "X IPA 2", student: 30 },
  { name: "XI IPS 1", student: 28 },
  { name: "XII IPA 1", student: 31 },
  { name: "XII IPS 2", student: 29 },
];

export const listClassColumns: ColumnDef<ListClass>[] = [
  { accessorKey: "name", header: "Kelas" },
  { accessorKey: "student", header: "Siswa" },
];

export const classColumns: ColumnDef<Class>[] = [
  { accessorKey: "id", header: "ID Kelas" },
  { accessorKey: "name", header: "Nama Kelas" },
  { accessorKey: "homeroomTeacher", header: "Wali Kelas" },
  { accessorKey: "studentCount", header: "Jumlah Siswa" },
  { accessorKey: "grade", header: "Tingkat" },
];


export const valueSummaryData = [
  { grade: "Matematika", value: 85 },
  { grade: "Bahasa Inggris", value: 90 },
  { grade: "Fisika", value: 78 },
  { grade: "Kimia", value: 88 },
  { grade: "Ekonomi", value: 82 },
];