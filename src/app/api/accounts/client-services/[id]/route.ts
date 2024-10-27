import { NextRequest, NextResponse } from "next/server";
import { Client } from "@/app/Models/clients";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const data = await fetch(
    `${
      process.env.AUTH_URL || "http://localhost:3000/"
    }api/accounts/client-services/`,
    {
      cache: "no-store",
    }
  );
  const returnedData = await data.json();
  let clientFound = { clientError: "Client doesn't exist" };
  returnedData.map((client: any) => {
    if (client["_id"] === id) clientFound = client;
  });

  return NextResponse.json(clientFound);
}
