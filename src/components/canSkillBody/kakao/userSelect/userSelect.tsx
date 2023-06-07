import { RootState } from "@/app/GlobalState/store";
import React from "react";
import { useSelector } from "react-redux";

const UserSelect = () => {
  const reduxTest = useSelector((state: RootState) => state.kakaoReducer.vlaue);
  // console.log("유저선택페이지 리덕스", reduxTest);

  return (
    <div>
      <h1>유저 선택 값</h1>

      {reduxTest.length !== 0 ? (
        <div>
          {reduxTest.map((el: any, idx: number) => (
            <div key={idx}>
              <span>lat : {el.lat}</span>
              <br></br>
              <span>lng : {el.lng}</span>
              <hr></hr>
            </div>
          ))}
        </div>
      ) : (
        <div>선택된 여행지가 없습니다.</div>
      )}
    </div>
  );
};

export default UserSelect;
