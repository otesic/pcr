"use client";

import { setKakao } from "@/app/GlobalState/Features/Kakao/kakaoSlice";
import { RootState } from "@/app/GlobalState/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface provideListType {
  provideList: any;
}
const Provide = ({ provideList }: provideListType) => {
  const [cordi, setCordi] = useState<object[]>([]);
  console.log("cordi", cordi);

  const setTest = useSelector((state: RootState) => state.kakaoReducer.vlaue);
  const dispatch = useDispatch();
  const clickHandler = (el: any) => {
    setCordi([
      ...cordi,
      {
        lat: el.lat,
        lng: el.lng,
      },
    ]);
    dispatch(setKakao([{ lat: el.lat, lng: el.lng }]));
    // console.log(el);

    console.log(setTest);
  };
  return (
    <div>
      {provideList.map((el: any, idx: number) => {
        return (
          <div key={idx}>
            <div onClick={() => clickHandler(el)} className={el.lat}>
              {el.name}
            </div>
            <div>{el.lat}</div>
            <div>{el.lng}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Provide;
