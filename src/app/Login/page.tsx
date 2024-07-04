"use client";
import React, { useState, useEffect } from "react";
import LoggedIn from "./handleLogin";
import { useRouter } from "next/navigation";

function LoginPage() {
  const r = useRouter();
  const [user, setUser] = useState("");

  async function onSubmit(data: any) {
    setUser(data.get("userName"));
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });
    console.log(LoggedIn(user));
    if (res.ok) {
      r.push("/");
    }
  }
  return (
    <form action={onSubmit}>
      <input type='text' placeholder='name' name='userName' />
      <button type='submit'>submit {user}</button>
    </form>
  );
}

export default LoginPage;
