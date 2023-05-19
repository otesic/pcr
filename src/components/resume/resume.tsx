import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="flex">
        <div className="float-left  flex-auto relative">
          <img src="/resume/이력사진.jpg" />
        </div>
        <div className="flex-auto relative">
          <div className="relative">
            <div className="text-4xl">박철련</div>
            <div className="text-lg">프론트엔드 개발자</div>
          </div>
        </div>
        <div className="float-right relative">
          <div className="text-lg ">깃헙 아이콘</div>
          <div className="text-lg">이메일 아이콘</div>
          <div className="text-lg">티스토리 아이콘</div>
        </div>
      </div>
      <br />
      <br />
      <div className="text-xl text-center">Introduce</div>
      <hr></hr>
      <div className="text-lg text-center">
        저는 무슨 일을 하던지 반복적인 일을 어떻게 줄일까? 어떻게 하면 좀 더
        효율적으로 일할수있을까? 라는 생각을 굉장히 많이 했었습니다. 그러다
        개발자라는 직업이 가지는 방향성이 저의 관심과 같다고 생각해서 개발자에
        도전하게 되었습니다. 개발자라는 직업에 진정성을 가지고 JS 및 React를
        비롯한 프론트엔드 필수 역량을 쌓으려 노력했고, 여러 강의와 기술 블로그
        등을 찾아보며 프론트엔드에 관심을 늘려가고 있습니다. 빠르게 변화하는
        프론트엔드 시장에서 중심을 잃지 않고, 항상 기술사용의 이유를 찾는
        개발자가 되겠습니다.
      </div>
      <br />
      <div className="text-xl text-center">Skills</div>
      <hr></hr>
    </div>
  );
};

export default Resume;
