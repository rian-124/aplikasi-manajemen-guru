import CardContainer from "../elements/CardContainer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { StudentGrades } from "@/types/student";

type StudentGradeCardProps = {
  item: StudentGrades;
};

export default function StudentGradeCard({ item }: StudentGradeCardProps) {
  return (
    <CardContainer>
      <div className="flex justify-between items-center border border-blue-500 rounded-xl p-3 bg-blue-500/10">
        <div className="w-full text-lg text-blue-500">
          <h1>{item.student_name}</h1>
          <h2 className="text-sm text-blue-500/50">2205061</h2>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                <MoreHorizontal className="text-blue-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="capitalize">Edit</DropdownMenuItem>
              <DropdownMenuItem className="capitalize">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap text-blue-500 border border-blue-500 rounded-xl p-2 bg-blue-500/10">
        {item.assessments.map((item) => (
          <div
            key={item.type}
            className="w-full flex items-center justify-between"
          >
            <div className="w-full flex gap-3 p-3">
              <h1>{item.type}: </h1>
              <div className="w-14 text-center rounded-full border border-blue-500 bg-blue-500/20">
                <h3>{item.score}</h3>
              </div>
            </div>
            <div>
              <div
                className={`w-24 text-center rounded-full border ${
                  item.score >= 70
                    ? "text-green-500 border-green-500 bg-green-500/20"
                    : "text-red-500 border-red-500 bg-red-500/20"
                }`}
              >
                <h3>{item.remark}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContainer>
  );
}
