import { Schedule } from "@/types/schedule";
import ScheduleItem from "../elements/ScheduleItem";

type TeachingScheduleProps = {
  teachingSchedule: Schedule[];
};

export default function TeachingScheduleSection({
  teachingSchedule,
}: TeachingScheduleProps) {
  return (
    <div className="w-1/2 rounded-md shadow-lg border p-2 space-y-3">
      <h1 className="text-2xl">Jadwal Mengajar Hari Ini</h1>
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
