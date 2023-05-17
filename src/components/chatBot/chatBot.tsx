"use client";
import React, { useState } from "react";

const ChatBot = () => {
  const [questionValue, setQuestionValue] = useState<string>("");
  const [divContent, setDivContent] = useState<string>("");

  const chatBotHandler = (questionValue: string) => {
    if (questionValue) {
      setDivContent(questionValue);
    }
    setQuestionValue("");
  };

  return (
    <div className="relative h-50 w-50 float-right">
      {divContent && <div>{divContent}</div>}
      <input
        onChange={(e) => setQuestionValue(e.currentTarget.value)}
        className="bg-transparent outline-0 flex-1 px-3"
        placeholder="내용 입력"
      />
      <button
        onClick={() => chatBotHandler(questionValue)}
        className="bg-primary px-3 py-1.5 text-sm text-light rounded-lg"
      >
        전송
      </button>
    </div>
  );
};

export default ChatBot;
