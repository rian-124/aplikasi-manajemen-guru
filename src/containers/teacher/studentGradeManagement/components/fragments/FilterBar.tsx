import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListClass } from "@/types/class";
import { Subject } from "@/types/subject";
import { ChevronDown } from "lucide-react";

type FilterBarProps = {
  subjects: Subject[];
  classes: ListClass[];
};

export default function FilterBar({ subjects, classes }: FilterBarProps) {
  return (
    <div className="p-3 rounded-md border border-gray-300 flex gap-3">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Pilih Mata Pelajaran <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {subjects.map((item) => (
              <DropdownMenuItem key={item.name} className="capitalize">
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Pilih Kelas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {classes.map((item) => (
              <DropdownMenuItem key={item.name} className="capitalize">
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
