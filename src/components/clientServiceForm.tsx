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
  DeleteClientDetails,
  DeleteService,
  EditClientDetails,
  EditClientServiceDetails,
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
    size: z
      .string({ required_error: "size is required" })
      .min(1, "size is required"),
    fuel: z
      .string({ required_error: "fuel is required" })
      .min(1, "fuel is required"),
    cooling: z
      .string({ required_error: "cooling info is required" })
      .min(1, "cooling info is required"),
    make: z
      .string({ required_error: "make is required" })
      .min(1, "make is required"),
    model: z
      .string({ required_error: "model is required" })
      .min(1, "model is required"),
    serialNum: z
      .string({ required_error: "serial number is required" })
      .min(1, "serial number is required"),
    engineNum: z
      .string({ required_error: "engine number is required" })
      .min(1, "engine number is required"),
    engineSerial: z
      .string({ required_error: "engine serial number is required" })
      .min(1, "engine serial number is required"),
    startUpDate: z
      .string({ required_error: "start up date is required" })
      .min(1, "start up date is required"),
    activationCode: z
      .string({ required_error: "activation code is required" })
      .min(1, "activation code is required"),
  });

  const formStuff = async () => {
    const res = await fetch(
      `${
        process.env.VERCEL_URL || "http://localhost:3000"
      }/api/accounts/client-services/${props.id}`,
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
    <Card className="m-auto mt-24 w-[60%] p-6 pt-0 bg-slate-200 border rounded-lg  dark:bg-gray-800 border-black shadow-lg shadow-black">
      <Form {...form}>
        <form
          className="flex place-self-end mt-2"
          action={DeleteService}
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
          action={EditClientServiceDetails}
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
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Size</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="size"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fuel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Fuel</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="fuel"
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
              name="cooling"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Cooling</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="cooling"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="make"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Make</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="make"
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
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Model #</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="model #"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serialNum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Serial #</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="serial #"
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
              name="engineNum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Engine #</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="engine #"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="engineSerial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Engine Serial</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="engine serial"
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
              name="startUpDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Start Up Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="start up date"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="activationCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-black">Activation Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="activation code"
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
            Update Service
          </Button>
        </form>
      </Form>
    </Card>
  );
}
