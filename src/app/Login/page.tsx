
"use client";
import React from "react";
import { FormEvent } from "react";
import LoggedIn from "./handleLogin";
import { stringify } from "querystring";
function loginPage() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    LoggedIn(JSON.stringify(formData));
    console.log(formData);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='name' />
      <button type='submit'>submit</button>
    </form>

  );
}

export default loginPage;
