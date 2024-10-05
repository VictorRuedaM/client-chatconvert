import axios from "axios";
import { DataChatInterface } from "../interfaces/chatStore.interface";


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpva'

export const sendData = async (data: DataChatInterface) => {

  
  const result = await axios.post(`http://localhost:3002/telechat/api/v1`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }});
  return result.data.result  
  console.log(result.data.result)
}