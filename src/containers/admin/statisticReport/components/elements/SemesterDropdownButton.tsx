import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type SemesterDropdownButton = {
  readonly children: React.ReactNode;
};

export default function SemesterDropdownButton({
  children,
}: SemesterDropdownButton) {
  return (
    <Button
      variant="outline"
      className="ml-auto text-xs w-24 p-2 text-black border border-gray-300 rounded-md"
    >
      {children} <ChevronDown />
    </Button>
  );
}
