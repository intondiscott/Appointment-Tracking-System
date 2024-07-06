"use client";
import React, { useState, useEffect } from "react";
import LoggedIn from "./handleLogin";
import { useRouter } from "next/navigation";


function LoginPage() {
  const r = useRouter();

  async function onSubmit(data: any) {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: data.get("userName"),
        password: data.get("password"),
      }),
    });

    if (res.ok) {
      r.push("/");
    }
  }
  return (
    <form action={onSubmit}>
      <input type='text' placeholder='name' name='userName' />
      <input type='password' placeholder='password' name='password' />
      <button type='submit'>submit</button>
    </form>
  );
}

export default LoginPage;
