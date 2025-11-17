type CardContainerProps = {
  readonly children: React.ReactNode;
};

export default function CardContainer({ children } : CardContainerProps) {
  return (
    <div className="w-[23rem] border border-blue-500 rounded-xl p-3 space-y-2">
      {children}
    </div>
  );
}
