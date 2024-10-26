"use server";
import { redirect } from "next/navigation";
import connectMongoDB from "../Database/connectDB";
import { Client, ClientService } from "../Models/clients";

const DeleteClientDetails = async (formData: FormData) => {
  const accID = formData.get("accID") as string;

  await Client.findOneAndDelete({ accID });
  console.log("props", formData);
  redirect("/clients");
};

const EditClientDetails = async (formData: FormData) => {
  const accID = formData.get("accID") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const street = formData.get("street") as string;
  const town = formData.get("town") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;
  const phoneNumber = formData.get("phoneNumber") as string;

  console.log(firstName);
  console.log(lastName);
  console.log("formData: ", formData);
  await Client.findOneAndUpdate(
    { accID },
    {
      firstName,
      lastName,
      street,
      town,
      state,
      zip,
      phoneNumber,
      email,
    }
  );
  console.log("client updated");
  redirect("/clients");
};

const DeleteService = async (formData: FormData) => {
  const accID = formData.get("accID") as string;

  await ClientService.findOneAndDelete({ accID });
  console.log("props", formData);
  redirect("/ShowClientServices");
};

const AddClientServiceDetails = async (formData: FormData) => {
  const accID = formData.get("accID") as string;
  const size = formData.get("size") as string;
  const fuel = formData.get("fuel") as string;
  const cooling = formData.get("cooling") as string;
  const make = formData.get("make") as string;
  const model = formData.get("model") as string;
  const serialNum = formData.get("serialNum") as string;
  const engineNum = formData.get("engineNum") as string;
  const engineSerial = formData.get("engineSerial") as string;
  const startUpDate = formData.get("startUpDate") as string;
  const activationCode = formData.get("activationCode") as string;
  console.log(accID);
  await connectMongoDB();
  const clientFound = await Client.find({ accID });
  const serviceFound = (await ClientService.find({ accID })) || false;
  console.log("Finding: " + serviceFound);
  if (!serviceFound[0] && clientFound[0])
    await ClientService.create({
      accID,
      size,
      fuel,
      cooling,
      make,
      model,
      serialNum,
      engineNum,
      engineSerial,
      startUpDate,
      activationCode,
    });
  if (!serviceFound[0] && !clientFound[0])
    throw new Error(
      "Please create a client first by going to (clients then add new client)..."
    );
  else if (clientFound[0] && serviceFound[0])
    throw new Error(
      "service account already exist please go to (Service List) accID: " +
        serviceFound[0].accID +
        " to update that user's service..."
    );
  redirect(`/ShowClientServices`);
};

const EditClientServiceDetails = async (formData: FormData) => {
  const accID = formData.get("accID") as string;
  const size = formData.get("size") as string;
  const fuel = formData.get("fuel") as string;
  const cooling = formData.get("cooling") as string;
  const make = formData.get("make") as string;
  const model = formData.get("model") as string;
  const serialNum = formData.get("serialNum") as string;
  const engineNum = formData.get("engineNum") as string;
  const engineSerial = formData.get("engineSerial") as string;
  const startUpDate = formData.get("startUpDate") as string;
  const activationCode = formData.get("activationCode") as string;

  await connectMongoDB();
  await ClientService.findOneAndUpdate(
    { accID },
    {
      size,
      fuel,
      cooling,
      make,
      model,
      serialNum,
      engineNum,
      engineSerial,
      startUpDate,
      activationCode,
    }
  );
  redirect(`/ShowClientServices`);
};

const AddClientDetails = async (formData: FormData) => {
  const accID = formData.get("accID") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const street = formData.get("street") as string;
  const town = formData.get("town") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;
  const phoneNumber = formData.get("phoneNumber") as string;

  console.log(firstName);
  console.log(lastName);
  console.log(accID);

  if (
    !accID ||
    !firstName ||
    !lastName ||
    !email ||
    !street ||
    !town ||
    !zip ||
    !phoneNumber ||
    !state
  )
    throw new Error("please fill in all fields.");

  await connectMongoDB();
  const existingClient = await Client.findOne({ accID });
  if (existingClient) throw new Error("Account already exists.");

  await Client.create({
    accID,
    firstName,
    lastName,
    street,
    town,
    state,
    zip,
    phoneNumber,
    email,
    created: new Date(),
  });
  console.log("client created");
  redirect("/clients");
};
export {
  AddClientServiceDetails,
  AddClientDetails,
  EditClientDetails,
  EditClientServiceDetails,
  DeleteClientDetails,
  DeleteService,
};
