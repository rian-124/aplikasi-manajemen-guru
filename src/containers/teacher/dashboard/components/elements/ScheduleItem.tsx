type ScheduleItemProps = {
  className: string;
  subject: string;
  time: string;
};

export default function ScheduleItem({
  className,
  subject,
  time,
}: ScheduleItemProps) {
  return (
    <div className="flex justify-between items-center p-5 rounded-md border">
      <div>
        <h1>{className}</h1>
        <h3 className="text-xs text-gray-300">{subject}</h3>
      </div>
      <div>
        <h3>{time}</h3>
      </div>
    </div>
  );
}
