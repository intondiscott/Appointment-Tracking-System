import mongoose from "mongoose";
export const config = {
  unstable_allowDynamic: [
    "/node_modules/@babel/runtime/regenerator/index.js",
    "/node_modules/next-auth/react/index.js",
  ],
  //...rest of the config
};
const connectMongoDB = async () => {
  let message = {};
  try {
    let URL: string = process.env.URI! || "mongodb://127.0.0.1:27017/bespokeDB";
    await mongoose.connect(URL);

    message = { message: "MongoDB connected..." };
  } catch (error) {
    message = { message: error };
  }
  console.log({ message });
};

export default connectMongoDB;
