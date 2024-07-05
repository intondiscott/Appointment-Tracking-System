import mongoose from "mongoose";

const connectMongoDB = async () => {
  let message = {};
  try {
    let URL: string = process.env.URI!;
    await mongoose.connect(URL);

    message = { message: "MongoDB connected..." };
  } catch (error) {
    message = { message: "error" };
  }
  console.log({ message });
};

export default connectMongoDB;
