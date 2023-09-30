import { EmailTemplate } from "@/components/email/email";
import { NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "manshuld7@gmail.com",
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
