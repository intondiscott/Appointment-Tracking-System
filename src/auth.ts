import NextAuth, { CredentialsSignin } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import connectMongoDB from "./app/Database/connectDB";
import User from "./app/Models/users";
import { compare } from "bcryptjs";
import GitHub from "next-auth/providers/github";
import { redirect } from "next/navigation";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/Login",
  },
  providers: [
    GitHub,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin(" Provide email and password");
        }
        await connectMongoDB();
        const user = await User.findOne({ email });
        if (!user)
          throw new CredentialsSignin({ cause: "Invalid email or password" });
        if (!user.password)
          throw new CredentialsSignin({ cause: "Invalid email or password" });
        const isMatched = await compare(password, user.password);
        if (!isMatched) throw new Error("Invalid email or password");
        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        };
        return userData;
      },
    }),
  ],
});
