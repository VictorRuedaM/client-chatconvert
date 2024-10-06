import { useChatStore } from "../store/chat.store";

import { ListMessage } from "../components/ListMessage";

export const MessageScreen = () => {
  const useChat = useChatStore((state) => state.chats);

  return (
    <div className="w-[350px] md:w-[800px]  overflow-y-auto scrollbar-w-2  my-6  p-3">
      {useChat.map(({ base, target, amount, result, date, from }) => (
        <ListMessage
          key={result}
          base={base}
          target={target}
          amount={amount}
          result={result}
          date={date}
          from={from}
        />
      ))}
    </div>
  );
};
