export default async function AppointmentPage() {
  const getData = async () => {
    const res = await fetch(
      "http://localhost:3000/api/accounts/1/appointments",
      { next: { revalidate: 10 } }
    );
    return res.json();
  };
  const data = await getData();
  return (
    <div>
      {data?.appointments === "yes" ? (
        <div className='rounded-full bg-red-700 w-[40px] h-[40px]'></div>
      ) : (
        ""
      )}
    </div>
  );
}
