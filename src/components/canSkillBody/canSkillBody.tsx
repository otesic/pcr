"use client";
import { RootState } from "@/app/GlobalState/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BodyDefault from "./bodyDefault/bodyDefault";
import { useDispatch } from "react-redux";
import { navValue } from "@/app/GlobalState/Features/CanSkillNav/CanSkillNavSilce";

const CanSkillBody = () => {
  const dispatch = useDispatch();

  // 현재 네비게이션 클릭 밸류 -> next 다이나믹 라우팅으로 id값 state 만들어서 활용했어도 좋았을 듯
  const nowNavValue = useSelector(
    (state: RootState) => state.canSkillNavReducer.vlaue
  );

  // useEffect로 현재 페이지 진입시에 항상 디폴트 페이지 보여주기
  useEffect(() => {
    dispatch(navValue(""));
  }, []);

  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        {nowNavValue == "" ? <BodyDefault /> : <></>}
      </div>
    </div>
  );
};

export default CanSkillBody;
