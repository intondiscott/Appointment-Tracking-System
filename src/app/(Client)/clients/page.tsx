import connectMongoDB from "@/app/Database/connectDB";
import Clients from "@/components/client";
import ClientForm from "@/components/clientForm";
import Link from "next/link";

const AllClients = async () => {
  const getData = async () => {
    await connectMongoDB();
    const res = await fetch(
      `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/api/accounts/`,
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
      href={`/clients/${i["_id"]}`}
    >
      <Clients
        key={i["_id"]}
        id={i["_id"]}
      />
    </Link>
  ));

  return (
    <div>
      <h1 className="text-center text-3xl font-black">
        <strong>Clients</strong>
      </h1>
      {clients}
    </div>
  );
};
export default AllClients;
