"use client";

import { links } from "@/_mocks/links";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface ListNavProps {
  onClose: () => void;
}

export default function ListNav({ onClose }: ListNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(
      nav,
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    return () => {
      gsap.to(nav, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-0 z-99999 w-full h-full bg-white p-5 space-y-10"
    >
      <button
        onClick={onClose}
        className="p-1 bg-black shadow-2xl inline-block rounded-full"
      >
        <Image
          src={"/icons/closeButton.svg"}
          alt="closeButton"
          width={30}
          height={30}
        />
      </button>
      <div className="flex items-center">
        <div>
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={70}
            height={70}
            className="object-cover"
          />
        </div>
        <div className="text-xs">
          <p className="text-gray-500">SIS Akademik</p>
          <p className="text-xl font-semibold">SMAN One Championship</p>
        </div>
      </div>
      <div className="flex flex-col text-xs overflow-auto">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`p-5 border-b hover:text-black hover:bg-gray-200  rounded-lg ${
              pathname === link.href
                ? "text-black bg-gray-200"
                : "text-gray-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
