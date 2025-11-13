type AuthLayoutProps = {
  readonly children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-y-hidden h-screen flex items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Kelola Data Guru dengan Mudah dan Efisien
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Sistem Aplikasi Manajemen Guru (SAMG) membantu sekolah dalam
            mengatur data guru, jadwal mengajar, absensi, dan laporan secara
            cepat serta terintegrasi.
          </p>
        </div>
        {/* form login or register start*/}
        {children}
        {/* form login or register end */}
      </div>
    </section>
  );
}
