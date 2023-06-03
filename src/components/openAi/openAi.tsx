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
            // Authorization:
            // `Bearer ` + "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",
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
    <div className="z-40 bg-white shadow-lg shadow-cyan-800 rounded-lg w-96 h-96 relative mx-auto p-4 m-auto flex">
      {/* <div className="text-center">ChatBot에게 질문해 보세요</div> */}
      <div className="flex flex-col space-y-2 w-full relative pb-16 overflow-y-auto">
        {chat.map((el: any, idx: number) => (
          <React.Fragment key={idx}>
            {idx % 2 === 0 ? (
              <div className="flex items-start">
                {/* 유저 질문 */}
                <div className="bg-blue-500 text-white p-2 rounded-md">
                  <img
                    className="w-5 h-5 flex-auto"
                    src="https://img.icons8.com/?size=512&id=21441&format=png"
                  />
                  <span>{el.text}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-end justify-end">
                <div className="bg-gray-200 p-2 rounded-md">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=512&id=102886&format=png"
                  />
                  <span>{el.text}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex mt-4 bottom-0 absolute w-11/12 h-12 mb-4">
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
            className="bg-white hover:white text-white rounded-r-lg px-4 py-2"
            type="submit"
            onClick={submitQuestion}
            disabled={waitAnswer}
          >
            <img className="w-8 h-8 bg-white" src="/spinner2.gif" />
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2"
            type="submit"
            onClick={submitQuestion}
            disabled={waitAnswer}
          >
            <img
              className="w-8 h-8 "
              src="	https://img.icons8.com/?size=512&id=43190&format=png"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default OpenAi;
