import React from "react";
import TitleCard from "./TitleCard";
import BodyCard from "./BodyCard";

type CardProps = {
  item: {
    title: string;
    value: number;
    change?: string;
    icon: string;
  };
};

export default function Card({ item }: CardProps) {
  return (
    <div className="bg-blue-100/50 rounded-md p-2 text-blue-700 shadow-xl w-full border border-blue-500">
      <TitleCard title={item.title} />
      <BodyCard value={item.value} change={item.change} icon={item.icon} />
    </div>
  );
}
