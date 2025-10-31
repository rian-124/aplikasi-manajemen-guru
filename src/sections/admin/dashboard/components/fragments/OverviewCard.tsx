import Card from "../elements/card";

type OverviewCardProps = {
  items: {
    title: string;
    value: number;
    change: string;
    icon: string;
  }[];
};

export default function OverviewCard({ items }: OverviewCardProps) {
  return (
    <div className="flex justify-between items-center p-5 gap-2">
      {items.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
}
