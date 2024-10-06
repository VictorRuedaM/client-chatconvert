import React, { useEffect, useState } from "react";
import { sendData } from "../api/sendData";
import { useChatStore } from "../store/chat.store";

const SOCKETIO_URL = import.meta.env.VITE_SOCKET_IO_URL;

import { io } from "socket.io-client";

const socket = io(`${SOCKETIO_URL}`);

export const useFormChat = () => {
  const saveData = useChatStore((state) => state.saveChat);

  const [base, setBase] = useState<string>("");
  const [target, setTarget] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [errors, setErrors] = useState({
    base: false,
    target: false,
    amount: false,
  });

  useEffect(() => {
    socket.on("chat", (data) => {
      saveData(data);
    });

    return () => {
      socket.off("chat");
    };
  }, []);

  const handleChooseCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = e.target.value;
    const name = e.target.name;

    if (data !== "moneda") {
      if (name === "base") {
        if (data === "COP") {
          setBase(data);
          setTarget("USD");
          setErrors({ ...errors, ["base"]: false });
        } else {
          setBase(data);
          setTarget("COP");
          setErrors({ ...errors, ["base"]: false });
        }
      }
    }
    if (data === "") setTarget("");
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;

    setAmount(data);
    setErrors({ ...errors, ["amount"]: false });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      amount === "0" ||
      amount === "" ||
      amount === undefined ||
      base === "" ||
      target === ""
    ) {
      handleErrors();
    } else {
      const data = await sendData({
        base: base,
        target: target,
        amount: amount,
      });

      socket.emit("chat", data);
      saveData(data);
      handleClean();
    }
  };

  const handleErrors = () => {
    if (amount == "0" || amount == "" || amount == undefined) {
      setErrors({ ...errors, ["amount"]: true });
    }
    if (base === "" || target === "") {
      setErrors({ ...errors, ["base"]: true });
    }
  };

  const handleClean = () => {
    setBase("");
    setTarget("");
    setAmount("");
  };
  return {
    //metodos
    handleChooseCurrency,
    handleAmount,
    handleSubmit,

    //propiedades
    base,
    target,
    amount,
    errors,
  };
};
