import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        // Map the Google profile fields to your user model
        console.log(profile);
        return {
          id: profile.sub,
          email: profile.email,
          name: profile.name,
          firstName: profile.given_name, // Provide the given name as firstName
          lastName: profile.family_name, // Provide the given name as firstName
          image: profile.picture,
          role: "USER" // Set a default role; adjust if necessary
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.firstName = user.firstName;
        session.user.role = user.role;
      }
      return session;
    },
  },
});
