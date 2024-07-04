"use client";
import { useEffect, useState } from "react";
import LoggedIn from "./Login/handleLogin";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      //const loggedIn = await fakeLoginCheck();
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      await setIsLoggedIn(LoggedIn(data[0].userName));
      //console.log(isLoggedIn);
    };

    checkLoginStatus();
  }, []);

  return (
    <>{isLoggedIn ? <div>Is Logged In...</div> : <div>Not Logged In...</div>}</>
  );
}
