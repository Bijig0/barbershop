"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");

  const sendEmail = async (inputs: any) => {
    const templateParams = {
      to_name: "Brady",
      from_name: "Tutoring",
      subject: "New TaperAU Person",
      message: `details: ${JSON.stringify(inputs)}`,
    };

    const serviceId = "service_010xydf";
    const templateName = "template_1dcm4rn";
    const publicKey = "Yd6r5t5etWEKD3GNh";
    return emailjs.send(serviceId, templateName, templateParams, publicKey);
  };
  const onClick = async (e) => {
    e.preventDefault();
    await sendEmail({ email });
    window.location.reload();
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
