"use client";

import { IStore, useMessageStore } from "@/store";

const myMessageStyles = "bg-slate-300 text-black self-end";
const otherMessageStyles = "bg-[#2C2542] text-white";

const Messages = () => {
  const messages = useMessageStore((state: IStore) => state.messages);

  return (
    <article className="flex h-full flex-col gap-3 p-4 overflow-y-auto mb-16">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex flex-col gap-0.5 w-max rounded-xl p-3 ${
            msg.from === "Yo" ? myMessageStyles : otherMessageStyles
          }`}
        >
          {msg.from !== "Yo" && <span className="font-bold">{"| " + msg.from}</span>}
          <p>{msg.body}</p>
        </div>
      ))}
    </article>
  );
};

export default Messages;
