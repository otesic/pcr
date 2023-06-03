"use client";
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import UserSelect from "./userSelect/userSelect";
import Provide from "./provide/provide";
interface provideListType {
  provideList: any;
}
const Kakao = ({ provideList }: provideListType) => {
  return (
    <div className="flex">
      <UserSelect />
      <Map
        center={{ lat: 37.3902201, lng: 127.0831719 }}
        style={{
          // 지도의 크기
          width: "80%",
          height: "400px",
        }}
        level={9}
      >
        {/* <MapMarker position={{ lat: 37.3902201, lng: 127.0831719 }}>
        <div style={{ color: "#000" }}>우리집!</div>
      </MapMarker> */}
      </Map>
      <Provide provideList={provideList} />
    </div>
  );
};

export default Kakao;
