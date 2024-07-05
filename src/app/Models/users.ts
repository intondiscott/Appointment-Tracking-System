import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
