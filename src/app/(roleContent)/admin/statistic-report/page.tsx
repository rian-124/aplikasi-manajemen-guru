import { ChartBarLabel } from "@/components/ui/barChart";
import Card from "@/components/ui/card";
import { DataTable } from "@/components/ui/dataTable";
import { ChartPieDonutActive } from "@/components/ui/pieChart";
import { ColumnDef } from "@tanstack/react-table";

type Report = {
  class: string;
  teacher: string;
  subject: string;
  value: number;
  active: boolean;
}

const dataReport = [
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

const reportColumns: ColumnDef<Report>[] = [
  { accessorKey: "class", header: "Kelas" },
  { accessorKey: "teacher", header: "Teacher" },
  { accessorKey: "subject", header: "Mata Pelajaran" },
  { accessorKey: "value", header: "Nilai" },
  { accessorKey: "active", header: "Aktif" },
];


export default function StatisticReport() {
  const cardItem = [
    {
      title: "Total Guru",
      value: 15,
      change: "2.00%",
      icon: "/icons/teacher-icon.svg",
    },
    {
      title: "Total Kelas",
      value: 12,
      change: "1.50%",
      icon: "/icons/teacher-icon.svg",
    },
    {
      title: "Mata Pelajaran",
      value: 8,
      change: "1.20%",
      icon: "/icons/teacher-icon.svg",
    },
  ];

  const dataAverageClass = [
    { class: "XII-1", value: "40" },
    { class: "XII-2", value: "80" },
    { class: "XII-3", value: "40" },
    { class: "XII-3", value: "80" },
  ];

  const randomColor = () => {
    const hue = 210;
    const saturation = Math.floor(Math.random() * 60) + 60;
    const lightness = Math.floor(Math.random() * 20) + 35;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const dataSubjects = [
    { name: "Matematika", value: 5 },
    { name: "Bahasa Inggris", value: 4 },
    { name: "Fisika", value: 10 },
    { name: "Biologi", value: 10 },
  ].map((item) => ({
    ...item,
    fill: randomColor(),
  }));

  return (
    <main>
      <section className="p-10 space-y-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Laporan & Statistik</h1>
          <div className="text-xs flex items-center gap-5 text-blue-500">
            <button className="w-24 p-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white">
              Unduh PDF
            </button>
            <button className="w-24 p-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white">
              Unduh Excel
            </button>
          </div>
        </div>
        <div className="border border-gray-300 rounded-md p-5 flex justify-between text-xs items-center">
          <div className="space-x-5">
            <button className="w-24 p-2 text-black border border-gray-300 rounded-md">
              Tahun Ajaran
            </button>
            <button className="w-24 p-2 text-black border border-gray-300 rounded-md">
              2024/2025
            </button>
            <button className="w-24 p-2 text-black border border-gray-300 rounded-md">
              Tahun Ajaran
            </button>
          </div>
          <div>
            <button className="w-24 p-2 text-white bg-blue-500 rounded-md">
              Tampilkan
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          {cardItem.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <div className="flex gap-3 items-center text-xl">
          <div className="border border-gray-300 rounded-md p-5 w-full h-[370px]">
            <h1>Nilai rata-rata per Kelas</h1>
            <ChartBarLabel chartData={dataAverageClass} />
          </div>
          <div className="border border-gray-300 rounded-md p-5 w-full h-[370px]">
            <h1>Jumlah Mapel yang Diajarkan</h1>
            <ChartPieDonutActive
              chartData={dataSubjects}
              label={true}
              title="Mapel"
              dotLegend={true}
            />
          </div>
        </div>

        <div className="">
          <DataTable 
            data={dataReport}
            columns={reportColumns}
            settingsSearch={{ searchText: "Filter name...", filterKey: "class" }}
            isAction={false}
          />
        </div>
      </section>
    </main>
  );
}
