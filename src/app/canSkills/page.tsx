import CanSkillBody from "@/components/canSkillBody/canSkillBody";
import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  let loginSessionValue: any = await getServerSession(authOptions);
  console.log("캔스킬 페이지 se세션상태", loginSessionValue);
  let user = loginSessionValue?.user?.name;
  // if(loginSessionValue.user.name !== null)
  // console.log("1", user);

  return (
    <>
      <CanSkillNav sessionValue={user} />
      <CanSkillBody />
      {/* 캔스킬나브에서 리덕스 state 
      변경시키고 캔스킬바디 페이지에서 받아서 변경된 값에 따라서 보여주는게 달라야함 */}
    </>
  );
};

export default page;
