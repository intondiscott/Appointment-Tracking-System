export default async function AppointmentPage() {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/accounts/", {
      next: { revalidate: 10 },
    });
    return res.json();
  };
  const data = await getData();
  return (
    <div>
      Appointments:
      {data.map((res: any, idx: number) =>
        res.accounts.map(
          (items: any) =>
            items.appointment.length > 0 && (
              <div key={idx} className='bg-gray-300 m-10 rounded'>
                <p>
                  <strong>Name:</strong> {items.name}
                </p>
                <p>
                  <strong>Appointment Description:</strong> {items.appointment}
                </p>
              </div>
            )
        )
      )}
    </div>
  );
}
