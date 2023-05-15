"use client";
import * as React from "react";

import { Dock } from "@/components/macDock/dock/dock";
import { DockCard } from "@/components/macDock/dockCard/dockCard";
import { Card } from "@/components/macDock/card/card";
import { DockDivider } from "@/components/macDock/dockDivider/dockDivider";

const ICONS = [
  {
    name: "home", // 홈 아이콘
    url: "https://img.icons8.com/?size=512&id=21081&format=png",
  },

  {
    name: "skill", // 스킬 아이콘
    url: "https://img.icons8.com/cotton/512/code.png",
  },

  {
    name: "resume", // 이력서 아이콘
    url: "https://img.icons8.com/?size=512&id=115648&format=png",
  },

  {
    name: "study", // 공부 과정 아이콘
    url: "https://img.icons8.com/ultraviolet/512/students.png",
  },

  {
    name: "finalMent", // 마지막 멘트
    url: "https://img.icons8.com/?size=512&id=104317&format=png",
  },
  null,

  {
    name: "chatBot", // chat bot 아이콘
    url: "https://img.icons8.com/?size=512&id=103790&format=png",
  },
  ,
];
const MacDock = () => {
  const [number, setNumber] = React.useState(false);

  const getData = (number: boolean) => {
    setNumber(!number);
  };

  console.log("부모 넘버" + number);

  return (
    <div>
      <Dock>
        {ICONS.map((src, index) =>
          src ? (
            <DockCard
              src={src.name}
              key={src.name}
              number={number}
              getData={getData}
            >
              <Card src={src.url} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
  );
};

export default MacDock;
