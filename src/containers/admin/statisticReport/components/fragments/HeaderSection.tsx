import DownloadButton from "../elements/DownloadButton";

type HeaderSectionProps = {
  title: string;
};

export default function HeaderSection({ title }: HeaderSectionProps) {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="text-xs flex items-center gap-5 text-blue-500">
        <DownloadButton>Unduh PDF</DownloadButton>
        <DownloadButton>Unduh Excel</DownloadButton>
      </div>
    </div>
  );
}
