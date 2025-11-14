"use client";

import { cardItem } from "@/_mocks/cardItem";
import DashboardContainer from "@/containers/admin/dashboard/DashboardContainer";

const activityItem = [
  { title: "Guru Aktif Minggu Ini", value: "12 (guru)" },
  { title: "Aktivitas Hari Ini", value: "18 (aktifitas)" },
  { title: "Guru Paling Aktif", value: "Budi (12 aktivitas)" },
];

const dataActiveTeacher = [
  { name: "Aktif", value: 80, fill: "#3B82F6" },
  { name: "Tidak Aktif", value: 20, fill: "#0EA5E9" },
];

export default function Dashboard() {
  return (
    <main className="p-5 space-y-5">
      <DashboardContainer
        cardItem={cardItem.dashboardAdmin}
        activityItem={activityItem}
        dataActiveTeacher={dataActiveTeacher}
      />
    </main>
  );
}
