"use client";

import Close from "@/assets/Close";
import { IStore, useStore } from "@/store";
import { useEffect, useState } from "react";

interface IProps {
  editNickname: boolean;
  setEditNickname: (editNickname: boolean) => void;
}

const ChangeNickname = ({ editNickname, setEditNickname }: IProps) => {
  const nickname = useStore((state: IStore) => state.nickname);
  const setNickname = useStore((state: IStore) => state.setNickname);
  const [newNickname, setNewNickname] = useState(nickname);

  useEffect(() => {
    setNewNickname(nickname);
  }, [nickname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) return;
    setNewNickname(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newNickname.length) return;

    setNickname(newNickname);

    localStorage.setItem("nickname", newNickname);

    handleClose();
  };

  const handleClose = () => {
    setEditNickname(!editNickname);
    setNewNickname(nickname);
  };

  return (
    <div
      className={`w-80 min-h-svh absolute top-0 bg-slate-400 rounded-l-3xl transition-all ${
        editNickname ? "right-0" : "right-[-20rem]"
      }`}
    >
      <div className="flex justify-end p-4">
        <Close
          width={33}
          height={33}
          className="stroke-[var(--secondary)] cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <form onSubmit={handleSubmit} className="p-4">
        <p className="text-gray-700 text-xs text-right mb-1">
          {newNickname.length}/15
        </p>
        <input
          type="text"
          name="nickname"
          value={newNickname}
          onChange={handleChange}
          placeholder="MansoNickname"
          className="rounded-xl p-3 w-full"
        />
        <button className="bg-[var(--primary)] w-full rounded-xl p-2 text-white mt-4">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default ChangeNickname;
