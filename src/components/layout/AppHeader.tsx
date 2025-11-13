"use client";

import Image from "next/image";
import AppNavbar from "./AppNavbar";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import NotificationDropdown from "../common/NotificationDropdown";
import UserDropdown from "../common/UserDropdown";
import { usePathname } from "next/navigation";

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!dropdownRef.current) return;

    if (isApplicationMenuOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isApplicationMenuOpen]);

  return (
    <header className={`bg-[#0D47A1] p-5 space-y-5 relative ${pathname === "/teacher/profile" ? "h-[150px]" : ""}`}>
      {pathname !== "/teacher/profile" && (
        <>
          <div className="flex justify-between items-center">
            <div className="md:flex md:justify-start flex items-center gap-2 text-white md:w-1/2 sm:w-full w-full justify-between md:text-start sm:text-center text-center">
              <div className="bg-white rounded-full md:inline-flex md:visible sm:hidden justify-center items-center overflow-hidden hidden">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={60}
                  height={60}
                  className="object-cover border"
                />
              </div>

              <button
                onClick={onMenuClick}
                className="border rounded-md border-gray-500 p-1 md:hidden sm:block block"
              >
                <Image
                  src={"/icons/hamburgerMenu.svg"}
                  alt="hamburgerMenu"
                  width={30}
                  height={30}
                />
              </button>

              <div>
                <h2 className="text-sky-500/50 md:text-sm sm:text-sm text-xs">
                  SIS Akademik
                </h2>
                <h1 className="font-semibold md:text-xl sm:text-sm">
                  SMAN Number one championship
                </h1>
              </div>

              {/* Tombol titik tiga */}
              <button
                onClick={toggleApplicationMenu}
                className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-[99999] hover:bg-gray-100 lg:hidden"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>

            {/* Bagian kanan untuk desktop */}
            <div className="md:w-1/2 md:flex sm:w-full w-full items-center justify-end gap-5 sm:hidden hidden">
              <NotificationDropdown />
              <UserDropdown />
            </div>
          </div>

          {/* Navbar desktop */}
          <div className="md:flex justify-center sm:hidden hidden">
            <AppNavbar />
          </div>

          {/* === Dropdown bawah untuk mobile & tablet === */}
          {isApplicationMenuOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-9999 left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 flex  justify-between gap-3 lg:hidden"
            >
              <NotificationDropdown />
              <UserDropdown />
            </div>
          )}
        </>
      )}
    </header>
  );
}
