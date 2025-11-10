"use client";

import { ChartPieDonutActive } from "@/components/ui/pieChart";


export default function StatisticActivitiesSection() {
  const activityItem = [
    { title: "Guru Aktif Minggu Ini", value: "12 (guru)" },
    { title: "Aktivitas Hari Ini", value: "18 (aktifitas)" },
    { title: "Guru Paling Aktif", value: "Budi (12 aktivitas)" },
  ];

  const dataActiveTeacher = [
    { name: "Aktif", value: 80, fill: "#3B82F6" },
    { name: "Tidak Aktif", value: 20, fill: "#0EA5E9" },
  ];

  return (
    <section>
      <div className="space-y-5">
        <div className="bg-gray-200 p-1 rounded-full flex justify-center">
          <div className="text-center p-1 bg-white rounded-full w-xl text-sm">
            <p>Statistik Aktifitas</p>
          </div>
        </div>
        <div className="flex justify-between w-full p-3 gap-3">
          <div className="w-full space-y-6 border border-gray-300 shadow rounded-lg p-10 flex flex-col justify-center">
            {activityItem.map((item) => (
              <div key={item.title} className="w-full text-xs">
                <p className="font-bold text-center mb-2">{item.title}</p>
                <div className="w-full rounded-full bg-blue-200/50 text-blue-500 text-center px-3 py-1">
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full border border-gray-300 rounded-md shadow flex justify-between">
            <div className="text-xs border w-full space-y-10 p-10 flex justify-center flex-col">
              {dataActiveTeacher.map((item) => (
                <div key={item.name} className="w-full">
                  <p>{`Guru ${item.name}`}</p>
                  <div className="w-full bg-blue-200/50 text-blue-500 text-center rounded-full">
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <ChartPieDonutActive chartData={dataActiveTeacher} label={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
