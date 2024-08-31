"use server";

import { error } from "console";
import connectMongoDB from "../Database/connectDB";
import User from "../Models/users";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn, signOut } from "@/auth";

const providerSignin = async () => {
  await signIn("github", { callbackUrl: "/" });
};

const LogOut = async () => {
  await signOut();
};

const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName");

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const caughtError = error as CredentialsSignin;
    return caughtError.cause;
  }
  redirect("/");
};

const Register = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

  if (!firstName || !lastName || !email || !password)
    throw new Error("please fill in all fields.");

  await connectMongoDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists.");

  const hashPassword = await hash(password, 12);

  await User.create({ firstName, lastName, email, password: hashPassword });
  console.log("user created");
  redirect("/Login");
};

export { Register, login, providerSignin, LogOut };
