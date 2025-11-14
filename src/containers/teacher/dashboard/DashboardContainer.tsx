import { CardItem } from "@/types/cardItem";
import ClassTableSection from "./components/fragments/ClassTableSection";
import OverviewCardLists from "./components/fragments/OverviewCardLists";
import TeachingScheduleSection from "./components/fragments/TeachingScheduleSection";
import ValueSummarySection from "./components/fragments/ValueSummaySection";
import { ListClass } from "@/types/class";
import { ColumnDef } from "@tanstack/react-table";
import { Schedule } from "@/types/schedule";
import { ValueSummary } from "@/types/chart";

type DashboardContainerProps = {
  cardItem: CardItem[];
  listClassData: ListClass[] | [];
  listClassColumns: ColumnDef<ListClass>[];
  teachingSchedule: Schedule[];
  valueSummaryData: ValueSummary[] | [];
};

export default function DashboardContainer({
  cardItem,
  listClassData,
  listClassColumns,
  teachingSchedule,
  valueSummaryData,
}: DashboardContainerProps) {
  return (
    <section className="space-y-5">
      <OverviewCardLists cardItem={cardItem} />
      <div className="flex gap-3">
        <ClassTableSection
          listClassData={listClassData}
          listClassColumns={listClassColumns}
        />
        <TeachingScheduleSection teachingSchedule={teachingSchedule} />
      </div>
      <ValueSummarySection valueSummaryData={valueSummaryData} />
    </section>
  );
}
