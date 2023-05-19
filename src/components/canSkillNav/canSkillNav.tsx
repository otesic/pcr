"use client";
import { useDispatch } from "react-redux";
import { navValue } from "@/app/GlobalState/Features/CanSkillNav/CanSkillNavSilce";

const CanSkillNav = () => {
  // 네비게이션 리스트
  const skillList = [
    { name: "Three.js", value: "three" },
    { name: "게시판 기능", value: "board" },
    { name: "소셜로그인", value: "oauth" },
    { name: "인피니티스크롤", value: "infinity" },
    { name: "pdf 출력", value: "pdf" },
    { name: "카카오맵활용", value: "kakao" },
  ];

  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            가능한 스킬
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {skillList.map((el: any, idx: number) => {
              return (
                <a
                  key={idx}
                  onClick={() => {
                    dispatch(navValue(el.value));
                  }}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer"
                >
                  {el.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
export default CanSkillNav;
