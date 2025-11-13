import { cardItem } from "@/_mocks/cardItem";
import {
  dataAverageClass,
  dataReport,
  dataSubjectReport,
  reportColumns,
} from "@/_mocks/report";
import StatisticReportContainer from "@/containers/admin/statisticReport/StatisticReportContainer";
import { SubjectReport } from "@/types/report";

export default function StatisticReport() {
  const randomColor = () => {
    const hue = 210;
    const saturation = Math.floor(Math.random() * 60) + 60;
    const lightness = Math.floor(Math.random() * 20) + 35;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const subjectReportRandomColor = dataSubjectReport.map((item) => ({
    ...item,
    fill: randomColor(),
  }))  ;

  return (
    <main>
      <StatisticReportContainer
        cardItem={cardItem.statisticReport}
        dataAverageClass={dataAverageClass}
        dataSubjects={subjectReportRandomColor}
        dataReport={dataReport}
        reportColumns={reportColumns}
      />
    </main>
  );
}
