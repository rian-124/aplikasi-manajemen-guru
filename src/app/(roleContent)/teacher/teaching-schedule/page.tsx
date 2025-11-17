import { teachingSchedule } from "@/_mocks/Schedule";
import TeachingScheduleContainer from "@/containers/teacher/teachingSchedule/TeachingScheduleContainer";

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function TeachingSchedule() {
  return (
    <main>
      <TeachingScheduleContainer days={days}  teachingSchedule={teachingSchedule}  />
    </main>
  );
}
