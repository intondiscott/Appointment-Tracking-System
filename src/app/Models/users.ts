import mongoose, { Schema } from "mongoose";
export const config = {
  unstable_allowDynamic: [
    "/node_modules/@babel/runtime/regenerator/index.js",
    "/node_modules/next-auth/react/index.js",
  ],
  //...rest of the config
};
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
