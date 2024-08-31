import { auth } from "@/auth";
import { Session } from "next-auth";
import Link from "next/link";
import User from "./Models/users";
import { LogOut } from "./action/user";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      {session ? <h1>{session?.user?.email}</h1> : <h1>Not logged In</h1>}

      {session && (
        <form action={LogOut}>
          <Button type='submit'>Log Out</Button>
        </form>
      )}
    </div>
  );
}
