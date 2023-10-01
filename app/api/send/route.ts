import { EmailTemplate } from "@/components/email/email";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

type formData = {
  name: string;
  subject: string;
  message: string;
  email: string;
};
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, subject, message, email }: formData = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["manshuld7@gmail.com"],
      subject: subject,
      react: EmailTemplate({
        name: name,
        subject: subject,
        message: message,
        email: email,
      }) as ReactElement,
    });

    return NextResponse.json({ Status: "ok", data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
