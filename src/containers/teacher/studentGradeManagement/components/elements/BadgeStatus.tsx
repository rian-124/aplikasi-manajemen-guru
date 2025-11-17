type BadgeStatusProps = {
  remark: string;
  score: number;
};

export default function BadgeStatus({ remark, score }: BadgeStatusProps) {
  const isPass = score >= 70;

  return (
    <div
      className={`w-24 text-center rounded-full border ${
        isPass
          ? "text-green-500 border-green-500 bg-green-500/20"
          : "text-red-500 border-red-500 bg-red-500/20"
      }`}
    >
      <h3>{remark}</h3>
    </div>
  );
}
