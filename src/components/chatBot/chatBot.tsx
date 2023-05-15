import React from "react";

interface chatBotToggleType {
  chatBotToggle: boolean;
}
const ChatBot = ({ chatBotToggle }: chatBotToggleType) => {
  return <>{chatBotToggle && <div>챗봇 클릭됨</div>}</>;
};

export default ChatBot;
