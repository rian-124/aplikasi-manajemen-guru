import OverviewCard from "./components/fragments/OverviewCard";

export default function SchoolOverviewSection() {
  const cardItem = [
    {
      title: "Total Guru",
      value: 15,
      change: "2.00%",
      icon: "/icons/teacher-icon.svg",
    },
    {
      title: "Total Kelas",
      value: 12,
      change: "1.50%",
      icon: "/icons/teacher-icon.svg",
    },
    {
      title: "Mata Pelajaran",
      value: 8,
      change: "1.20%",
      icon: "/icons/teacher-icon.svg",
    },
    {
      title: "Total Siswa",
      value: 220,
      change: "3.00%",
      icon: "/icons/teacher-icon.svg",
    },
  ];

  return (
    <section>
      <OverviewCard items={cardItem} />
    </section>
  );
}
