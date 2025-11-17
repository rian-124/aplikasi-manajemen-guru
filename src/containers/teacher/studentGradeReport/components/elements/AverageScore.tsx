type AverageScoreProps = {
  value: number;
};

export function AverageScore({ value }: AverageScoreProps) {
  return (
    <div className="p-5">
      <h1 className="text-xl">Rata-Rata Nilai</h1>
      <h4 className="text-4xl font-bold p-3">{value}</h4>
    </div>
  );
}
