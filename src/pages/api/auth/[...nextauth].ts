import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectedToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";

interface User {
  email: string;
  password: string;
}

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: User) {
        const client = await connectedToDatabase();

        const userCollection = client.db().collection("users");

        const user = await userCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
