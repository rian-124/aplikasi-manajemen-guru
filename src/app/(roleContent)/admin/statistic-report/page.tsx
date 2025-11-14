"use client";

import { cardItem } from "@/_mocks/cardItem";
import { reportColumns, reportData } from "@/_mocks/report";
import StatisticReportContainer from "@/containers/admin/statisticReport/StatisticReportContainer";
import { DonutChart } from "@/types/chart";
import { AverageClass, Report } from "@/types/report";
import { useEffect, useState } from "react";

type DataReportStatistic = {
  dataAverageClass: AverageClass[];
  dataSubjects: DonutChart[];
  dataReport: Report[];
};

export default function StatisticReport() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [dataReportStatistic, setDataReportStatistic] =
    useState<DataReportStatistic>({
      dataAverageClass: [],
      dataSubjects: [],
      dataReport: [],
    });
    const [selectedSemester, setSelectedSemester] = useState<
    "ganjil" | "genap" | null
  >(null);

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
  };

  const handleSelectedSemester = (semester: "ganjil" | "genap" | null ) => {
    setSelectedSemester(semester);
  }

  useEffect(() => {

    if (!selectedYear || !selectedSemester) return;

    const yearData = reportData.find(
      (item) => item.school_year === selectedYear
    );

    if (yearData) {

      const selectedData = yearData.data[selectedSemester];

      const randomColor = () => {
        const hue = 210;
        const saturation = Math.floor(Math.random() * 60) + 60;
        const lightness = Math.floor(Math.random() * 20) + 35;

        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      };

      const coloredData = (selectedData?.dataSubjects ?? []).map((item) => ({
        ...item,
        fill: randomColor(),
      }));

      setDataReportStatistic({
        dataAverageClass: selectedData?.dataAverageClass ?? [],
        dataSubjects: coloredData ?? [],
        dataReport: selectedData?.dataReport ?? [],
      });
    } else {
      setDataReportStatistic({
        dataAverageClass: [],
        dataSubjects: [],
        dataReport: [],
      });
    }
  }, [selectedYear, selectedSemester]);

  return (
    <main>
      <StatisticReportContainer
        cardItem={cardItem.statisticReport}
        dataAverageClass={dataReportStatistic.dataAverageClass}
        dataSubjects={dataReportStatistic.dataSubjects}
        dataReport={dataReportStatistic.dataReport}
        reportColumns={reportColumns}
        onYearSelect={handleYearSelect}
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
        onSelectSemester={handleSelectedSemester}
      />
    </main>
  );
}
