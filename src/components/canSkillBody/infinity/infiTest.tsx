"use client";
import listHandler from "@/pages/api/kakao/list";
import React from "react";

const InfiTest = () => {
  const test = () => {
    console.log("클릭");
    // fetch 테스트 용
    listHandler().then((res: any) => console.log(res));
  };
  return (
    <div>
      <button className="bg-red-300" onClick={test}>
        데이터 요청
      </button>
    </div>
  );
};

export default InfiTest;
