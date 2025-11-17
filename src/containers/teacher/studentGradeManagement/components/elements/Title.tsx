type TitleProps = {
  label: string;
};

export default function Title({ label }: TitleProps) {
  return <h1 className="text-2xl font-semibold">{label}</h1>;
}
