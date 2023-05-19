"use client";
import { RootState } from "@/app/GlobalState/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Three from "./three/three";
import Board from "./board/board";
import OAuth from "./oauth/oauth";
import Infinity from "./infinity/infinity";
import Pdf from "./pdf/pdf";
import Kakao from "./kakao/kakao";
import BodyDefault from "./bodyDefault/bodyDefault";
import { useDispatch } from "react-redux";
import { navValue } from "@/app/GlobalState/Features/CanSkillNav/CanSkillNavSilce";

const CanSkillBody = () => {
  const dispatch = useDispatch();

  // 현재 네비게이션 클릭 밸류 -> next 다이나믹 라우팅으로 id값 state 만들어서 활용했어도 좋았을 듯
  const nowNavValue = useSelector(
    (state: RootState) => state.canSkillNavReduce.vlaue
  );

  // useEffect로 현재 페이지 진입시에 항상 디폴트 페이지 보여주기
  useEffect(() => {
    dispatch(navValue(""));
  }, []);

  return (
    <div>
      {nowNavValue == "" ? <BodyDefault /> : <></>}
      {nowNavValue == "three" ? <Three /> : <></>}
      {nowNavValue == "board" ? <Board /> : <></>}
      {nowNavValue == "oauth" ? <OAuth /> : <></>}
      {nowNavValue == "infinity" ? <Infinity /> : <></>}
      {nowNavValue == "pdf" ? <Pdf /> : <></>}
      {nowNavValue == "kakao" ? <Kakao /> : <></>}
    </div>
  );
};

export default CanSkillBody;
