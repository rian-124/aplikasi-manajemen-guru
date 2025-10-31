'use client'

import AppFooter from "@/components/layout/AppFooter";
import AppHeader from "@/components/layout/AppHeader";
import ListNav from "@/components/layout/ListNav";
import { useState } from "react";

export default function AppClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <AppHeader onMenuClick = { () => setIsNavOpen(true)} />
      <main className="overflow-hidden">{children}</main>
      { isNavOpen && <ListNav onClose = {() => setIsNavOpen(false)} /> }
      <AppFooter />
    </>
  );
}
