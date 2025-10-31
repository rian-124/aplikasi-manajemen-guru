type TitleCardProps = {
  title: string;
};

export default function TitleCard({ title }: TitleCardProps) {
  return <div className="text-center font-bold p-1">{title}</div>;
}
