import { ReportStudent, StudentGrades } from "@/types/student";
import { ColumnDef } from "@tanstack/react-table";

export const studentGradesData: StudentGrades[] = [
  {
    student_name: "Dimas Saputra",
    nis: "12345",
    assessments: [
      {
        type: "Assignment 1",
        score: 80,
        input_date: "2025-11-05",
        remark: "Passed",
      },
      {
        type: "Midterm Exam",
        score: 85,
        input_date: "2025-11-06",
        remark: "Passed",
      },
    ],
  },
  {
    student_name: "Siti Nurhaliza",
    nis: "12346",
    assessments: [
      {
        type: "Assignment 1",
        score: 60,
        input_date: "2025-11-05",
        remark: "Remedial",
      },
      {
        type: "Final Exam",
        score: 75,
        input_date: "2025-11-07",
        remark: "Passed",
      },
    ],
  },
  {
    student_name: "Budi Santoso",
    nis: "12347",
    assessments: [
      {
        type: "Midterm Exam",
        score: 90,
        input_date: "2025-11-06",
        remark: "Passed",
      },
      {
        type: "Final Exam",
        score: 92,
        input_date: "2025-11-08",
        remark: "Passed",
      },
    ],
  },
  {
    student_name: "Rina Maulida",
    nis: "12348",
    assessments: [
      {
        type: "Assignment 2",
        score: 70,
        input_date: "2025-11-07",
        remark: "Passed",
      },
    ],
  },
  {
    student_name: "Agus Pratama",
    nis: "12349",
    assessments: [
      {
        type: "Assignment 1",
        score: 65,
        input_date: "2025-11-05",
        remark: "Remedial",
      },
      {
        type: "Midterm Exam",
        score: 78,
        input_date: "2025-11-06",
        remark: "Passed",
      },
    ],
  },
];


export const reportStudentData: ReportStudent[] = [
  { name: "Dimas Saputra", subject: "Matematika", grade: 85 },
  { name: "Siti Nurhaliza", subject: "Bahasa Inggris", grade: 90 },
  { name: "Budi Santoso", subject: "Fisika", grade: 78 },
  { name: "Rina Maulida", subject: "Kimia", grade: 88 },
  { name: "Agus Pratama", subject: "Ekonomi", grade: 82 },
];

export const reportStudentColumn: ColumnDef<ReportStudent>[] = [
  { accessorKey: "name", header: "Nama" },
  { accessorKey: "subject", header: "Mapel" },
  { accessorKey: "grade", header: "Nilai" },
];

