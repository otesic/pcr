import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "../../../../util/database";
import { redirect } from "next/navigation";

export const authOptions: any = {
  providers: [
    GithubProvider({
      id: "github",
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드
      id: "email-password-credential",
      name: "credentials",
      type: "credentials",
      credentials: {
        // email: {
        //   label: "Email",
        //   type: "email",
        //   placeholder: "이메일을 입력하삼",
        // },
        // password: {
        //   label: "Password",
        //   type: "password",
        //   placeholder: "비번 입력하삼",
        // },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials: any, req: any) {
        let db = (await connectDB).db("forum");
        let user = await db
          .collection("user_cred")
          .findOne({ email: credentials?.email });
        if (!user) {
          console.log("id없음");
          return null;
        }
        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!pwcheck) {
          console.log("pw틀림");
          return null;
        }
        return user;
      },
    }),
  ],
  // pages: {
  //   signIn: "/canSkills",
  // },
  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    //4. jwt 만들 때 실행되는 코드
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
