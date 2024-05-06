import { create } from "zustand";

export interface IStore {
  messages: IMessage[];
  addMessage: (message: IMessage) => void;
}

export interface IMessage {
  body: string;
  from: string;
}

export const useMessageStore = create<IStore>()((set) => ({
  messages: [],
  addMessage: (msg: IMessage) =>
    set((state) => ({ messages: [...state.messages, msg] })),
}));
