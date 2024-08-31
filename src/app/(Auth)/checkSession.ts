import { auth } from "@/auth";
import { cache } from "react";
const checkSession = async () => {
  await auth();
};
export { checkSession };
