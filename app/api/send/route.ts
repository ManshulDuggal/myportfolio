import { EmailTemplate } from "@/components/email/email";
import { NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";


interface formData {
  name: string;
  subject: string;
  message: string;
  email: string;
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ email, message, name, subject }: formData) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "manshuld7@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
