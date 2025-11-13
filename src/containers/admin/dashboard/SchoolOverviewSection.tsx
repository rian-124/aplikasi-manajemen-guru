import Card from "@/components/ui/card";
import { CardItem } from "@/types/cardItem";

type SchoolOverviewSectionProps = {
  cardItem: CardItem[];
}

export default function SchoolOverviewSection({cardItem} : SchoolOverviewSectionProps) {

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
