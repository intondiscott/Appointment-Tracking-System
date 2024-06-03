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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
const getData = async () => {
  const data = await fetch("http://localhost:3000/api/accounts/", {
    next: { revalidate: 10 },
  });
  return data.json();
};
export default async function HomePage() {
  const data = await getData();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className='w-full max-w-sm mt-10 ml-[30%]'
    >
      <CarouselContent className=''>
        {data.map((res: any) =>
          res.accounts.map((item: any, idx: number) => (
            <CarouselItem key={idx} className='pl-4 '>
              <div className='p-1'>
                <Card className='bg-gray-700 text-white _cards m-8'>
                  <CardContent className='flex flex-col aspect-square items-center  p-6 '>
                    {item.picture == "" ? (
                      <CircleUserRound className='w-60 h-60' />
                    ) : (
                      <Image
                        className='rounded-full w-60 h-60'
                        src={`/assets/${item.picture}`}
                        alt='alt'
                        width={300}
                        height={200}
                      />
                    )}

                    <span className='text-3xl font-semibold'>
                      Name : {item.name}
                    </span>
                    <span className='text-2xl font-semibold'>
                      Age : {item.age}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}