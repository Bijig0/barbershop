"use client";

import { useState } from "react";
import sendEmail from "./sendEmail";

const Input = () => {
  const [email, setEmail] = useState("");
  const onClick = async (e) => {
    e.preventDefault();
    await sendEmail({ email });
  };
  return (
    <>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="hi@taperau.com"
        className="w-full py-5 pl-5 text-2xl font-light text-gray-900 placeholder-gray-500 pr-36 lg:pr-44 rounded-xl"
      />
      <button
        type="submit"
        onClick={onClick}
        className="absolute px-4 text-xl font-semibold text-white transition duration-500 ease-in-out bg-gray-900 top-1 right-1 bottom-1 lg:px-10 rounded-xl hover:bg-red-500"
      >
        Notify me
      </button>
    </>
  );
};

export default Input;
