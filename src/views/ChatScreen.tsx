import telegramIcon from "../assets/telegram-logo.ico";
import cashIcon from "../assets/cash.ico";
import arrow from "../assets/arrow.ico";

import { useFormChat } from "../hooks/useFormChat";

export const ChatScreen = () => {
  const {
    handleChooseCurrency,
    handleAmount,
    handleSubmit,
    base,
    target,
    amount,
    errors,
  } = useFormChat();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-teal-300 w-[800px] h-[200px] pt-10 rounded-md"
    >
      <div className="flex mt-2 p-3 w-[750px] items-center place-content-between  rounded-md ">
        <span className="pointer-events-none  sm:text-sm pr-1 flex items-center pl-3 font-bold">
          $
        </span>

        <input
          type="number"
          min={0}
          value={amount}
          onChange={handleAmount}
          placeholder="0.00"
          className={
            errors.amount
              ? " h-[35px]  w-[200px] rounded-md border-4 border-red-700 py-1 pl-3 pr-1 mr-3 bg-white focus:ring-red-700 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              : " h-[35px]  w-[200px] rounded-md border-0 py-1 pl-3 pr-1 mr-3 bg-white focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          }
        />
        <div className=" inset-y-0 right-0 flex items-center">
          <img
            className="h-6 w-6 inline-block mr-3"
            src={cashIcon}
            alt="Telegram Icon"
          />
          <select
            name={"base"}
            value={base}
            onChange={handleChooseCurrency}
            className={
              errors.base
                ? " h-[35px] rounded-md border-4 border-red-700 bg-white py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm"
                : " h-[35px]  rounded-md border-0 bg-white py-0 pl-2 pr-7 mr-3 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            }
          >
            <option value="">Mondea base</option>
            <option value="COP">COP</option>
            <option value="USD">USD</option>
          </select>

          <img
            className="h-4 w-4 pointer-events-none mr-3 flex items-center"
            src={arrow}
            alt="Arrow Icon"
          />

          <input
            type="text"
            placeholder={`Moneda de Cambio: ${target}`}
            className="h-[35px]  w-[200px] rounded-md border-0 py-1 pl-3 pr-1 mr-3 bg-white sm:text-sm sm:leading-6"
            disabled
          />
        </div>
      </div>
      <div className="flex  p-3  place-content-center ">
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          <img
            className="h-6 w-12 inline-block mr-3"
            src={telegramIcon}
            alt="Telegram Icon"
          />
          Enviar
        </button>
      </div>
    </form>
  );
};
