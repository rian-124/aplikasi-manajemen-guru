import { ChartBarLabel } from "@/components/ui/barChart";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/dataTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

type ReportStudent = {
  name: string;
  subject: string;
  grade: number;
};

// const subjectColumns: ColumnDef<Subject>[] = [
//   { accessorKey: "name", header: "Nama" },
//   { accessorKey: "code", header: "Kode" },
//   { accessorKey: "status", header: "Status" },
// ];

const reportStudentData: ReportStudent[] = [
  { name: "Dimas Saputra", subject: "Matematika", grade: 85 },
  { name: "Siti Nurhaliza", subject: "Bahasa Inggris", grade: 90 },
  { name: "Budi Santoso", subject: "Fisika", grade: 78 },
  { name: "Rina Maulida", subject: "Kimia", grade: 88 },
  { name: "Agus Pratama", subject: "Ekonomi", grade: 82 },
];

const valueSummaryData = [
  { grade: "Matematika", value: 85 },
  { grade: "Bahasa Inggris", value: 90 },
  { grade: "Fisika", value: 78 },
  { grade: "Kimia", value: 88 },
  { grade: "Ekonomi", value: 82 },
];

const reportStudentColumn: ColumnDef<ReportStudent>[] = [
  { accessorKey: "name", header: "Nama" },
  { accessorKey: "subject", header: "Mapel" },
  { accessorKey: "grade", header: "Nilai" },
];

export default function StudentGradeReport() {
  return (
    <section className="p-10 space-y-5">
      <div className="flex">
        <h1 className="text-2xl font-bold">Laporan Nilai</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Pilih Kelas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="capitalize">Minggu-2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-3">
        <div className="w-full border p-3 rounded-md ">
            <h1 className="text-xl">Daftar Nilai</h1>
            <div className="space-y-5">
                <DataTable
          data={reportStudentData}
          columns={reportStudentColumn}
          isAction={false}
          isFilterColumn={false}
          isPagination={false}
        />
        <Button className="bg-blue-500 w-full">Unduh Laporan</Button>
            </div>
        </div>
        <div className="w-full border rounded-md">
          <div className="p-5">
            <h1 className="text-xl">Rata-Rata Nilai</h1>
            <h4 className="text-4xl font-bold p-3">84.8</h4>
          </div>
          <ChartBarLabel
            chartData={valueSummaryData}
            xKey={"grade"}
            yKey={"value"}
          />
        </div>
      </div>
    </section>
  );
}
