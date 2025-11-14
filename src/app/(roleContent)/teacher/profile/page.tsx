import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="absolute left-1/2 -translate-y-1/5  -translate-x-1/2">
      <div className="border w-[800px] p-5 rounded-md bg-white space-y-5">
        <h1 className="text-2xl">Profil Guru</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <Image
              src={"/images/user/user-01.jpg"}
              alt="profil"
              width={100}
              height={100}
              className="border inline-flex rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold">Budi Santoso</h1>
              <p>Nip 0219201921</p>
              <p>budisantonso@gmail.com</p>
            </div>
          </div>
          <div className="space-x-5">
            <Button>Edit profil</Button>
            <Link
              href={"/teacher/dashboard"}
              className="p-3 bg-black text-white rounded-lg text-sm"
            >
              Kembali
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-2xl">Mata Pelajaran</h1>
          <div className="text-sm">
            <p>Matematika - X IPA 1</p>
            <p>Fisika - X IPA 2</p>
          </div>
        </div>
        <div>
          <form action="" className="space-y-3">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="border block rounded-md w-full p-2"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex justify-between gap-3">
              <div className="w-1/2">
                <label htmlFor="email">Nomor Handphone</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="border block rounded-md w-full p-2"
                  placeholder="+62 08918281929"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="handphone">Foto Profil</label>
                <input
                  id="foto_profil"
                  name="foto_profil"
                  type="file"
                  className="border block rounded-md w-full p-2 file:bg-blue-500 file:p-2 file:rounded-md file:text-white file:cursor-pointer text-xs"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <Button className="w-full">Simpan</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
