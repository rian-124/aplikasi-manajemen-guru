import { ChartPieDonutActive } from "@/components/ui/pieChart";
import Separator from "../elements/Separator";
import Badge from "../elements/Badge";
import { DonutChart } from "@/types/chart";
import { ActiveTeacher } from "@/types/teacher";

type StatisticActivitiesProps = {
  activityItem: ActiveTeacher[] | [];
  dataActiveTeacher: DonutChart[] | [];
};

export default function StatisticActivities({
  activityItem,
  dataActiveTeacher,
}: StatisticActivitiesProps) {
  return (
    <div className="space-y-5">
      <Separator label="Statistik Aktifitas" />
      <div className="flex justify-between w-full p-3 gap-3">
        <div className="w-full space-y-6 border border-gray-300 shadow rounded-lg p-10 flex flex-col justify-center">
          {activityItem.map((item) => (
            <div key={item.title} className="w-full text-xs">
              <p className="font-bold text-center mb-2">{item.title}</p>
              <Badge>{item.value}</Badge>
            </div>
          ))}
        </div>
        <div className="w-full border border-gray-300 rounded-md shadow flex justify-between">
          <div className="text-xs border w-full space-y-10 p-10 flex justify-center flex-col">
            {dataActiveTeacher.map((item) => (
              <div key={item.name} className="w-full">
                <p>{`Guru ${item.name}`}</p>
                <Badge>{item.value}</Badge>
              </div>
            ))}
          </div>
          <ChartPieDonutActive chartData={dataActiveTeacher} label={false} />
        </div>
      </div>
    </div>
  );
}
