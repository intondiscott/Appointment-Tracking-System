import LoggedIn from "./Login/handleLogin";

import { auth } from "./(Auth)/auth";
import { SignOut } from "@/components/Sign-In-Out/sign-out";
import SignIn from "../components/Sign-In-Out/sign-in";
import Link from "next/link";

export default async function HomePage() {
  let user: string;
  const session = await auth();
  console.log(session);

  return (
    <div>
      <h1 className='text-9xl'>{session?.user?.name}</h1>
      <img className=' border-rose-950' src={session?.user?.image} />
      {session?.user ? <SignOut /> : <Link href='Login'>Sign In</Link>}
    </div>
  );
}
