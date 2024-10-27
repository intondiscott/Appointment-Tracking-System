import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  //const res = fetch("http://localhost:3000/api");
  const data = await fetch(
    `https://appointment-tracking-system.vercel.app/api/accounts/`,
    {
      cache: "no-store",
    }
  );
  const returnedData = await data.json();

  return NextResponse.json(
    returnedData.map((item: any) => item.accounts[id].appointment)
  );
}
