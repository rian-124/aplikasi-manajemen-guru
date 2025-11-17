import { valueSummaryData } from "@/_mocks/report";
import { reportStudentColumn, reportStudentData } from "@/_mocks/student";
import StudentGradeReportContainer from "@/containers/teacher/studentGradeReport/StudentGradeReportContainer";

export default function StudentGradeReport() {
  return (
    <main>
      <StudentGradeReportContainer
        data={reportStudentData}
        columns={reportStudentColumn}
        valueSummaryData={valueSummaryData}
      />
    </main>
  );
}
