import { NextRequest, NextResponse } from "next/server";
import client from "../../../../lib/db";
import { Client } from "@/app/Models/clients";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const data = await fetch("http://localhost:3000/api/accounts/", {
    cache: "no-store",
  });
  const returnedData = await data.json();
  let clientFound = { clientError: "Client doesn't exist" };
  returnedData.map((client: any) => {
    if (client["_id"] === id) clientFound = client;
  });

  return NextResponse.json(clientFound);
}
