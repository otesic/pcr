"use client";
import React, { useRef, useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import * as Icons from "./icons";
import { styled } from "styled-components";
import { animated } from "@react-spring/web";
import { useRouter } from "next/navigation";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    name: string | JSX.Element;
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 0,
    },
  });

  return (
    <Frame>
      {isOpen == true ? (
        <img
          className="w-5 h-5"
          src="https://img.icons8.com/?size=512&id=1504&format=png"
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          onClick={() => setOpen(!isOpen)}
        />
      ) : children ? (
        <img
          className="w-5 h-5"
          src="https://img.icons8.com/?size=512&id=1501&format=png"
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          onClick={() => setOpen(!isOpen)}
        />
      ) : (
        <img
          className="w-5 h-5"
          src="https://img.icons8.com/?size=512&id=KgAXK0ap4Nxf&format=png"
          style={{ ...toggle, opacity: children ? 1 : 0.3 }}
          //   onClick={() => setOpen(!isOpen)}
        />
      )}
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

const Skills = () => {
  const router = useRouter();
  return (
    <Container>
      <InnerContainer>
        <Tree name="Skills" defaultOpen>
          <Tree className="flex" name="Language">
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="JavaScript"
                src="https://img.icons8.com/dusk/512/javascript.png"
              />
              JavaScript
            </div>
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="TypeScript"
                src="https://img.icons8.com/fluency/512/typescript.png"
              />
              TypeScript
            </div>
          </Tree>
          <Tree name="API 통신">
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="Axios"
                src="https://www.joshsloat.com/uploads/1/2/1/8/12181336/axiosicon-256_1_orig.png"
              />
              Axios
            </div>
          </Tree>

          <Tree name="Cooperation Tools">
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="Git"
                src="https://img.icons8.com/?size=512&id=CgWei7hH4lGJ&format=png"
              />
              Git
            </div>
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="GitHub"
                src="https://img.icons8.com/?size=512&id=118553&format=png"
              />
              GitHub
            </div>

            <div className="flex">
              <img
                className="w-5 h-5"
                alt="Notion"
                src="https://img.icons8.com/?size=512&id=AbdPtBsKKz4y&format=png"
              />
              Notion
            </div>
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="Slack"
                src="https://img.icons8.com/?size=512&id=jNNMTcOdyrj2&format=png"
              />
              Slack
            </div>
          </Tree>
          <Tree name="DataBase">
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="MongoDB"
                src="https://img.icons8.com/?size=512&id=nn5BRPhPpKAT&format=png"
              />
              MongoDB
            </div>
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="MySQL"
                src="https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png"
              />
              MySQL
            </div>
          </Tree>
          <Tree name="CSS">
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="Style-Components"
                src="https://img.icons8.com/?size=512&id=ttxR7mXaDvqS&format=png"
              />
              Style-Components
            </div>
            <div className="flex">
              <img
                className="w-5 h-5"
                alt="Tailwind"
                src="https://img.icons8.com/?size=512&id=WoopfRcDj3RF&format=png"
              />
              Tailwind
            </div>
          </Tree>
        </Tree>
      </InnerContainer>
      <InnerContainer>
        <Tree name="FrameWork / Library" defaultOpen>
          <Tree name="React.js">
            <Tree name="State Menagement">
              <div className="flex">
                <img
                  className="w-5 h-5"
                  alt="Redux"
                  src="https://img.icons8.com/color/512/redux.png"
                />
                Redux
              </div>
            </Tree>
            <Tree name="비동기 처리">
              <div className="flex">
                <img
                  className="w-5 h-5"
                  alt="ReduxThunk"
                  src="https://img.icons8.com/?size=512&id=kKz6pJYSDL24&format=png"
                />
                Redux-Thunk
              </div>
            </Tree>
          </Tree>
          <Tree name="Next.js"></Tree>
          <Tree name="Express.js">
            <span>패턴없이 간단한 컨트롤러로 프론트엔드와 연동가능합니다.</span>
          </Tree>
        </Tree>
      </InnerContainer>
      <InnerContainer>
        <Tree name="프로젝트 라이브러리" defaultOpen>
          <Tree name="React Spring">
            <span>
              지금 보고 계시는 사이트의 <br />
              전반적인 작업물을 이용한 라이브러리 입니다.
            </span>
          </Tree>
          <Tree name="i18-next">
            <span>다국적 언어 지원을 위해서 사용 했습니다.</span>
          </Tree>
          <Tree name="OpenAI">
            <span>
              기존의 챗봇 이상으로 <br />
              chatGPT를 활용해 <br />
              여러가지 질문에 응답이 가능하도록 사용했습니다.
            </span>
          </Tree>
          <Tree name="React-quill">
            <span>텍스트 에디터 활용을 위해서 사용했습니다.</span>
          </Tree>
          <Tree name="Three.js">
            <span>
              기존의 사진의 사용감을 뛰어넘어
              <br />
              3D 렌더링 사진을 감상할 수 있도록 활용했습니다.
            </span>
            <br />
          </Tree>
          <Tree name="pdf 출력">
            <span>현재의 화면을 image 또는 pdf로 활용 가능합니다.</span>
            <button onClick={() => router.push("/")}>보러가기</button>
          </Tree>
          <Tree name="OAuth">
            <span>소셜 로그인이 가능 하도록 사용했습니다.</span>
          </Tree>
          <Tree name="Infinity Scroll">
            <span>
              페이지가 내려가지 않고 <br />
              유져가 스크롤 할 때 <br />
              데이터를 불러오도록 활용했습니다.
            </span>
          </Tree>
          <Tree name="Kakao API">
            <span>Map, Login 등 여러가지를 사용했습니다.</span>
          </Tree>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/canSkills")}
          >
            기술 보러가기
          </button>
        </Tree>
      </InnerContainer>
    </Container>
  );
};
export default Skills;

const Container = styled("div")`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 24px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  /* align-items: center; */
  height: 100%;
  justify-content: center;
`;
const InnerContainer = styled("div")`
  width: 33%;
  height: 33%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  font-size: 18px;
  line-height: 21px;
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  /* align-items: center; */
  height: 100%;
  justify-content: center;
`;

const Frame = styled("div")`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
`;

const Title = styled("span")`
  vertical-align: middle;
`;

const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;

export const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle",
};
