"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import * as React from "react";
import { Check, CheckCircle } from "lucide-react";
export default function Contact() {
  const router = useRouter();
  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "707bc08d-6767-4f45-b4b8-eeae0596085e",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
    alert("submitted");

    router.push("/");
  }

  return (
    <>
      <Card className="bg-slate-300 w-[550px] m-24 border-black p-4 shadow-lg shadow-black">
        <div className="m-10 flex flex-col justify-between">
          <h1 className="text-3xl font-black">
            Having Issues With Our Website?
          </h1>
          <p>
            Please send us a description of the issue you are having and we will
            get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <label
              htmlFor="name"
              className="mr-8 font-black"
            >
              Name
            </label>
            <input
              className="rounded border-2 border-slate-500"
              type="text"
              name="name"
              required
              placeholder="Your name"
            />
          </div>
          <div className="p-2">
            <label
              htmlFor="email"
              className="mr-9 font-black"
            >
              Email
            </label>
            <input
              className="rounded border-2 border-slate-500"
              type="email"
              name="email"
              required
              placeholder="email@example.com"
            />
          </div>
          <div className="flex p-2">
            <label
              htmlFor="message"
              className="mr-2 font-black"
            >
              Message
            </label>
            <textarea
              className="rounded border-2 border-slate-500"
              name="message"
              required
              rows={10}
              cols={100}
              placeholder="Enter Message"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="m-2"
            >
              Submit Form <CheckCircle className="ml-2" />
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
