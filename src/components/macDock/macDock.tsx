"use client";
import * as React from "react";

import { Dock } from "@/components/macDock/dock/dock";
import { DockCard } from "@/components/macDock/dockCard/dockCard";
import { Card } from "@/components/macDock/card/card";
import { DockDivider } from "@/components/macDock/dockDivider/dockDivider";
import OpenAi from "../openAi/openAi";
import { useSelector } from "react-redux";
import { RootState } from "@/app/GlobalState/store";

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
  {
    name: "project", // 프로젝트 ppt
    url: "https://img.icons8.com/?size=512&id=Sb07IFqvmFPZ&format=png",
  },
  null,

  {
    name: "chatBot", // chat bot 아이콘
    url: "https://img.icons8.com/?size=512&id=103790&format=png",
  },
  ,
];
const MacDock = () => {
  // 리덕스 state로 OpenAI on off
  const onChat = useSelector((state: RootState) => state.chatBotReducer.vlaue);

  return (
    <div>
      <Dock>
        {ICONS.map((src, index) =>
          src ? (
            <DockCard src={src.name} key={src.name}>
              <Card src={src.url} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
      {onChat === true ? <OpenAi /> : <></>}
    </div>
  );
};

export default MacDock;
