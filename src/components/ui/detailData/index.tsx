type DetailItem = {
  label: string;
  value: string | number;
};

type DetailDataProps = {
  title: string;
  leftData: DetailItem[];
  rightData: DetailItem[];
};

export function DetailData({ title, leftData, rightData }: DetailDataProps) {
  return (
    <div className="w-full">
      <div className="text-2xl font-bold mb-4">
        <h1>{title}</h1>
      </div>
      <div className="w-full border-t-4 border-blue-200/50 rounded-md py-5 px-10 shadow shadow-lg">
        <div className="bg-blue-50 border-l-4 border-blue-300 p-6 rounded-md grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {/* Kolom Kiri */}
          <div className="space-y-3">
            {leftData.map((item) => (
              <div key={item.label} className="flex justify-between">
                <p className="font-semibold text-blue-600">{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          {/* Kolom Kanan */}
          <div className="space-y-3">
            {rightData.map((item) => (
              <div key={item.label} className="flex justify-between">
                <p className="font-semibold text-blue-600">{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
