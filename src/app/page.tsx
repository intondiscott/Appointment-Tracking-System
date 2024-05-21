import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { validators } from "tailwind-merge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <div key={idx}>
            <Card className='bg-gray-700 text-white m-4'>
              <CardHeader>
                <CardTitle>Name: {item.name}</CardTitle>
                <CardDescription>Age: {item.age}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))
      )}
    </div>
  );
}
