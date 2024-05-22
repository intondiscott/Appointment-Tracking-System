export function GET() {
  //const res = fetch("http://localhost:3000/api");
  const user = [
    {
      accounts: [
        {
          id: 1,
          name: "scotty",
          age: 38,
          picture: "image1.jpg",
        },
        { id: 2, name: "John", age: 18, picture: "image2.jpg" },
        { id: 3, name: "Lisa", age: 79, picture: "" },
      ],
    },
  ];

  return Response.json(user);
}
