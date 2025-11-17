import { listClassData } from "@/_mocks/class";
import { studentGradesData } from "@/_mocks/student";
import { subjectData } from "@/_mocks/subject";
import StudentGradeManagementContainer from "@/containers/teacher/studentGradeManagement/StudentGradeManagementContainer";

export default function StudentGradeManagement() {
  return (
    <main className="p-10">
      <StudentGradeManagementContainer
        subjects={subjectData}
        classes={listClassData}
        studentGradesData={studentGradesData}
      />
    </main>
  );
}
