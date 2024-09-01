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
import { Register } from "@/app/action/user";
import async from "../../page";
import connectMongoDB from "@/app/Database/connectDB";
import User from "@/app/Models/users";
import { Card } from "@/components/ui/card";

export default function SignUp() {
  // ...

  const formSchema = z.object({
    firstName: z
      .string({ required_error: "first name is required" })
      .min(1, "first name is required"),
    lastName: z
      .string({ required_error: "last name is required" })
      .min(1, "last name is required"),
    email: z.string().min(2, "Email is required"),
    image: z.string().min(4, "Please add image"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      image: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.connectDB
    // ✅ This will be type-safe and validated.
    console.log(values.firstName);
    const { firstName } = values;
    console.log(firstName);
  }

  return (
    <Card className='m-auto mt-24 w-[30%] p-6 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit(onSubmit)}
          action={Register}
          className='space-y-8'
        >
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
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='example@email.com' {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='image'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image string</FormLabel>
                <FormControl>
                  <Input placeholder='image' type='text' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='password' type='password' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Register
          </Button>
        </form>
      </Form>
    </Card>
  );
}
