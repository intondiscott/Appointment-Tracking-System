import { auth } from "@/auth";
import { Session } from "next-auth";
import Link from "next/link";
import User from "./Models/users";
import { LogOut } from "./action/user";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

import { getSession } from "../lib/getSession";
import connectMongoDB from "./Database/connectDB";
export default async function HomePage() {
  await connectMongoDB();
  const session = await getSession();
  const email = session?.user?.email as string;
  const user = await User.findOne({ email });

  return (
    <div>
      {session ? (
        <div className=' rounded-full  font-bold'>
          <h1>Welcome {user.name},</h1>
          <Image
            src='/assets/companylogo.png'
            alt='alt'
            width={200}
            height={200}
          />
        </div>
      ) : (
        <h1>Not logged In</h1>
      )}
    </div>
  );
}
