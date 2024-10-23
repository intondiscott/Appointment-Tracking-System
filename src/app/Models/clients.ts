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
  bill: String,
  paidDate: String,
});

const clientServiceSchema = new Schema({
  accID: String,
  TypeOfService: String,
});

const Client =
  mongoose.models?.Client || mongoose.model("Client", clientSchema);

const ClientService =
  mongoose.models?.ClientService ||
  mongoose.model("ClientService", clientServiceSchema);
export { Client, ClientService };
