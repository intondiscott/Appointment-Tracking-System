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
  MapPinned,
} from "lucide-react";
import Image from "next/image";

import { redirect } from "next/navigation";
import { cache } from "react";
import Link from "next/link";
import { getSession } from "@/lib/getSession";
import { IconLeft } from "react-day-picker";
export default async function Clients(props: any) {
  const getData = async () => {
    const res = await fetch(
      `${process.env.AUTH_URL}/api/accounts/${props.id}`,
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
                {res.picture == null ? (
                  <CircleUserRound className="w-20 h-20 ml-auto" />
                ) : (
                  ""
                  /*<Image
                    className='rounded-full w-20 h-20 ml-auto'
                    src={`/assets/${res.picture}`}
                    alt='alt'
                    width={300}
                    height={200}
                  />*/
                )}
                <span className="flex">
                  <BookUserIcon className="mr-2" /> {res.accID}
                </span>
                <span className="flex">
                  <UserRound className="mr-2" /> {res.firstName} {res.lastName}
                </span>
                <span className="flex">
                  <Phone className="mr-2" /> {res.phoneNumber}
                </span>
                <span className="flex">
                  <MapPinned className="mr-2" /> {res.street} {res.town},{" "}
                  {res.state} {res.zip}
                </span>
                <span className="flex">
                  <Mail className="mr-2" /> {res.email}
                </span>

                <span className="flex">
                  <CalendarDaysIcon className="mr-2" /> {res.created}
                </span>
              </CardContent>
            </Card>
          )
      )}
    </div>
  );
}
