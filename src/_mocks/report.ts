import { ValueSummary } from "@/types/chart";
import { Report } from "@/types/report";
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

// export const dataAverageClass: AverageClass[] = [
//   { class: "XII-1", value: "40" },
//   { class: "XII-2", value: "80" },
//   { class: "XII-3", value: "40" },
//   { class: "XII-3", value: "80" },
// ];

// export const dataSubjectReport: SubjectReport[] = [
//   { name: "Matematika", value: 5 },
//   { name: "Bahasa Inggris", value: 4 },
//   { name: "Fisika", value: 10 },
//   { name: "Biologi", value: 10 },
// ];

export const reportData = [
  {
    school_year: 2024,
    data: {
      ganjil: {
        dataAverageClass: [
          { class: "X IPA 1", value: 82 },
          { class: "XI IPA 2", value: 88 },
          { class: "XII IPA 1", value: 91 },
        ],
        dataSubjects: [
          { name: "Matematika", value: 5 },
          { name: "Bahasa Inggris", value: 4 },
          { name: "Fisika", value: 3 },
        ],
        dataReport: [
          {
            class: "X IPA 1",
            teacher: "Ibu Siti Aminah",
            subject: "Matematika",
            value: 87,
            active: true,
          },
          {
            class: "XI IPA 2",
            teacher: "Bapak Deden Saputra",
            subject: "Bahasa Inggris",
            value: 90,
            active: true,
          },
        ],
      },
      genap: {
        dataAverageClass: [
          { class: "X IPA 1", value: 79 },
          { class: "XI IPA 2", value: 85 },
          { class: "XII IPA 1", value: 90 },
        ],
        dataSubjects: [
          { name: "Biologi", value: 6 },
          { name: "Kimia", value: 3 },
          { name: "Geografi", value: 4 },
        ],
        dataReport: [
          {
            class: "XII IPA 2",
            teacher: "Bapak Yudi Prasetyo",
            subject: "Informatika",
            value: 92,
            active: true,
          },
          {
            class: "XII IPS 2",
            teacher: "Ibu Tika Lestari",
            subject: "Sosiologi",
            value: 91,
            active: true,
          },
        ],
      },
    },
  },
  {
    school_year: 2025,
    data: {
      ganjil: {
        dataAverageClass: [
          { class: "X IPA 2", value: 83 },
          { class: "XI IPA 3", value: 85 },
          { class: "XII IPA 1", value: 88 },
        ],
        dataSubjects: [
          { name: "Matematika", value: 4 },
          { name: "Bahasa Indonesia", value: 5 },
          { name: "Ekonomi", value: 3 },
        ],
        dataReport: [
          {
            class: "X IPA 3",
            teacher: "Ibu Dwi Handayani",
            subject: "Bahasa Indonesia",
            value: 88,
            active: true,
          },
        ],
      },
    },
  },
];


export const valueSummaryData: ValueSummary[] = [
  { grade: "89", value: 50 },
  { grade: "80", value: 20 },
  { grade: "70", value: 30 },
  { grade: "54", value: 40 },
];