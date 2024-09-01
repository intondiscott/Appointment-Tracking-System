import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { GoogleSignin, login, GitHubSignin, CC } from "@/app/action/user";

import { redirect } from "next/navigation";

import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getSession } from "../../../lib/getSession";

const Login = async () => {
  //return session;
  const session = await getSession();
  if (session) redirect("/");
  return (
    <Card className='m-auto mt-24 w-[30%] p-6 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <form action={login} className='space-y-8'>
        <Label>Email</Label>

        <Input name='email' placeholder='example@email.com' />

        <Label>Password</Label>

        <Input name='password' placeholder='password' type='password' />
        <div className=''>
          <Button type='submit' className='m-2 w-full'>
            Login
          </Button>
          <Button className='m-2 w-full'>
            <Link href={"/Register"}>Register</Link>
          </Button>
        </div>
      </form>

      {
        <form action={GoogleSignin} className='flex content-center'>
          <button type='submit' className='flex items-center'>
            <Image
              className='rounded-full'
              src='/assets/Google.jpg'
              alt='alt'
              width={40}
              height={40}
            />
            Sign in to Google
          </button>
        </form>
      }
    </Card>
  );
};
export default Login;
