"use client";
import ChatBot from "@/components/chatBot/chatBot";
import { useState } from "react";

export default function Home() {
  const [chatBotToggle, setChatBotToggle] = useState(false);
  return (
    <div>
      <h1>메인페이지</h1>
      <button
        style={{ background: "orange" }}
        onClick={() => setChatBotToggle(!chatBotToggle)}
      >
        챗봇
      </button>
      <ChatBot chatBotToggle={chatBotToggle}></ChatBot>
    </div>
  );
}
