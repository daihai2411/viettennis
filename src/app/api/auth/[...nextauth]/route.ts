import authService from "@/core/services/AuthService";
import Cookies from "cookies";
import { jwtDecode } from "jwt-decode";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

interface Credential {
  username: string;
  password: string;
}

type UserSession = {
  phone: string;
  username: string | null;
  token: string;

  id: string;
  name: string | null;
  phone_number: string;
  email: string | null;
  avatar: string | null;
  birthday: string | null;
  address_id: string | null;
  auth_token: string;
  is_phone_verified: number;
};

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
          })) as { user: UserSession };
          console.log("response", response);

          return response.user;
        } catch (error: any) {
          console.log("error", error);
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
    async session({ session, token }) {
      session.user = <UserSession>token.user;
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }

      if (token.user && token.user?.token) {
        const decoded: any = jwtDecode(token.user?.auth_token);
        // if (Date.now() + 5 * 60 * 1000 >= decoded.exp * 1000) {
        //   return await refreshAccessToken(token);
        // }
      }

      return token;
    },
  },
});

// const refreshAccessToken = async (token: any) => {
//   try {
//     const refreshToken: any = await authService.refreshToken({
//       auth_token: token?.user?.auth_token,
//     });

//     return {
//       ...token,
//       user: refreshToken.user,
//     };
//   } catch (error) {
//     return { ...token };
//   }
// };

const handler = (req: any, res: any) =>
  NextAuth(req, res, getOptions(req, res));

export { handler as GET, handler as POST };
