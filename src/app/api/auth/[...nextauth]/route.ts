import authService from "@/core/services/AuthService";
import Cookies from "cookies";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

interface Credential {
  username: string;
  password: string;
}

interface UserSession {
  phone: string;
  username: string | null;
  token: string;
  id: string;
  phone_number: string;
  email: string | null;
  auth_token: string;
}

const MAX_AGE = 30 * 24 * 60 * 60; // 30 days

const getOptions = (req: any, res: any): NextAuthOptions => ({
  session: {
    strategy: "jwt",
    maxAge: MAX_AGE,
  },
  jwt: {
    maxAge: MAX_AGE,
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = <Credential>credentials;

        try {
          const response = (await authService.login({
            username,
            password,
          })) as { data: UserSession };

          return response.data;
        } catch (error: any) {
          const cookies = new Cookies(req, res);
          cookies.set("auth/login/statusCode", error.response?.status || 401, {
            httpOnly: false,
          });
          throw new Error(
            JSON.stringify({
              ...error.response?.data,
              status: error.response?.status,
            })
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        try {
          const response = (await authService.socialLogin(
            account?.provider === "google"
              ? {
                  social_type: account.provider,
                  email: profile.email,
                  name: profile.name,
                  avatar: profile.picture,
                  social_id: profile.sub,
                }
              : {
                  social_type: account.provider,
                  email: profile.email,
                  name: profile.name,
                  social_id: profile.id,
                }
          )) as any;
          if (response.success) {
            return true;
          }
        } catch (error: any) {}
      }
      return true;
    },
    async session({ session, token }) {
      session.user = <UserSession>token.user;
      return session;
    },
    async jwt({ token, user, account, profile }: any) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        try {
          const response = (await authService.socialLogin(
            account?.provider === "google"
              ? {
                  social_type: account.provider,
                  email: profile.email,
                  name: profile.name,
                  avatar: profile.picture,
                  social_id: profile.sub,
                }
              : {
                  social_type: account.provider,
                  email: profile.email,
                  name: profile.name,
                  social_id: profile.id,
                }
          )) as any;
          if (response.success) {
            token.user = response.data;
          } else {
            token.user = user;
          }
        } catch (error: any) {
          token.user = user;
        }
      } else if (user) {
        token.user = user;
      }

      return token;
    },
  },
});

const handler = (req: any, res: any) =>
  NextAuth(req, res, getOptions(req, res));

export { handler as GET, handler as POST };
