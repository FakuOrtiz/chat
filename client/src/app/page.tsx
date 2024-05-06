import Chat from "./components/Chat";
import Messages from "./components/Messages";
import ModalNickname from "./components/ModalNickname";

export default function Home() {
  return (
    <section className="w-full h-full flex flex-col relative">
      <ModalNickname />
      <Messages />
      <Chat />
    </section>
  );
}
