import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
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

const Client =
  mongoose.models?.Client || mongoose.model("Client", clientSchema);
export default Client;
