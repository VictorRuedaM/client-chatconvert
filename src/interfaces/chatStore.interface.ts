export interface ChatStoreInterface {
  chats: DataChatInterface[];
  saveChat: (data: DataChatInterface) => void;
}

export interface DataChatInterface {
  base: string;
  target?: string;
  amount: string;
  result?: string;
  date?: string;
  from?: string;
}
