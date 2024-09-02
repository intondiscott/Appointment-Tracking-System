"use server";
import { redirect } from "next/navigation";
import connectMongoDB from "../Database/connectDB";
import Client from "../Models/clients";

const EditClientDetails = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const street = formData.get("street") as string;
  const town = formData.get("town") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const bill = formData.get("bill") as string;
  const paidDate = formData.get("paidDate") as string;
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  await Client.updateOne({
    firstName,
    lastName,
    street,
    town,
    state,
    zip,
    phoneNumber,
    email,
    created: new Date(),
    bill,
    paidDate,
  });
  console.log("client updated");
  redirect("/clients");
};

const AddClientDetails = async (formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const street = formData.get("street") as string;
  const town = formData.get("town") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const bill = formData.get("bill") as string;
  const paidDate = formData.get("paidDate") as string;
  console.log(firstName);
  console.log(lastName);
  console.log(email);

  if (
    !firstName ||
    !lastName ||
    !email ||
    !street ||
    !town ||
    !zip ||
    !phoneNumber ||
    !state ||
    !paidDate ||
    !bill
  )
    throw new Error("please fill in all fields.");

  await connectMongoDB();
  const existingClient = await Client.findOne({ email });
  if (existingClient) throw new Error("Client already exists.");

  await Client.create({
    firstName,
    lastName,
    street,
    town,
    state,
    zip,
    phoneNumber,
    email,
    created: new Date(),
    bill,
    paidDate,
  });
  console.log("client created");
  redirect("/clients");
};
export { AddClientDetails, EditClientDetails };
