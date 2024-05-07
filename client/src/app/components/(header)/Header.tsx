"use client";

import Settings from "@/assets/Settings";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed p-4 flex items-center justify-between w-full max-w-md z-10 overflow-x-clip">
      <h1 className="text-3xl font-bold w-full text-slate-300">MANSO CHAT</h1>
      <div
        className="flex items-center justify-center rounded-full w-11 h-11 p-1.5 cursor-pointer bg-black/10"
        onClick={() => setOpen(!open)}
      >
        <Settings width={33} height={33} className="stroke-slate-300" />
      </div>
      <Navbar open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
