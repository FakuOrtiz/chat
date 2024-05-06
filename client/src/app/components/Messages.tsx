"use client";

import { IStore, useStore } from "@/store";

const myMessageStyles = "bg-slate-300 text-black self-end";
const otherMessageStyles = "bg-[var(--secondary)] text-white";

const Messages = () => {
  const messages = useStore((state: IStore) => state.messages);

  return (
    <article className="flex h-full flex-col gap-3 p-4 overflow-y-auto mb-[78px]">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex flex-col gap-0.5 w-max rounded-xl p-3 max-w-[60%] break-words ${
            msg.from === "CURRENT_USER_SENDER"
              ? myMessageStyles
              : otherMessageStyles
          }`}
        >
          {msg.from !== "CURRENT_USER_SENDER" && (
            <span className="font-bold text-xs">{msg.from}</span>
          )}
          <p>{msg.body}</p>
          <p
            className={`text-xs text-slate-500 ${
              msg.from === "CURRENT_USER_SENDER" ? "text-right" : "text-left"
            }`}
          >
            {msg.date}
          </p>
        </div>
      ))}
    </article>
  );
};

export default Messages;
