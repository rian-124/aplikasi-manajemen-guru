import { useEffect, useState } from "react";

export type SubjectFormProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rowData: {
    name?: string;
    code?: string;
    status?: string;
  } | null;
};

export default function SubjectForm({
  setIsModalOpen,
  rowData,
}: SubjectFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    status: "",
  });

  useEffect(() => {
    if (rowData) {
      setFormData({
        name: rowData.name || "",
        code: rowData.code || "",
        status: rowData.status || "",
      });
    }
  }, [rowData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
      <div>
        <h5 className="mb-2 font-semibold text-gray-800 modal-title text-theme-xl dark:text-white/90 lg:text-2xl">
          {"Edit data Mata Pelajaran"}
        </h5>
      </div>
      <form className="mt-8">
        <div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Name
            </label>
            <input
              id="event-title"
              name="name"
              type="text"
              onChange={handleChange}
              value={formData.name}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
          </div>
        </div>
        <div className="mt-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Code
            </label>
            <input
              id="event-title"
              type="text"
              name="code"
              onChange={handleChange}
              value={formData.code}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
          </div>
        </div>
        <div className="mt-6">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Status
            </label>
            <input
              id="event-title"
              type="text"
              name="status"
              onChange={handleChange}
              value={formData.status}
              className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            />
          </div>
        </div>
      </form>
      <div className="flex items-center gap-3 mt-6 modal-footer sm:justify-end">
        <button
          onClick={() => setIsModalOpen(false)}
          type="button"
          className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
        >
          {"Tambah Data"}
        </button>
      </div>
    </div>
  );
}
