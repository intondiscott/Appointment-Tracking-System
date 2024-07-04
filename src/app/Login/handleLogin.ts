import { userAgentFromString } from "next/server";

const LoggedIn = (userName: string = "") => {
  if (userName == "scotty") {
    return true;
  }
  return false;
};

export default LoggedIn;
