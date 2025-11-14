import { Button } from "@/components/ui/button";
import YearPicker from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type FilterBarProps = {
  selectedYear: number | null;
  selectedSemester: string | null;
  isOpenYearPicker: boolean;
  handleOpenPicker: () => void;
  onSelectSemester: (semester: "ganjil" | "genap" | null) => void;
  handleYearSelect: (year: number) => void;
  handleClosePicker: () => void;
};

export default function FilterBar({
  selectedYear,
  selectedSemester,
  isOpenYearPicker,
  handleOpenPicker,
  onSelectSemester,
  handleYearSelect,
  handleClosePicker,
}: FilterBarProps) {
  return (
    <div className="border border-gray-300 rounded-md p-5 flex justify-between text-xs items-center">
      <div className="space-x-5">
        <button
          onClick={handleOpenPicker}
          className="relative w-24 p-2 text-black border border-gray-300 rounded-md"
        >
          {selectedYear ? `Tahun: ${selectedYear}` : "Tahun ajaran"}
        </button>

        {isOpenYearPicker && (
          <YearPicker
            startYear={2004}
            endYear={2025}
            onSelect={handleYearSelect}
            onClose={handleClosePicker}
          />
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto text-xs w-24 p-2 text-black border border-gray-300 rounded-md"
            >
              {selectedSemester ? selectedSemester : "Semester"} <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-xs">
            <DropdownMenuItem
              onClick={() => onSelectSemester("genap")}
              className="capitalize hover:bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              Genap
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onSelectSemester("ganjil")}
              className="capitalize hover:bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              Ganjil
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
