"use client";
import Send from "@/assets/Send";
import { IStore, useStore } from "@/store";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Chat = () => {
  const addMessage = useStore((state: IStore) => state.addMessage);
  const messages = useStore((state: IStore) => state.messages);
  const [message, setMessage] = useState("");
  const nickname = useStore((state: IStore) => state.nickname);

  useEffect(() => {
    socket.on("message", (message) => {
      addMessage(message);
    });

    return () => {
      socket.off("message");
    };
  }, [messages, addMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message === "" || message.length > 140) return;

    const MSG_TIME = new Date().toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });

    socket.emit("message", {
      body: message.trim(),
      from: nickname,
      date: MSG_TIME,
    });

    addMessage({
      body: message.trim(),
      from: "CURRENT_USER_SENDER",
      date: MSG_TIME,
    });
    setMessage("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 140) return;
    setMessage(e.target.value);
  };

  return (
    <article className="max-w-md w-full flex fixed bottom-0 p-3">
      <form className="w-full flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={message}
          onChange={handleChange}
          autoComplete="off"
          className="rounded-xl p-3 flex-1 relative"
          placeholder="Escribí un mensaje..."
        />
        <p className="absolute right-20 top-[-5px] text-gray-400 text-xs">
          {message.length}/140
        </p>
        <button
          type="submit"
          className="flex justify-center items-center rounded-full bg-[var(--primary)] w-12 h-12 p-1.5"
        >
          <Send width={44} height={44} />
        </button>
      </form>
    </article>
  );
};

export default Chat;
