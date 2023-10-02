"use client";
import React from "react";
import FormC from "./FormC";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      className="lg:p-24 p-12  lg:text-base text-sm flex flex-col gap-9"
      id="Contact"
    >
      <p>
        Contact me using your default email app by clicking 　
        <Link
          href="mailto:manshud7@gmail.com"
          className="lg:text-base text-sm m-0 p-0"
          target="_top"
        >
          <span className="font-bold underline "> here </span>{" "}
        </Link>
        Contact me using the form Below
      </p>
      <FormC />
    </div>
  );
}
