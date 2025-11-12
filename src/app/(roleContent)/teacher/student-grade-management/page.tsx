import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import DataTableComponent from "@/components/ui/dataTableComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Table, TableHeader } from "@/components/ui/table";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

type StudentGrades = {
    student_name: string;
    nis: string;
    assessments: {
        type: string;
        score: number;
        input_date: string;
        remark: string;
    }[]
};

const studentGradesData: StudentGrades[] = [
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

export default function StudentGradeManagement() {
  return (
    <section className="p-10">
      <div className="border rounded-md p-3 space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl">Manajemen Nilai Siswa</h1>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Pilih Mata Pelajaran <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="capitalize">
                  Minggu-2
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Pilih Kelas <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="capitalize">
                  Minggu-2
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex gap-3">
          <DataTableComponent data={studentGradesData} />
        </div>
      </div>
    </section>
  );
}
