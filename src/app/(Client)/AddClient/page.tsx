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

import { Card } from "@/components/ui/card";
import { AddClientDetails } from "@/app/action/client";

export default function AddClient() {
  // ...

  const formSchema = z.object({
    accID: z
      .string({ required_error: "accID is required" })
      .min(1, "accID is required"),
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
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accID: "",
      firstName: "",
      lastName: "",
      street: "",
      town: "",
      state: "",
      zip: "",
      phoneNumber: "",
      email: "",
    },
  });

  return (
    <Card className="m-auto mt-24 w-[60%] p-6 bg-slate-200 border rounded-lg border-black shadow-lg shadow-black">
      <Form {...form}>
        <form
          //onSubmit={form.handleSubmit(onSubmit)}
          action={AddClientDetails}
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
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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

          <Button
            type="submit"
            className="w-full text-2xl font-black"
          >
            Add New Client
          </Button>
        </form>
      </Form>
    </Card>
  );
}
