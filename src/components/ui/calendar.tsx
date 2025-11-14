"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type YearPickerProps = {
  startYear?: number;
  endYear?: number;
  onSelect?: (year: number) => void;
  onClose?: () => void;
  rangeSize?: number;
};

export default function YearPicker({
  startYear = 2010,
  endYear = new Date().getFullYear(),
  onSelect,
  onClose,
  rangeSize = 8,
}: YearPickerProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [currentStart, setCurrentStart] = useState(startYear);
  const pickerRef = useRef<HTMLDivElement>(null);

  const currentEnd = Math.min(currentStart + rangeSize - 1, endYear);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, [onClose])

  const handleSelect = (year: number) => {
    setSelectedYear(year);
    onSelect?.(year);
    onClose?.();
  };

  const handlePrev = () => {
    setCurrentStart((prev) => Math.max(startYear, prev - rangeSize));
  };

  const handleNext = () => {
    setCurrentStart((prev) =>
      Math.min(prev + rangeSize, endYear - rangeSize + 1)
    );
  };

  const years = Array.from({ length: currentEnd - currentStart + 1 }).map(
    (_, i) => currentStart + i
  );

  return (
    <div ref={pickerRef} className="absolute p-3 border rounded-md bg-white m-3">
      <div className="flex items-center justify-between p-2">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handlePrev}
          disabled={currentStart <= startYear}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <span className="text-sm font-medium">
          {currentStart} - {currentEnd} 
        </span>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleNext}
          disabled={currentEnd >= endYear}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {years.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            onClick={() => handleSelect(year)}
            className="text-sm"
          >
            {year}
          </Button>
        ))}
      </div>
    </div>
  );
}
