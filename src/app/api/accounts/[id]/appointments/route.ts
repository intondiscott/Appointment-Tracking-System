import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  //const res = fetch("http://localhost:3000/api");
  /*const data = await fetch("http://localhost:3000/api/accounts");
  const returnedData = await data.json();
  const userID = returnedData.map((res: any) =>
    res.accounts.map((item: any) => {
      if (id == item.id) {
        return item;
      } else;
    })
  );*/
  return await NextResponse.json({ appointments: "yes" });
}
