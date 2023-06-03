import Join from "@/components/canSkillBody/join/join";
import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  let loginSessionValue: any = await getServerSession(authOptions);
  let user = loginSessionValue?.user?.name;
  return (
    <>
      <CanSkillNav sessionValue={user} />
      <Join />
    </>
  );
};

export default page;
