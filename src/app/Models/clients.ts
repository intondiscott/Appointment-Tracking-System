import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  dataCreated: Date,
});

const Client =
  mongoose.models?.Client || mongoose.model("Client", clientSchema);
export default Client;
