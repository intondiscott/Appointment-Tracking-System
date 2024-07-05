import connectMongoDB from "@/app/Database/connectDB";
import { NextRequest, NextResponse } from "next/server";
import User from "../../Models/users";
const connection = async () => {
  await connectMongoDB();
};
connection();
export async function GET() {
  const res = await User.find({});
  return Response.json(res);
}

export async function POST(req: NextResponse) {
  //const users = { userName: "scotty" };
  const { userName, password } = await req.json();
  await User.create({ userName, password });
  return NextResponse.json({ message: "Account Created" }, { status: 201 });
}
export async function DELETE(req: NextResponse) {
  const { _id } = await req.json();
  await User.deleteOne({ _id });
  return NextResponse.json({ message: "user deleted" }, { status: 202 });
}
