"use client";
import React from "react";
import FormC from "./FormC";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGenerationStore } from "../store/Store";

export default function Contact() {
  const language = useGenerationStore().language;
  return (
    <div
      className="lg:p-24 p-12  lg:text-base text-sm flex flex-col gap-9"
      id="Contact"
    >
      <p>
        {language === "en"
          ? "Contact me using your default email app by clicking"
          : "デフォルトのメールアプリをクリックして、お問い合わせください。"}
        <Link
          href="mailto:manshud7@gmail.com"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "lg:text-base text-sm mr-2 p-0"
          )}
          target="_top"
        >
          here
        </Link>
        {language === "en"
          ? "Or Contact me using the form Below"
          : "または、以下のフォームを使用してお問い合わせください"}
      </p>
      <FormC />
    </div>
  );
}
