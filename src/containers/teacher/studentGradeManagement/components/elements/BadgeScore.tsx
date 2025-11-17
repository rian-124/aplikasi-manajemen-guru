type BadgeScoreProps = {
  score: number;
};

export default function BadgeScore({ score }: BadgeScoreProps) {
  return (
    <div className="w-14 text-center rounded-full border border-blue-500 bg-blue-500/20">
      <h3>{score}</h3>
    </div>
  );
}
