"use client";
import React from "react";
import FormC from "./FormC";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="p-24">
      <p>
        Contact me using you　
        <Button variant={"link"}>
          {" "}
          <a href="mailto:manshud7@gmail.com" target="_top">
            {" "}
            example@gmail.com
          </a>{" "}
        </Button>
        For inquiries or Contact me using the form Below
      </p>
      <FormC />
    </div>
  );
}
