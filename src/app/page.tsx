"use client";
import { useEffect, useRef, useState } from "react";
import LoggedIn from "./Login/handleLogin";
import User from "./Models/users";
import mongoose from "mongoose";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let user: string;
  useEffect(() => {
    const checkLoginStatus = async () => {
      //const loggedIn = await fakeLoginCheck();
      const res = await fetch("http://localhost:3000/api/users");

      const data = await res.json();
      //just to lookup all users and if one is correct show logged in...
      data.map((info: any) => {
        if (LoggedIn(info.userName, info.password))
          setIsLoggedIn(LoggedIn(info.userName, info.password));
      });
    };

    checkLoginStatus();
  }, []);

  return (
    <>{isLoggedIn ? <div>Is Logged In...</div> : <div>Not Logged In...</div>}</>
  );
}
