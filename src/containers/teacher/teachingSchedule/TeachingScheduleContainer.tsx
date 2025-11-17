import Title from "./components/elements/Title";
import ScheduleList from "./components/fragments/ScheduleList";
import DayFilter from "./components/fragments/DayFilter";
import { Schedule } from "@/types/schedule";

type TeachingScheduleContainerProps = {
  days: string[];
  teachingSchedule: Schedule[];
}

export default function TeachingScheduleContainer({
  days,
  teachingSchedule
}: TeachingScheduleContainerProps) {
  return (
    <section className="p-10">
      <div className="rounded-md space-y-10">
        <Title label="Jadwal Mengajar" />
        <DayFilter days={days} />
        <ScheduleList teachingSchedule={teachingSchedule} />
      </div>
    </section>
  );
}
