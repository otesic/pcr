"use client";
import { setKakao } from "@/app/GlobalState/Features/Kakao/kakaoSlice";
import { RootState } from "@/app/GlobalState/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { connectDB } from "../../../../../util/database";

interface provideListType {
  provideList: any;
}

const Provide = ({ provideList }: provideListType) => {
  const [cordi, setCordi] = useState<object[]>([]);
  const [checkName, setCheckName] = useState<any>([]);
  const dispatch = useDispatch();
  const clickHandler = (el: any) => {
    // console.log("클릭됨");

    setCordi([
      ...cordi,
      {
        lat: el.lat,
        lng: el.lng,
      },
    ]);
    setCheckName([{ name: el.name }]);
    // console.log("쌓인이름", checkName[0]);
    // console.log("el이름", el.name);

    // 똑같은 여행지 연속 선택시 리덕스 세팅 불가능하게 해야함
    if (el.name == checkName[0]?.name) {
      console.log("중복");
      alert("같은 여행지를 연속으로 선택할 수 없습니다.");
    } else {
      dispatch(setKakao([{ lat: el.lat, lng: el.lng }]));
    }
  };
  return (
    <div>
      {provideList.map((el: any, idx: number) => {
        return (
          <div key={idx}>
            <div onClick={() => clickHandler(el)} className={el.lat}>
              추천 관광지 : {el.name}
            </div>
            <div>{el.lat}</div>
            <div>{el.lng}</div>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default Provide;
