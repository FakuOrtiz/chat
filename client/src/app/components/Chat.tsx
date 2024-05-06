"use client";
import Send from "@/assets/Send";
import { IStore, useMessageStore } from "@/store";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Chat = () => {
  const addMessage = useMessageStore((state: IStore) => state.addMessage);
  const messages = useMessageStore((state: IStore) => state.messages);
  const [message, setMessage] = useState("");

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
    socket.emit("message", { body: message, from: "Facundo" });

    addMessage({ body: message, from: "Yo" });
    setMessage("");
  };

  return (
    <article className="max-w-md w-full flex fixed bottom-0 p-3">
      <form className="w-full flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-xl p-3 flex-1"
          placeholder="Escribí un mensaje..."
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-full bg-[#5731D7] w-12 h-12 p-1.5"
        >
          <Send />
        </button>
      </form>
    </article>
  );
};

export default Chat;
