type TitleProps = {
  label: string;
};

export default function Title({ label }: TitleProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl">{label}</h1>
      </div>
    </div>
  );
}
