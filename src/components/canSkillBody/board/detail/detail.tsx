"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface resultType {
  result: any;
}
const BoardDetail = ({ result }: resultType) => {
  // console.log("글상세 리절트", result);
  // id toString warning 없애기
  result._id.toString();
  const router = useRouter();
  return (
    <div>
      <h1>{result.title}</h1>
      <hr />
      {result.content}
      <hr />
      <button
        className="bg-slate-400"
        onClick={() =>
          router.push(`/canSkills/board/edit/${result._id.toString()}`)
        }
      >
        수정하기
      </button>
      <hr />
      <button
        className="bg-red-400"
        onClick={(e: any) => {
          fetch("/api/board/delete", {
            method: "POST",
            body: result._id.toString(),
          }).then(() => {
            router.push("/canSkills/board");
          });
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default BoardDetail;
