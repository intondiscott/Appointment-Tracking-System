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
import { AddClientDetails, EditClientDetails } from "@/app/action/client";
import Client from "@/app/Models/clients";

export default function ClientForm(props: any) {
  // ...

  const formSchema = z.object({
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
    <Card className='m-auto mt-24 w-[40%] p-6 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit(onSubmit)}
          action={EditClientDetails}
          className='space-y-8'
        >
          <div className='ml-10 mr-10 flex justify-between'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='first name' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='last name' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='ml-10 mr-10 flex justify-between'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='example@email.com' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder='phone number' type='phone' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='ml-10 mr-10 flex justify-between'>
            <FormField
              control={form.control}
              name='street'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input placeholder='street' type='text' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='town'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town</FormLabel>
                  <FormControl>
                    <Input placeholder='town' type='text' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='ml-10 mr-10 flex justify-between'>
            <FormField
              control={form.control}
              name='state'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder='state' type='text' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='zip'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip</FormLabel>
                  <FormControl>
                    <Input placeholder='zip' type='text' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='ml-10 mr-10 flex justify-between'>
            <FormField
              control={form.control}
              name='bill'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bill</FormLabel>
                  <FormControl>
                    <Input placeholder='bill' type='text' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='paidDate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Paid Date</FormLabel>
                  <FormControl>
                    <Input placeholder='street' type='date' {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type='submit' className='w-full'>
            Update Client
          </Button>
        </form>
      </Form>
    </Card>
  );
}
