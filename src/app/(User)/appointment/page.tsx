import { checkSession } from "@/app/(Auth)/checkSession";
import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
export default async function AppointmentPage() {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/accounts/", {
      next: { revalidate: 10 },
    });
    return res.json();
  };
  const session = await auth();
  const data = await getData();

  return (
    <div className='m-2'>
      <div className='text-center font-black'>
        <strong>Appointments</strong>
      </div>

      {data.map((res: any, idx: number) =>
        res.accounts.map(
          (items: any) =>
            items.appointment.length > 0 && (
              <Card
                key={idx}
                className='bg-gray-700 text-white _cards ml-10 mr-10 mt-2'
              >
                <CardContent className='flex flex-col p-6  '>
                  {items.picture == "" ? (
                    <CircleUserRound className='w-20 h-20 ml-auto' />
                  ) : (
                    <Image
                      className='rounded-full w-20 h-20 ml-auto'
                      src={`/assets/${items.picture}`}
                      alt='alt'
                      width={300}
                      height={200}
                    />
                  )}

                  <span>Name : {items.name}</span>
                  <span>Appointment Description : {items.appointment}</span>
                </CardContent>
              </Card>
            )
        )
      )}
    </div>
  );
}
