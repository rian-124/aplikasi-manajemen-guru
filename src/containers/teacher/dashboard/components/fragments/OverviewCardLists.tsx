import Card from "@/components/ui/card";
import { CardItem } from "@/types/cardItem";

type OverviewCardListsProps = {
  cardItem: CardItem[];
};

export default function OverviewCardLists({
  cardItem,
}: OverviewCardListsProps) {
  return (
    <div className="flex gap-3">
      {cardItem.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}
