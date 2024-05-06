import Chat from "./components/Chat";
import Messages from "./components/Messages";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col relative">
      <h1 className="text-3xl font-bold w-full text-center p-4 text-slate-300">MANSO CHAT</h1>
      <Messages />
      <Chat />
    </section>
  );
}
