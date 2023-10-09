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
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { boolean } from "zod";
import { useGenerationStore } from "../store/Store";
import Timeout from "./Timeout";
import { constrainedMemory, title } from "process";
import { toast } from "../ui/use-toast";

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
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function FormC() {
  const loading = useGenerationStore().isLoading;
  const setLoading = useGenerationStore().setIsloading;

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  async function onSubmit(data: AccountFormValues) {
    setLoading(true); // Step 2: Set loading state to true during form submission

    const requestBody = {
      email: data.email,
      message: data.message,
      name: data.name,
      subject: data.subject,
    };

    try {
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

      // Form submission successful
      toast({
        title: "form sbumitted successfully",
      });
      // You can use your own toast library or notification method here

      // Reset the form or perform any other necessary actions
      form.reset();
    } catch (error) {
      // Handle form submission error
      console.error("Form submission error:", error);
      toast({
        title: "error in form submission",
      });

      // Display an error message
    } finally {
      setLoading(false); // Step 3: Set loading state back to false
    }
  }

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

          <Button variant={"outline"} type="submit" disabled={loading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
