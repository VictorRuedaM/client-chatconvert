import { io } from "socket.io-client";
import { ChatScreen } from "./views/ChatScreen";
import { MessageScreen } from "./views/MessageScreen";
import { Header } from "./components/Header";

const SOCKETIO_URL = import.meta.env.VITE_SOCKET_IO_URL;

const socket = io(`${SOCKETIO_URL}`);

export const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-end pb-10 bg-slate-800">
      <Header />

      <MessageScreen />

      <ChatScreen />
    </div>
  );
};
