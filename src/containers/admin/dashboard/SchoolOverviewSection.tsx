import Card from "@/components/ui/card";

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
      <div className="flex justify-between items-center p-5 gap-2">
        {cardItem.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
