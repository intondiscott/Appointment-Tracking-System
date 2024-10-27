import { Card, CardContent } from "@/components/ui/card";
import {
  CircleUserRound,
  UserRound,
  Map,
  Phone,
  Mail,
  Receipt,
  CalendarDaysIcon,
  BookUserIcon,
  Ruler,
  Fuel,
  Fan,
} from "lucide-react";
import Image from "next/image";

import { redirect } from "next/navigation";

import { getSession } from "@/lib/getSession";

export default async function Services(props: any) {
  const getData = async () => {
    const res = await fetch(
      `${process.env.AUTH_URL}/api/accounts/client-services/${props.id}`,
      {
        next: { revalidate: 0 },
      }
    );
    return res.json();
  };
  const session = await getSession();
  const data =
    (await getData()).length > 1 ? await getData() : [await getData()];

  if (!session) redirect("/");
  return (
    <div className="m-2">
      <div className="text-center font-black"></div>

      {data.map(
        (res: any, idx: number) =>
          res && (
            <Card
              key={idx}
              className="bg-gray-700 text-white _cards ml-10 mr-10 mt-2"
            >
              <CardContent className="flex flex-col p-6  ">
                {/*res.picture == null ? (
                  <CircleUserRound className="w-20 h-20 ml-auto" />
                ) : (
                  
                  /*<Image
                    className='rounded-full w-20 h-20 ml-auto'
                    src={`/assets/${res.picture}`}
                    alt='alt'
                    width={300}
                    height={200}
                  />*/}
                <div className="flex justify-end ">
                  <Image
                    className="rounded-xl"
                    src="/assets/7042__47166.1684504202.webp"
                    alt="alt"
                    width={200}
                    height={200}
                  />
                </div>
                <span className="flex">
                  <span className="font-black mr-2">Account Num:</span>{" "}
                  {res.accID}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Size:</span>
                  {res.size}
                </span>
                <span className="flex ">
                  <span className="font-black mr-2">Fuel:</span> {res.fuel}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Cooling:</span>{" "}
                  {res.cooling}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Make:</span> {res.make}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Model:</span> {res.model}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Serial Num:</span>{" "}
                  {res.serialNum}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Engine Num:</span>{" "}
                  {res.engineNum}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Engine Serial:</span>{" "}
                  {res.engineSerial}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Start Up Date:</span>{" "}
                  {res.startUpDate}
                </span>
                <span className="flex">
                  <span className="font-black mr-2">Activation Code:</span>{" "}
                  {res.activationCode}
                </span>
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
}
