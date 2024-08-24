import SignIn from "@/components/Sign-In-Out/sign-in";
import { SignOut } from "@/components/Sign-In-Out/sign-out";
import { auth } from "../(Auth)/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) redirect("/");
  return (
    <div>
      <SignIn />
    </div>
  );
}
