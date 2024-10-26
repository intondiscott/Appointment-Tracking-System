import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  accID: String,
  firstName: String,
  lastName: String,
  street: String,
  town: String,
  state: String,
  zip: String,
  phoneNumber: String,
  email: String,
  created: Date,
});

const clientServiceSchema = new Schema({
  accID: String,
  size: String,
  fuel: String,
  cooling: String,
  make: String,
  model: String,
  serialNum: String,
  engineNum: String,
  engineSerial: String,
  startUpDate: String,
  activationCode: String,
});

const Client =
  mongoose.models?.Client || mongoose.model("Client", clientSchema);

const ClientService =
  mongoose.models?.ClientService ||
  mongoose.model("ClientService", clientServiceSchema);
export { Client, ClientService };
