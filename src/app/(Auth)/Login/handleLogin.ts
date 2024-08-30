const LoggedIn = (userName: string = "", password: string = "") => {
  if (userName === "admin" && password === "1234") {
    return true;
  }
  return false;
};

export default LoggedIn;
