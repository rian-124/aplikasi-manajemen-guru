type YearSelectButtonProps = {
  label: string;
  onClick: () => void;
};

export default function YearSelectButton({
  label,
  onClick,
}: YearSelectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-24 p-2 text-black border border-gray-300 rounded-md"
    >
      {label}
    </button>
  );
}
