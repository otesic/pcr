"use client";
import { connectDB } from "../../../../util/database";

// 없어질 파일 -> JWT 방식으로 진행하면 auth의 signup.ts로 대체될거임
const joinHandler = async (res: any, req: any) => {
  const clinet = await connectDB;
  const db = clinet.db("forum");
  let userList = await db.collection("user").find().toArray();
  let uList: any = [];
  userList.map((el: any) => uList.push(el.id));
  const newUser = res.body;
  if (res.method == "POST") {
    if (newUser.id !== "" && newUser.pw !== "") {
      if (uList?.find((el: any) => el === newUser.id)) {
        return req.status(500).json("이미 존재하는 회원");
      } else {
        await db.collection("user").insertOne(newUser);
        return req.redirect(302, "/canSkills");
      }

      //   const db = clinet.db("forum");
    }
    return req.status(500).json("id pw 입력하셈");
  }
};

export default joinHandler;
