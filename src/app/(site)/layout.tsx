import { Navbar } from "@/components/shared";
import { ModeToggle } from "@/utils/mode-toggle";
import React from "react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-Inter relative w-full">
      <Navbar />
      {children}
      <div className="fixed top-1/2 ">
        <ModeToggle />
      </div>
    </div>
  );
}
