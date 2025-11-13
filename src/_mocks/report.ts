import { AverageClass, Report, SubjectReport } from "@/types/report";
import { ColumnDef } from "@tanstack/react-table";

export const dataReport: Report[] = [
  {
    class: "X IPA 1",
    teacher: "Ibu Siti Aminah",
    subject: "Matematika",
    value: 87,
    active: true,
  },
  {
    class: "X IPA 2",
    teacher: "Bapak Ahmad Fauzi",
    subject: "Fisika",
    value: 82,
    active: true,
  },
  {
    class: "XI IPS 1",
    teacher: "Ibu Rina Utami",
    subject: "Ekonomi",
    value: 79,
    active: false,
  },
  {
    class: "XI IPA 1",
    teacher: "Bapak Rudi Hartono",
    subject: "Kimia",
    value: 85,
    active: true,
  },
  {
    class: "XII IPS 2",
    teacher: "Ibu Tika Lestari",
    subject: "Sosiologi",
    value: 91,
    active: true,
  },
  {
    class: "XII IPA 1",
    teacher: "Bapak Agus Salim",
    subject: "Biologi",
    value: 83,
    active: false,
  },
  {
    class: "X IPA 3",
    teacher: "Ibu Dwi Handayani",
    subject: "Bahasa Indonesia",
    value: 88,
    active: true,
  },
  {
    class: "XI IPA 2",
    teacher: "Bapak Deden Saputra",
    subject: "Bahasa Inggris",
    value: 90,
    active: true,
  },
  {
    class: "XII IPS 1",
    teacher: "Ibu Fitri Andayani",
    subject: "Geografi",
    value: 76,
    active: false,
  },
  {
    class: "XII IPA 2",
    teacher: "Bapak Yudi Prasetyo",
    subject: "Informatika",
    value: 92,
    active: true,
  },
];

export const reportColumns: ColumnDef<Report>[] = [
  { accessorKey: "class", header: "Kelas" },
  { accessorKey: "teacher", header: "Teacher" },
  { accessorKey: "subject", header: "Mata Pelajaran" },
  { accessorKey: "value", header: "Nilai" },
  { accessorKey: "active", header: "Aktif" },
];

export const dataAverageClass : AverageClass[] = [
  { class: "XII-1", value: "40" },
  { class: "XII-2", value: "80" },
  { class: "XII-3", value: "40" },
  { class: "XII-3", value: "80" },
];

export const dataSubjectReport : SubjectReport[] = [
  { name: "Matematika", value: 5 },
  { name: "Bahasa Inggris", value: 4 },
  { name: "Fisika", value: 10 },
  { name: "Biologi", value: 10 },
];
