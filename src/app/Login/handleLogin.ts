import { userAgentFromString } from "next/server";

const LoggedIn = (userName: string) => {
  if (userName == "") {
    return false;
  }
  return true;
};

export default LoggedIn;
