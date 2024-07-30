import NextAuth, { AuthError, CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { User } from "./models/user.model";

import { connectToDatabase } from "./lib/utils";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;
        console.log("from auth.ts", email, password);
        if (!email || !password)
          throw new CredentialsSignin("Please provide email and password");

        await connectToDatabase();
        // return { name: "masti", email: "masti" };

        const user = await User.findOne({ email });
        if (!user) {
          throw new CredentialsSignin({
            cause: "Invalid email or password after checking if it exists",
          });
        }
        console.log("Password from auth.ts", user);
        const isMatch = user.password === password;
        if (!user.password) {
          throw new CredentialsSignin({
            cause: "Invalid username or password",
          });
        }
        // const isMatch = await compare(password, user.password);
        if (!isMatch) {
          throw new CredentialsSignin({ cause: "Invalid password" });
        }
        return { name: user.name, email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectToDatabase();
          const userExists = await User.findOne({ email });
          if (!userExists) {
            await User.create({
              email,
              name,
              image,
              googleId: id,
            });
          }
          return true;
        } catch (error) {
          throw new AuthError("Eror while signing in with google");
        }
      }
      return false;
    },
  },
});
