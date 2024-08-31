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
import { GoogleSignin, login, GitHubSignin } from "@/app/action/user";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import Google from "next-auth/providers/google";
import { ChromeIcon } from "lucide-react";
import { Goblin_One } from "next/font/google";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const Login = async () => {
  //return session;
  const session = await auth();
  if (session) redirect("/");
  return (
    <Card className='max-w-sm p-6 bg-slate-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <form action={login} className='space-y-8'>
        <Label>Email</Label>

        <Input name='email' placeholder='example@email.com' />

        <Label>Password</Label>

        <Input name='password' placeholder='password' type='password' />
        <div className=''>
          <Button type='submit' className='m-2'>
            Login
          </Button>
          <Button className='m-2'>
            <Link href={"/Register"}>Register</Link>
          </Button>
        </div>
      </form>

      {/*<form action={GoogleSignin}>
        <button type='submit'>
          <Image
            className='rounded-full'
            src='/assets/Google.jpg'
            alt='alt'
            width={40}
            height={40}
          />
          Sign in to Google
        </button>
      </form>*/}
    </Card>
  );
};
export default Login;
