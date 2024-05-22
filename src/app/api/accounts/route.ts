export function GET() {
  //const res = fetch("http://localhost:3000/api");
  const user = [
    {
      accounts: [
        {
          id: 1,
          name: "scotty",
          age: 38,
        },
        { id: 2, name: "John", age: 18 },
        { id: 3, name: "Lisa", age: 79 },
      ],
    },
  ];

  return Response.json(user);
}
