import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/app/Database/connectDB";

import { ClientService } from "@/app/Models/clients";

export async function GET(req: NextRequest) {
  await connectMongoDB();
  const service = await ClientService.find({});

  return NextResponse.json(service);
}
