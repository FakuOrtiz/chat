import { create } from "zustand";

export interface IStore {
  nickname: string;
  messages: IMessage[];
  addMessage: (message: IMessage) => void;
  setNickname: (nickname: string) => void;
}

export interface IMessage {
  body: string;
  from: string;
  date: string;
}

export const useStore = create<IStore>()((set) => ({
  nickname: "",
  messages: [],
  addMessage: (msg: IMessage) =>
    set((state) => ({ messages: [...state.messages, msg] })),
  setNickname: (nickname: string) => set({ nickname }),
}));
