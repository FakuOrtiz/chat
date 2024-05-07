"use client";

import Close from "@/assets/Close";
import { useState } from "react";
import ChangeNickname from "./ChangeNickname";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Navbar = ({ open, setOpen }: IProps) => {
  const [editNickname, setEditNickname] = useState(false);
  return (
    <>
      <nav
        className={`w-80 min-h-svh absolute top-0 bg-slate-300 rounded-l-3xl transition-all ${
          open ? "right-0" : "right-[-20rem]"
        }`}
      >
        <div className="flex justify-end p-4">
          <Close
            width={33}
            height={33}
            className="stroke-[var(--primary)] cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul className="flex flex-col gap-4 p-4">
          <li
            className="cursor-pointer"
            onClick={() => setEditNickname(!editNickname)}
          >
            Cambiar nickname
          </li>
          <li className="flex items-center gap-2 justify-center uppercase">
            <hr className="flex-1 border-[var(--primary)]" />
            Otras apps
            <hr className="flex-1 border-[var(--primary)]" />
          </li>
          <li>
            <a href="https://chillpomodoro.vercel.app/" target="_blank">
              Pomodoro
            </a>
          </li>
        </ul>
        <p className="absolute bottom-0 w-full text-center p-4">
          Hecho por{" "}
          <a
            className="underline"
            href="https://linktr.ee/fakuortiz"
            target="_blank"
            title="Linktree de Facundo Ortiz"
          >
            Facundo Ortiz
          </a>
        </p>
      </nav>
      <ChangeNickname
        setEditNickname={setEditNickname}
        editNickname={editNickname}
      />
    </>
  );
};

export default Navbar;
