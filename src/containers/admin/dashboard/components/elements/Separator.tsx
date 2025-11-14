type TitleProps = {
  label: string;
};

export default function Separator({ label }: TitleProps) {
  return (
    <div className="bg-gray-200 p-1 rounded-full flex justify-center">
      <div className="text-center p-1 bg-white rounded-full w-xl text-sm">
        <p>{label}</p>
      </div>
    </div>
  );
}
