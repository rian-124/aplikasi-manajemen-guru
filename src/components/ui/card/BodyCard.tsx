import Image from "next/image";

type BodyCardProps = {
  value: number;
  change: string;
  icon: string;
};

export default function BodyCard({ value, change, icon }: BodyCardProps) {
  return (
    <div className="flex gap-10 justify-between w-full p-1">
      <div className="text-xs space-y-2 p-1">
        <p className="text-2xl font-bold">{value}</p>
        <p>
          <span className="text-yellow-200">{change}</span> (30 days)
        </p>
      </div>
      <div className="p-1">
        <Image src={`${icon}`} alt="icon" width={50} height={50} />
      </div>
    </div>
  );
}
