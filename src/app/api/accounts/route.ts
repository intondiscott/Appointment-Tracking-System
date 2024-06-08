import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  //const res = fetch("http://localhost:3000/api");
  const user = [
    {
      accounts: [
        {
          id: 1,
          name: "Scotty",
          age: 38,
          picture: "image1.jpg",
          appointment: "Problem with electronics itemsssssss.",
        },
        {
          id: 2,
          name: "John",
          age: 18,
          picture: "image2.jpg",
          appointment: "Problem with electronics item.",
        },
        {
          id: 3,
          name: "Lisa",
          age: 79,
          picture: "",
          appointment: "Problem with electronics.",
        },
        {
          id: 4,
          name: "Olawale",
          age: 31,
          picture: "",
          appointment: "Help with api 😂",
        },
      ],
    },
  ];

  return Response.json(user);
}
