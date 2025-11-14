import React from "react";

type Badge = {
  readonly children: React.ReactNode;
};

export default function Badge({ children }: Badge) {
  return (
    <div className="w-full bg-blue-200/50 text-blue-500 text-center rounded-full">
      <p>{children}</p>
    </div>
  );
}
