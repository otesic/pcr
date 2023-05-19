"use client";
import { RootState } from "@/app/GlobalState/store";
import React from "react";
import { useSelector } from "react-redux";

const CanSkillBody = () => {
  const count = useSelector((state: RootState) => state.counterRudcer.vlaue);

  return <div>캔스킬 바디 페이지{count}</div>;
};

export default CanSkillBody;
