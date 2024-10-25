"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { hash } from "bcryptjs";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

import connectMongoDB from "@/app/Database/connectDB";
import User from "@/app/Models/users";
import { Card } from "@/components/ui/card";
import {
  AddClientDetails,
  AddClientServiceDetails,
  AddClientServiceForm,
  DeleteClientDetails,
  EditClientDetails,
} from "@/app/action/client";
import { Client } from "@/app/Models/clients";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function ClientServiceForm(props: any) {
  // ...

  const formSchema = z.object({
    accID: z
      .string({ required_error: "id is required" })
      .min(1, "id is required"),
    typeOfService: z
      .string({ required_error: "service is required" })
      .min(5, "service is required"),
  });

  const formStuff = async () => {
    const res = await fetch(
      "http://localhost:3000/api/accounts/client-services/" +
        props.params["editClient"],
      {
        next: { revalidate: 0 },
      }
    );
    const data = await res.json();
    return { ...data };
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: async () => formStuff(),
  });

  return (
    <Card className="m-auto mt-24 w-[60%] p-6 pt-0 bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit(onSubmit)}
          action={AddClientServiceDetails}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="accID"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-black">accID</FormLabel>
                <FormControl>
                  <Input
                    placeholder="accID"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="typeOfService"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-black">Type of Service</FormLabel>
                <FormControl>
                  <Input
                    placeholder="service type"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex w-full text-2xl font-black"
          >
            Submit Service
          </Button>
        </form>
      </Form>
    </Card>
  );
}
