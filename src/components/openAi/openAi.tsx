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
            Authorization: `Bearer ` + process.env.NEXT_PUBLIC_OPENAI_API_KEY2,
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
    <div className="relative z-40 m-auto mx-auto flex h-96 w-96 rounded-lg bg-white p-4 shadow-lg shadow-cyan-800">
      {/* <div className="text-center">ChatBot에게 질문해 보세요</div> */}
      <div className="relative flex w-full flex-col space-y-2 overflow-y-auto pb-16">
        {chat.map((el: any, idx: number) => (
          <React.Fragment key={idx}>
            {idx % 2 === 0 ? (
              <div className="flex items-start">
                {/* 유저 질문 */}
                <div className="rounded-md bg-blue-500 p-2 text-white">
                  <img
                    className="h-5 w-5 flex-auto"
                    src="https://img.icons8.com/?size=512&id=21441&format=png"
                  />
                  <span>{el.text}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-end justify-end">
                <div className="rounded-md bg-gray-200 p-2">
                  <img
                    className="h-5 w-5"
                    src="https://img.icons8.com/?size=512&id=102886&format=png"
                  />
                  <span>{el.text}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="absolute bottom-0 mb-4 mt-4 flex h-12 w-11/12">
        <input
          className="flex-grow rounded-l-lg border border-gray-300 px-4 py-2"
          onChange={questionsHandler}
          value={questions || ""}
          onKeyDown={onKeyPress}
          disabled={waitAnswer}
          placeholder="챗봇에게 물어보기"
        />

        {waitAnswer ? (
          <button
            className="hover:white rounded-r-lg bg-white px-4 py-2 text-white"
            type="submit"
            onClick={submitQuestion}
            disabled={waitAnswer}
          >
            <img className="h-8 w-8 bg-white" src="/spinner2.gif" />
          </button>
        ) : (
          <button
            className="rounded-r-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            type="submit"
            onClick={submitQuestion}
            disabled={waitAnswer}
          >
            <img
              className="h-8 w-8 "
              src="	https://img.icons8.com/?size=512&id=43190&format=png"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default OpenAi;
