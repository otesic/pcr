import CanSkillBody from "@/components/canSkillBody/canSkillBody";
import CanSkillNav from "@/components/canSkillNav/canSkillNav";
import React from "react";

const page = () => {
  return (
    <>
      <CanSkillNav />
      <CanSkillBody />
      {/* 캔스킬나브에서 리덕스 state 
      변경시키고 캔스킬바디 페이지에서 받아서 변경된 값에 따라서 보여주는게 달라야함 */}
    </>
  );
};

export default page;
