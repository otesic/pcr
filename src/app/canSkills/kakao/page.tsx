import Kakao from "@/components/canSkillBody/kakao/kakao";
import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";
import { connectDB } from "../../../../util/database";

const page = async () => {
  let loginSessionValue: any = await getServerSession(authOptions);
  let user = loginSessionValue?.user?.name;

  const db = (await connectDB).db("forum");
  let result = await db.collection("provideList").find().limit(5).toArray();
  result = result.map((a: any) => {
    a._id = a._id.toString();
    return a;
  });
  // console.log(result);

  return (
    <>
      <CanSkillNav sessionValue={user} />
      <Kakao provideList={result} />
    </>
  );
};

export default page;
