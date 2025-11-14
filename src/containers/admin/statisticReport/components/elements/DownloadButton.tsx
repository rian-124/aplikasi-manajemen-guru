import React from "react";

type DownloadButtonProps = {
  readonly children: React.ReactNode;
};

export default function DownloadButton({ children }: DownloadButtonProps) {
  return (
    <button className="w-24 p-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white">
      {children}
    </button>
  );
}
