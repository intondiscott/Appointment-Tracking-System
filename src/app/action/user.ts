"use server";

import { error } from "console";
import connectMongoDB from "../Database/connectDB";
import User from "../Models/users";
import { redirect } from "next/navigation";

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
  await User.create({ firstName, lastName, email, password });
  console.log("user created");
  redirect("/Login");
};

export { Register };
