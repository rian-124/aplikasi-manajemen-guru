import OverviewCardLists from "./components/fragments/OverviewCardLists";
import { CardItem } from "@/types/cardItem";
import StatisticActivities from "./components/fragments/StatisticActivities";
import { ActiveTeacher } from "@/types/teacher";
import { DonutChart } from "@/types/chart";

type DashboardContainer = {
  cardItem: CardItem[];
  activityItem: ActiveTeacher[] | [];
  dataActiveTeacher: DonutChart[] | [];
};

export default function DashboardContainer({
  cardItem,
  activityItem,
  dataActiveTeacher,
}: DashboardContainer) {
  return (
    <section>
      <OverviewCardLists cardItem={cardItem} />
      <StatisticActivities
        activityItem={activityItem}
        dataActiveTeacher={dataActiveTeacher}
      />
    </section>
  );
}
