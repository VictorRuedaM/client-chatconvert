
import { useChatStore } from "../store/chat.store";

export const MessageScreen = () => {

  
  const useChat = useChatStore((state) => state.chats);
  
  return (
    <div>
      {
        useChat.map(({base, target, amount, result, date, from}) => (

          <div key={result} className={from?.length ? 'bg-orange-400' : 'bg-lime-400'}>
            <p>{base}</p>
            <p>{target}</p>
            <p>{amount}</p>
            <p>{result}</p>
            <p>{date}</p>
          </div>
        ))
      }
    </div>
  )
}
