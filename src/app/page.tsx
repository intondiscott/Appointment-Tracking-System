import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { validators } from "tailwind-merge";

const getData = async () => {
  const data = await fetch("http://localhost:3000/api/accounts", {
    next: { revalidate: 10 },
  });
  return data.json();
};
export default async function HomePage() {
  const data = await getData();
  return (
    <div>
      {data.map((res: any) =>
        res.accounts.map((item: any, idx: number) => (
          <p key={idx}>{item.name}</p>
        ))
      )}
    </div>
  );
}
