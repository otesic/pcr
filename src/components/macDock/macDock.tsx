"use client";
import * as React from "react";

import { Dock } from "@/components/macDock/dock/dock";
import { DockCard } from "@/components/macDock/dockCard/dockCard";
import { Card } from "@/components/macDock/card/card";
import { DockDivider } from "@/components/macDock/dockDivider/dockDivider";
import OpenAi from "../openAi/openAi";

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
  // 리덕스 대신 state와 함수를 프롭스로 넘겨서 전달 받고 챗봇 띄워줌
  const [chatBot, setChatBot] = React.useState<boolean>(false);

  const chatBotHandler = (chatBot: boolean) => {
    setChatBot(chatBot);
  };

  return (
    <div>
      <Dock>
        {ICONS.map((src, index) =>
          src ? (
            <DockCard
              src={src.name}
              key={src.name}
              chatBot={chatBot}
              chatBotHandler={chatBotHandler}
            >
              <Card src={src.url} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
      {chatBot === true ? <OpenAi /> : <></>}
    </div>
  );
};

export default MacDock;
