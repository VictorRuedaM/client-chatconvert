import {create} from 'zustand';
import { ChatStoreInterface, DataChatInterface } from '../interfaces/chatStore.interface';


export const useChatStore = create<ChatStoreInterface>((set) => {
  return({
    chats: [],
    saveChat: (data: DataChatInterface) => set(state => ({
      chats: [...state.chats, data]
    }))
  })
})