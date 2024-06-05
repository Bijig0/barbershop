"use server";
import { Resend } from "resend";
import EmailTemplate from "./EmailTemplate";

const resend = new Resend("re_faCnmbUg_4R8UCgt6TchFbAGeeNbSvin4");

const sendEmail = async (inputs: any) => {
  const asString = JSON.stringify(inputs);

  console.log(asString);

  const result = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["bradysuryasie@gmail.com"],
    subject: "TaperAU",
    react: EmailTemplate({
      content: asString,
    }),
  });

  return result;
};

export default sendEmail;
