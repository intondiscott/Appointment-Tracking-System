import { auth } from "@/auth";
import { Session } from "next-auth";
import Link from "next/link";
import User from "./Models/users";
import { LogOut } from "./action/user";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { checkSession } from "./(Auth)/checkSession";
export default async function HomePage() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div className=' rounded-full  font-bold'>
          <h1>{session.user?.name}</h1>
          <Image
            className='rounded-full'
            src={`/assets/${session.user?.image}`}
            alt='alt'
            width={60}
            height={60}
          />
        </div>
      ) : (
        <h1>Not logged In</h1>
      )}
    </div>
  );
}
