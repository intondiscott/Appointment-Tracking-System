import connectMongoDB from "@/app/Database/connectDB";
import { ClientService } from "@/app/Models/clients";
import Clients from "@/components/client";
import ClientForm from "@/components/clientForm";
import Services from "@/components/services";
import Link from "next/link";

const AllClients = async () => {
  const getData = async () => {
    await connectMongoDB();
    const res = await fetch(
      "http://localhost:3000/api/accounts/client-services",
      {
        next: { revalidate: 0 },
      }
    );
    return res.json();
  };
  const data = await getData();
  const clients = data.map((i: any, idx: number) => (
    <Link
      key={i["_id"]}
      href={`/ShowClientServices/${i["_id"]}`}
    >
      <Services
        key={i["_id"]}
        id={i["_id"]}
      />
    </Link>
  ));

  return (
    <div>
      <h1 className="text-center text-3xl font-black">
        <strong>Client Services</strong>
      </h1>

      {clients}
    </div>
  );
};
export default AllClients;
