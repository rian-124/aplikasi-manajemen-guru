"use client";

import { links } from "@/_mocks/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppNavbar() {
  const pathname = usePathname();

  return (
    <nav className="text-sm">
      <div className="space-x-5 flex">
        {links.map((link) => (
          <div key={link.name} className="flex flex-col items-center group">
            <Link
              key={link.name}
              href={link.href}
              className={`group-hover:text-white ${
                pathname === link.href ? "text-white" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
            <div
              className={`h-[2px] rounded-full mt-1 transition-all duration-300 ${
                pathname === link.href ? "bg-white opacity-100 w-5" : "opacity-80  w-0 bg-white group-hover:w-5"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </nav>
  );
}
