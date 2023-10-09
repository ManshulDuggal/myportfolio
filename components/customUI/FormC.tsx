import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const accountFormSchema = z.object({
  name: z
    .string({
      required_error: "Please type your Name",
    })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  subject: z.string({}),
  message: z
    .string({
      required_error: "Please type your  message.",
    })
    .min(2, {
      message: "message must be at least 2 characters.",
    })
    .max(250, {
      message: "message must not be longer than 250 characters.",
    }),
  email: z
    .string({ required_error: "Please select enter your email address" })
    .email("invalid email")
    .min(2, {
      message: "message must be at least 2 characters.",
    })
    .max(250, {
      message: "email must be valid",
    }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

async function onSubmit(data: AccountFormValues) {
  const requestBody = {
    email: data.email,
    message: data.message,
    name: data.name,
    subject: data.subject,
  };

  console.log(JSON.stringify(data));

  await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: requestBody.name,
      message: requestBody.message,
      subject: requestBody.subject,
      email: requestBody.email,
    }),
  });
}

export default function FormC() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="text-sm  lg:text-base ">
                <FormLabel className="text-sm lg:text-base">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="placeholder:text-xs lg:placeholder:text-base"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs lg:text-base">
                  This is the name that will be displayed on your profile and in
                  emails.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* MESSAGE AND SUBJECT */}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md lg:text-base">message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about the content of your message"
                    className="placeholder:text-xs lg:placeholder:text-base resize-y"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the message that will be sent
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm lg:text-base">Subject</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-xs lg:placeholder:text-base "
                    placeholder="Type the content of message here"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the subject that will be sent
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm lg:text-base">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a Email "
                    {...field}
                    className="placeholder:text-xs lg:placeholder:text-base "
                  />
                </FormControl>
                <FormDescription>
                  This is the emali used for sending
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant={"outline"} size={"lg"} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
