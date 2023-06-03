import Board from "@/components/canSkillBody/board/board";
import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import React from "react";
import { connectDB } from "../../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const page = async () => {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  result = result.map((id: any) => {
    id._id = id._id.toString();
    return id;
  });
  let loginSessionValue: any = await getServerSession(authOptions);
  let user = loginSessionValue?.user?.name;
  console.log("보드", user);

  return (
    <>
      <CanSkillNav sessionValue={user} />
      게시판 기본 페이지 {user} asdf
      <Board result={result} />
    </>
  );
};

export default page;
