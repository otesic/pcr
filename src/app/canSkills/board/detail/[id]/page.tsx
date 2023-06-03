import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import React from "react";
import { connectDB } from "../../../../../../util/database";
import { ObjectId } from "mongodb";
import BoardDetail from "@/components/canSkillBody/board/detail/detail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const page = async (props: any) => {
  const clinet = await connectDB;
  const db = clinet.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id.toString()) });
  let loginSessionValue: any = await getServerSession(authOptions);
  let user = loginSessionValue?.user?.name;
  return (
    <>
      <CanSkillNav sessionValue={user} />
      <BoardDetail result={result} />
    </>
  );
};

export default page;
