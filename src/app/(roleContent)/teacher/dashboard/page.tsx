import { ChartBarLabel } from "@/components/ui/barChart";
import Card from "@/components/ui/card";
import { DataTable } from "@/components/ui/dataTable";
import { ColumnDef } from "@tanstack/react-table";

type ListClass = {
  name: string;
  student: number;
};

type ValueSummary = {
  grade: string;
  value: number;
};

const listClassData: ListClass[] = [
  { name: "X IPA 1", student: 32 },
  { name: "X IPA 2", student: 30 },
  { name: "XI IPS 1", student: 28 },
  { name: "XII IPA 1", student: 31 },
  { name: "XII IPS 2", student: 29 },
];

const valueSummaryData: ValueSummary[] = [
  { grade: "89", value: 50 },
  { grade: "80", value: 20 },
  { grade: "70", value: 30 },
  { grade: "54", value: 40 },
];

const listClassColumns: ColumnDef<ListClass>[] = [
  { accessorKey: "name", header: "Kelas" },
  { accessorKey: "student", header: "Siswa" },
];

const cardItem = [
  {
    title: "Total Kelas",
    value: 12,
    icon: "/icons/teacher-icon.svg",
  },
  {
    title: "Mata Pelajaran",
    value: 8,
    icon: "/icons/teacher-icon.svg",
  },
  {
    title: "Total Siswa",
    value: 220,
    icon: "/icons/teacher-icon.svg",
  },
];

export default function Dashboard() {
  return (
    <>
      <section className="p-10 space-y-5">
        <div className="flex gap-3">
          {cardItem.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
        <div className="flex gap-3">
          <div className="w-1/2 rounded-md shadow-lg border p-2">
            <h1 className="text-2xl">Daftar Kelas</h1>
            <div className="p-3">
              <DataTable
                data={listClassData}
                columns={listClassColumns}
                isAction={false}
                isFilterColumn={false}
                isPagination={false}
              />
            </div>
          </div>
          <div className="w-1/2 rounded-md shadow-lg border p-2">
            <h1 className="text-2xl">Jadwal Mengajar Hari Ini</h1>
            <div className="p-3 space-y-3">
              <div className="flex justify-between items-center p-5 rounded-md border">
                <div>
                  <h1>Kelas 10 A</h1>
                  <h3 className="text-xs text-gray-300">MATEMATIKA</h3>
                </div>
                <div>
                  <h3>09.00 - 10.30</h3>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 rounded-md border">
                <div>
                  <h1>Kelas 10 A</h1>
                  <h3 className="text-xs text-gray-300">MATEMATIKA</h3>
                </div>
                <div>
                  <h3>09.00 - 10.30</h3>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 rounded-md border">
                <div>
                  <h1>Kelas 10 A</h1>
                  <h3 className="text-xs text-gray-300">MATEMATIKA</h3>
                </div>
                <div>
                  <h3>09.00 - 10.30</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 border rounded-md">
          <h1 className="p-10 text-3xl text-center border rounded-md">
            Ringkasan nilai
          </h1>
          <ChartBarLabel
            chartData={valueSummaryData}
            xKey={"grade"}
            yKey={"value"}
          />
        </div>
      </section>
    </>
  );
}
