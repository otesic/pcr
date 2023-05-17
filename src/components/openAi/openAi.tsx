// import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import Image from "next/image";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FaSpinner, FaTruckLoading } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const OpenAi = () => {
  const [questions, setQuestions] = useState<string>();
  const [chat, setChat] = useState<any>([]);
  const [waitAnswer, setWaitAnswer] = useState(false);

  const chatAi = async (data: string) => {
    try {
      const pos = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: `${data}`,
          temperature: 0.9,
          max_tokens: 521,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0.6,
          stop: [" Human:", " AI:"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + "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",
          },
        }
      );
      console.log(pos);

      setChat((prev: any) => [
        ...prev,
        { text: pos.data.choices[0].text, id: pos.data.id },
      ]);
      setWaitAnswer((prev) => !prev);
    } catch (error: any) {
      console.log(error);
      setWaitAnswer((prev) => !prev);
      alert("오류가 발생하였습니다.");
      setQuestions("");
      setChat([]);
    }
  };

  const questionsHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestions(e.target.value);
  };

  const submitQuestion = () => {
    if (!questions) {
      return null;
    }
    setWaitAnswer((prev) => !prev);
    setChat((prev: any) => [...prev, { text: questions, id: uuidv4() }]);
    chatAi(questions);
    setQuestions("");
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitQuestion();
    }
  };
  return (
    <div className="z-40 bg-white shadow-lg shadow-cyan-800 rounded-lg w-80 h-80 relative  overflow-y-auto m-auto">
      <div className="text-center">ChatBot에게 질문해 보세요</div>
      <div className="overflow-auto h-52">
        {chat.map((el: any, idx: number) => (
          <React.Fragment key={idx}>
            {idx % 2 === 0 ? (
              <div className="relative flex">
                {/* 유저 질문 */}
                <div className="flex">
                  <img
                    className="w-5 h-5 flex-auto"
                    src="https://img.icons8.com/?size=512&id=21441&format=png"
                  />
                  - {el.text}
                </div>
              </div>
            ) : (
              <div className="relative flex">
                <div className="flex">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=512&id=102886&format=png"
                  />
                  - {el.text}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div
        className=" p-3 
        bg-component 
        dark:bg-component-dark 
        text-dark
        dark:text-light
        flex 
        items-center
        shadow-lg
        rounded-lg
        mt-7
        absolute
        inset-x-0
        w-full
        "
      >
        <input
          className="
          bg-transparent outline-0 flex-1 px-3"
          onChange={questionsHandler}
          value={questions || ""}
          onKeyDown={onKeyPress}
          disabled={waitAnswer}
          placeholder="챗봇에게 물어보기"
        />

        {waitAnswer ? (
          <button
            className="bg-primary px-3 py-1.5 text-lg text-light rounded-lg"
            type="submit"
            onClick={submitQuestion}
            disabled={waitAnswer}
          >
            <img className="w-8 h-8 bg-white" src="/spinner2.gif" />
          </button>
        ) : (
          <button
            className="bg-primary px-3 py-1.5 text-lg text-light rounded-lg"
            type="submit"
            onClick={submitQuestion}
            disabled={waitAnswer}
          >
            전송
          </button>
        )}
      </div>
    </div>
  );
};

export default OpenAi;
