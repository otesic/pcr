"use client";
import React from "react";
import QuillEditor from "./react-quill";
import { useRouter } from "next/navigation";

interface BoardProps {
  result: object[];
}

const Board = ({ result }: BoardProps) => {
  // console.log("보드 컴포 리절트", result);
  const router = useRouter();

  // id toString warning 없애기
  result = result.map((id: any) => {
    id._id = id._id.toString();
    return id;
  });
  return (
    <div className="mt-6">
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => router.push("/canSkills/board/write")}
      >
        글 작성하기
      </button>
      {result.map((el: any, idx: number) => {
        return (
          <div key={idx}>
            <div
              className="cursor-pointer"
              onClick={() =>
                router.push(`canSkills/board/detail/${el._id.toString()}`)
              }
            >
              {el.title}
            </div>
            <div>{el.content}</div>
            <div>{el._id.toString()}</div>
            <br></br>
          </div>
        );
      })}
      {/* 리스트 먼저 불러와서 보여주고 */}
      {/* 글 작성시 리액트 퀼 페이지로 */}
      {/* <QuillEditor /> */}
    </div>
  );
};

export default Board;
