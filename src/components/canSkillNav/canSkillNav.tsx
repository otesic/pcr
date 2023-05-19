"use client";
import { RootState } from "@/app/GlobalState/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/app/GlobalState/Features/Counter/counterSlice";

const CanSkillNav = () => {
  const skillList = [
    { name: "Three.js", value: "three" },
    { name: "게시판 기능", value: "board" },
    { name: "소셜로그인", value: "oauth" },
    { name: "인피니티스크롤", value: "infinity" },
    { name: "pdf 출력", value: "pdf" },
    { name: "카카오맵활용", value: "kakao" },
  ];

  const count = useSelector((state: RootState) => state.counterRudcer.vlaue);
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
                    console.log(el.value + "클릭");
                  }}
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  {el.name}
                </a>
              );
            })}

            <a
              onClick={() => dispatch(increment())}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              리덕스 +
            </a>
            <a
              onClick={() => dispatch(decrement())}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              리덕스 -
            </a>
            <a
              onClick={() => dispatch(incrementByAmount(2))}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              어마운트 바이 2
            </a>
            {count}
          </div>
        </div>
      </nav>
    </>
  );
};
export default CanSkillNav;
