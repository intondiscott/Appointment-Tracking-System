import { NextRequest, NextResponse } from "next/server";

export function GET() {
  const users = [{ userName: "scotty" }];
  return NextResponse.json(users);
}

export async function POST(req: NextResponse) {
  //const users = { userName: "scotty" };
  const user = await req.json();
  return NextResponse.json(user);
}
