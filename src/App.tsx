import { io } from "socket.io-client";
import { ChatScreen } from "./views/ChatScreen";
import { MessageScreen } from "./views/MessageScreen";
import { Header } from "./components/Header";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const socket = io(`http://localhost:3005`);

export const App = () => {
  return (
    

    <div className="h-screen flex flex-col items-center justify-end pb-10 bg-slate-800">
          <Header />
          
          <MessageScreen />
          
          <ChatScreen />
    
    </div>
    
    
  )
}
