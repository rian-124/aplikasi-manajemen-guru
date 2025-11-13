"use client";

import { cardItem } from "@/_mocks/cardItem";
import SchoolOverviewSection from "@/containers/admin/dashboard/SchoolOverviewSection";
import StatisticActivitiesSection from "@/containers/admin/dashboard/StatisticActivitiesSection";

export default function Dashboard() {
  return (
    <main className="p-5 space-y-5">
      <SchoolOverviewSection cardItem={cardItem.dashboardAdmin} />
      <StatisticActivitiesSection />
    </main>
  );
}
