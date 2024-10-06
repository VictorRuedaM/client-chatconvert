import { DataChatInterface } from "../interfaces/chatStore.interface"
import colFlag from '../assets/FlagofColombia.ico';
import usaFlag from '../assets/UnitedStatesflag.ico';

export const ListMessage  = ({base, target, amount, result, date, from}: DataChatInterface) => {
  
  return (
    <>
      <div className={from?.length ? 'bg-green-100 text-gray-600 my-2 p-2 table text-sm rounded-md w-[300px] ' 
        : 'bg-blue-100  text-gray-600 my-2 p-2 table text-sm rounded-md w-[300px] ml-auto'}>
          <p className="py-1">Moneda: {base} {base !== 'USD' ? <img className="h-4 w-4 inline-block" src={colFlag} alt="Flag" /> : <img className="h-4 w-4 inline-block" src={usaFlag} alt="Flag" />}</p>
          <p className="py-1">Moneda de cambio: {target} {target !== 'USD' ? <img className="h-4 w-4 inline-block" src={colFlag} alt="Flag" /> : <img className="h-4 w-4 inline-block" src={usaFlag} alt="Flag" />}</p>
          <p className="py-1">Monto a cambiar: <strong>$ {amount}</strong></p>
          <p className="py-1">Monto convertido: <strong>$ {result}</strong></p>
          <p className="py-1">Fecha de la transacción: {date}</p>
      </div>
    </>
  )
}
