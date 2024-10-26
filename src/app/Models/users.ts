import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  password: String,
  providerId: String,
  role: { type: String, default: "user" },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;
