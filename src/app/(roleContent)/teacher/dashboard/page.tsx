import { cardItem } from "@/_mocks/cardItem";
import { listClassColumns, listClassData } from "@/_mocks/class";
import { valueSummaryData } from "@/_mocks/report";
import { teachingSchedule } from "@/_mocks/Schedule";
import DashboardContainer from "@/containers/teacher/dashboard/DashboardContainer";


export default function Dashboard() {
  return (
    <main>
      <section className="p-10">
        <DashboardContainer
          cardItem={cardItem.dashboardTeacher}
          listClassData={listClassData}
          listClassColumns={listClassColumns}
          teachingSchedule={teachingSchedule}
          valueSummaryData={valueSummaryData}
        />
      </section>
    </main>
  );
}
