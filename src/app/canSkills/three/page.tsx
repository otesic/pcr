import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import React from "react";
import Three from "../../../components/canSkillBody/three/three";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const page = async () => {
  let loginSessionValue: any = await getServerSession(authOptions);
  let user = loginSessionValue?.user?.name;
  return (
    <>
      <CanSkillNav sessionValue={user} />
      <Three />
    </>
  );
};

export default page;
