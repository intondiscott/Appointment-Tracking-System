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
  DeleteClientDetails,
  EditClientDetails,
} from "@/app/action/client";
import Client from "@/app/Models/clients";
import { Trash2 } from "lucide-react";

export default function ClientForm(props: any) {
  // ...

  const formSchema = z.object({
    accID: z
      .string({ required_error: "id is required" })
      .min(1, "id is required"),
    firstName: z
      .string({ required_error: "first name is required" })
      .min(1, "first name is required"),
    lastName: z
      .string({ required_error: "last name is required" })
      .min(1, "last name is required"),
    street: z.string().min(2, "Email is required"),
    town: z.string().min(2, "Email is required"),
    state: z.string().min(2, "Email is required"),
    zip: z.string().min(2, "Email is required"),
    phoneNumber: z.string().min(2, "Email is required"),
    email: z.string().min(2, "Email is required"),
    bill: z.string().min(2, "Email is required"),
    paidDate: z.string().min(2, "Email is required"),
  });

  const formStuff = async () => {
    const res = await fetch("http://localhost:3000/api/accounts/" + props.id);
    const data = await res.json();
    return { ...data };
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: async () => formStuff(),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.connectDB
    // ✅ This will be type-safe and validated.
    console.log(values.firstName);
    const { firstName } = values;
    console.log(firstName);
  }

  return (
    <Card className="m-auto mt-24 w-[60%] p-6 pt-0 bg-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Form {...form}>
        <form
          className="flex place-self-end mt-2"
          action={DeleteClientDetails}
        >
          <FormField
            control={form.control}
            name="accID"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="invisible"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-2xl font-black bg-red-600 mr-1"
          >
            <Trash2 />
          </Button>
        </form>
        <form
          //onSubmit={form.handleSubmit(onSubmit)}
          action={EditClientDetails}
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
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="first name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="last name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@email.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="phone number"
                      type="phone"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Street</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="street"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="town"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Town</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="town"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">State</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="state"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Zip</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="zip"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between">
            <FormField
              control={form.control}
              name="bill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Bill</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="bill"
                      type="text"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paidDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Paid Date</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="street"
                      type="date"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="flex w-full text-2xl font-black"
          >
            Update Client
          </Button>
        </form>
      </Form>
    </Card>
  );
}
