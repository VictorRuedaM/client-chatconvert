import { useState } from "react"
import telegramIcon from '../assets/telegram-logo.ico';
import cashIcon from '../assets/cash.ico';

export const ChatScreen = () => {

  const [currency, setCurrency] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [errors, setErrors] = useState({
    currency: false,
    amount: false,
  })      

  const handleChooseCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = e.target.value;
    
    console.log(data)
    if(data !== 'moneda'){
      setCurrency(data);
      setErrors({...errors, ['currency']: false});
    }
    
  }

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    
    console.log(amount)
    
    setAmount(data);
    setErrors({...errors, ['amount']: false});

    
    console.log(data,'bbbb')

  }

  
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(amount === '0' || amount === '' || amount === undefined || currency === ''){
      console.log('ingrese un valor', errors, amount, currency)
      handleErrors();
    }else{
      console.log(amount)
      console.log('enviado....', amount, '---', currency)
      handleClean();
    }
  }
  
  const handleErrors = () => {
    console.log(amount,'uuuuu')
    if(amount == '0' || amount == '' || amount == undefined){
      setErrors({...errors, ['amount']: true})
    }
    if(currency === ''){
      setErrors({...errors, ['currency']: true})
    }
    console.log(errors)
  }

  const handleClean = () => {
    setCurrency('');
    setAmount('')
  }


  return (
  

    <form onSubmit={handleSubmit} className="bg-emerald-400">
      
      <div className="flex mt-2 p-3 w-[420px] items-center place-content-between  rounded-md ">
          <span className="pointer-events-none  sm:text-sm pr-1 flex items-center pl-3 font-bold">$</span>
        
        <input
          type="number" 
          min={0} 
          value={amount} 
          onChange={handleAmount}
          placeholder="0.00"
          className={errors.amount ? " h-[35px]  w-[200px] rounded-md border-4 border-red-700 py-1 pl-3 pr-1 mr-3 bg-white focus:ring-red-700 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6" : " h-[35px]  w-[200px] rounded-md border-0 py-1 pl-3 pr-1 mr-3 bg-white focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"}
        />
        <div className=" inset-y-0 right-0 flex items-center">
          
          <img className="h-6 w-6 inline-block mr-3"  src={cashIcon} alt="Telegram Icon" />
          <select
            value={currency} 
            onChange={handleChooseCurrency}
            className={errors.currency ? " h-[35px] rounded-md border-4 border-red-700 bg-white py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm" : " h-[35px]  rounded-md border-0 bg-white py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"}
          >
            <option value="">Mondea</option>
            <option value="COP" >COP</option>
            <option value="USD" >USD</option>
          </select>
        </div>
      </div>
      <div className="flex  p-3  place-content-center ">

        <button className="bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          <img className="h-6 w-6 inline-block mr-3"  src={telegramIcon} alt="Telegram Icon" />
          Enviar</button>
      </div>
      
    </form>
  )
}
