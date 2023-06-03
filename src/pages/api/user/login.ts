"use client";
import { connectDB } from "../../../../util/database";

const joinHandler = async (res: any, req: any) => {
  const clinet = await connectDB;
  const db = clinet.db("forum");
  let userList = await db.collection("user").find().toArray();
  let uList: any = [];
  userList.map((el: any) => uList.push(el.id));
  const userLogin = res.body;
  if (res.method == "POST") {
    if (userLogin.id !== "" && userLogin.pw !== "") {
      if (
        uList?.find((el: any) => el === userLogin.id) &&
        uList?.find((el: any) => el === userLogin.pw)
      ) {
        return req.redirect(302, "/canSkills");
      } else {
        // await db.collection("user").insertOne(userLogin);
        return req.status(500).json("오류 발생");
      }
      //   const db = clinet.db("forum");
    }
    return req.status(500).json("id pw 입력하셈");
  }
};

export default joinHandler;
