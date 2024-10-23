import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/Database/connectDB";
import User from "@/app/Models/users";
import { Client } from "../../Models/clients";

export async function GET(req: NextRequest) {
  await connectMongoDB();
  const user = await Client.find({});

  return NextResponse.json(user);
}
