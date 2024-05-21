export function GET() {
  //const res = fetch("http://localhost:3000/api");
  const user = [
    {
      accounts: [
        {
          name: "scotty",
          age: 38,
        },
        { name: "John", age: 18 },
        { name: "Lisa", age: 79 },
      ],
    },
  ];

  return Response.json(user);
}
