import React from "react";
interface resultType {
  result: any;
}
const BoardEdit = ({ result }: resultType) => {
  // id toString warning 없애기
  result._id.toString();
  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/board/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default BoardEdit;
