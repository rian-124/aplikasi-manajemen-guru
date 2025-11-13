import React from "react";
import TitleCard from "./TitleCard";
import BodyCard from "./BodyCard";
import { CardItem } from "@/types/cardItem";

type CardProps = {
  item: CardItem;
};

export default function Card({ item }: CardProps) {
  return (
    <div className="bg-blue-100/50 rounded-md p-2 text-blue-700 shadow-xl w-full border border-blue-500">
      <TitleCard title={item.title} />
      <BodyCard value={item.value} change={item.change} icon={item.icon} />
    </div>
  );
}
