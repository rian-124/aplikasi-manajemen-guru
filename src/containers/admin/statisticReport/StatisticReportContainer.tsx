"use client";

import { CardItem } from "@/types/cardItem";
import { AverageClass, Report } from "@/types/report";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import HeaderSection from "./components/fragments/HeaderSection";
import FilterBar from "./components/fragments/FilterBar";
import OverviewCardLists from "./components/fragments/OverviewCardLists";
import ChartSection from "./components/fragments/ChartSection";
import ReportTableSection from "./components/fragments/ReportTableSection";
import { DonutChart } from "@/types/chart";

type StatisticReportContainerProps = {
  cardItem: CardItem[] | [];
  dataAverageClass: AverageClass[] | [];
  dataSubjects: DonutChart[] | [];
  dataReport: Report[] | [];
  reportColumns: ColumnDef<Report>[];
  selectedYear: number | null;
  onYearSelect: (year: number) => void;
  selectedSemester: "ganjil" | "genap" | null;
  onSelectSemester: (semester: "ganjil" | "genap" | null) => void;
};

export default function StatisticReportContainer({
  cardItem,
  dataAverageClass,
  dataSubjects,
  dataReport,
  reportColumns,
  selectedYear,
  onYearSelect,
  selectedSemester,
  onSelectSemester,
}: StatisticReportContainerProps) {
  const [isOpenYearPicker, setIsOpenYearPicker] = useState(false);

  const handleYearSelect = (year: number) => {
    onYearSelect(year);
    setIsOpenYearPicker(false);
  };

  const handleOpenPicker = () => {
    setIsOpenYearPicker(true);
  };

  const handleClosePicker = () => {
    setIsOpenYearPicker(false);
  };

  return (
    <section className="p-10 space-y-5">
      <HeaderSection title="Laporan & Statistik" />
      <FilterBar
        selectedYear={selectedYear}
        selectedSemester={selectedSemester}
        isOpenYearPicker={isOpenYearPicker}
        handleOpenPicker={handleOpenPicker}
        handleClosePicker={handleClosePicker}
        onSelectSemester={onSelectSemester}
        handleYearSelect={handleYearSelect}
      />
      <OverviewCardLists cardItem={cardItem} />

      <ChartSection
        dataAverageClass={dataAverageClass}
        dataSubjects={dataSubjects}
      />
      <ReportTableSection
        dataReport={dataReport}
        reportColumns={reportColumns}
      />
    </section>
  );
}
