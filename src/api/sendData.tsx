import axios from "axios";
import { DataChatInterface } from "../interfaces/chatStore.interface";

const BACKEND_URL = import.meta.env.VITE_URL_BAKCEND;
const API_KEY = import.meta.env.VITE_KEY_BACKEND;

export const sendData = async (data: DataChatInterface) => {
  const result = await axios.post(`${BACKEND_URL}`, data, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  return result.data.result;
};
