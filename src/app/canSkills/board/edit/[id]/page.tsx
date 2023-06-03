import BoardEdit from "@/components/canSkillBody/board/edit/edit";
import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import React from "react";
import { connectDB } from "../../../../../../util/database";
import { ObjectId } from "mongodb";
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
      {/* <BoardEdit result={result} /> */}
      <BoardEdit result={result} />
    </>
  );
};

export default page;
