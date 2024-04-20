import { authOptions } from "@/auth";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };