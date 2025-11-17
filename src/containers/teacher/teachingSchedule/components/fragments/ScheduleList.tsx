import ScheduleItem from "@/components/ui/scheduleItems/ScheduleItem";
import { Schedule } from "@/types/schedule";

type ScheduleListProps = {
  teachingSchedule: Schedule[];
};

export default function ScheduleList({ teachingSchedule }: ScheduleListProps) {
  return (
    <div className="space-y-3 border rounded-xl p-5">
      {teachingSchedule.map((item) => (
        <ScheduleItem
          key={item.className}
          className={item.className}
          subject={item.subject}
          time={item.time}
        />
      ))}
    </div>
  );
}
