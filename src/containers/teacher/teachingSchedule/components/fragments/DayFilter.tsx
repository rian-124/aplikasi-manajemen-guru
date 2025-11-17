import { Button } from "@/components/ui/button";

type DayFilterProps = {
  days: string[];
};

export default function DayFilter({ days }: DayFilterProps) {
  return (
    <div className="border p-5 rounded-xl flex justify-center gap-3">
      {days.map((day) => (
        <Button key={day} variant={"outline"}>
          {day}
        </Button>
      ))}
    </div>
  );
}
