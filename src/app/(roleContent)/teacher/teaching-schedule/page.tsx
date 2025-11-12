import { Button } from "@/components/ui/button";
import { Calendar22 } from "@/components/ui/datePicker";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function TeachingSchedule() {
  return (
    <section className="p-10">
      <div className="border rounded-md p-3 space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl">Jadwal Mengajar</h1>
          </div>
          <div>
            <Calendar22 />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Minggu ini <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="capitalize">
                  Minggu-2
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          {days.map((day) => (
            <Button key={day} variant={"outline"}>
              {day}
            </Button>
          ))}
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-5 rounded-md border">
            <div>
              <h1>Kelas 10 A</h1>
              <h3 className="text-xs text-gray-300">MATEMATIKA</h3>
            </div>
            <div>
              <h3>09.00 - 10.30</h3>
            </div>
          </div>
          <div className="flex justify-between items-center p-5 rounded-md border">
            <div>
              <h1>Kelas 10 A</h1>
              <h3 className="text-xs text-gray-300">MATEMATIKA</h3>
            </div>
            <div>
              <h3>09.00 - 10.30</h3>
            </div>
          </div>
          <div className="flex justify-between items-center p-5 rounded-md border">
            <div>
              <h1>Kelas 10 A</h1>
              <h3 className="text-xs text-gray-300">MATEMATIKA</h3>
            </div>
            <div>
              <h3>09.00 - 10.30</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
