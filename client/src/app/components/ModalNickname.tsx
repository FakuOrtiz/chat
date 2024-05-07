"use client";

import { IStore, useStore } from "@/store";
import { useEffect, useState } from "react";

const ModalNickname = () => {
  const [newNickname, setNewNickname] = useState("");
  const [open, setOpen] = useState(false);
  const setNickname = useStore((state: IStore) => state.setNickname);

  useEffect(() => {
    const cachedNickname = localStorage.getItem("nickname");
    if (cachedNickname) {
      setNickname(cachedNickname);
    } else {
      setOpen(true);
    }
  }, [setNickname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) return;
    setNewNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newNickname.length) return;

    setNickname(newNickname);
    localStorage.setItem("nickname", newNickname);
    setOpen(false);
  };

  return (
    <>
      {open && (
        <article className="absolute h-svh w-full flex justify-center items-center bg-black bg-opacity-50 z-20">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-4 max-w-[300px] bg-slate-300 rounded-xl"
          >
            <h2 className="font-bold">¡Elegí un nombre de usuario!</h2>
            <div>
              <p className="text-gray-400 text-xs text-right mb-1">
                {newNickname.length}/15
              </p>
              <input
                type="text"
                name="nickname"
                placeholder="MansoNickname"
                className="rounded-xl p-3 w-full"
                value={newNickname}
                onChange={handleChange}
              />
            </div>
            <button className="bg-[var(--primary)] rounded-xl p-2 text-white">
              Entrar
            </button>
          </form>
        </article>
      )}
    </>
  );
};

export default ModalNickname;
