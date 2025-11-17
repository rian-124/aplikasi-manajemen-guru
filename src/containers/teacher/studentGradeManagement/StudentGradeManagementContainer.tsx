import { Subject } from "@/types/subject";
import Title from "./components/elements/Title";
import FilterBar from "./components/fragments/FilterBar";
import StudentGradeCard from "./components/fragments/StudentGradeCard";
import { ListClass } from "@/types/class";
import { StudentGrades } from "@/types/student";

type StudentGradeManagementContainerProps = {
  subjects: Subject[];
  classes: ListClass[];
  studentGradesData: StudentGrades[];
};

export default function StudentGradeManagementContainer({
  subjects,
  classes,
  studentGradesData,
}: StudentGradeManagementContainerProps) {
  return (
    <section className="p-3 space-y-10">
      <Title label="Manajemen Nilai Siswa" />
      <FilterBar subjects={subjects} classes={classes} />
      <div className="flex gap-3 flex-wrap">
        {studentGradesData.map((item) => (
          <StudentGradeCard key={item.nis} item={item} />
        ))}
      </div>
    </section>
  );
}
