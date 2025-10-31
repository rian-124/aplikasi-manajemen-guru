"use client";

import SchoolOverviewSection from "@/sections/admin/dashboard/SchoolOverviewSection";
import StatisticActivitiesSection from "@/sections/admin/dashboard/StatisticActivitiesSection";

export default function Dashboard() {

  
  return (
    <main className="p-5 space-y-5">
        <SchoolOverviewSection />
        <StatisticActivitiesSection />
    </main>
  );
}
