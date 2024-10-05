import { io } from "socket.io-client";
import { ChatScreen } from "./views/ChatScreen";
import { MessageScreen } from "./views/MessageScreen";

const socket = io(`http://localhost:3005`);
export const App = () => {
  return (
    <div className="flex ">
      <h1>App - ChatConvert</h1>
      <MessageScreen />
      <ChatScreen />
    
    </div>
  )
}
