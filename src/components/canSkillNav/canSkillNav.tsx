"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { LoginModalState } from "@/app/GlobalState/Features/LoginModal/LoginModalSlice";
import { RootState } from "@/app/GlobalState/store";
import LoginModal from "../canSkillBody/loginModal/loginModal";
import { signIn, signOut, useSession } from "next-auth/react";

interface sessionType {
  sessionValue: any;
}

const CanSkillNav = ({ sessionValue }: sessionType) => {
  // 네비게이션 리스트
  const skillList = [
    { name: "Three.js", value: "three" },
    { name: "게시판 기능", value: "board" },
    { name: "인피니티스크롤", value: "infinity" },
    { name: "pdf 출력", value: "pdf" },
    { name: "카카오맵활용", value: "kakao" },
  ];

  // 리덕스 굳이 안쓰고 페이지 라우팅으로 해결해도 될수도
  // 어짜피 컴포넌트 만들었어도 url 변경일어나고 페이지 이동 되어야 할듯
  const dispatch = useDispatch();
  const router = useRouter();
  const LoginState = useSelector(
    (state: RootState) => state.loginModalReducer.vlaue
  );

  // layout에서 sessionProvider로 감싼다음에 useSession으로 회원 정보 활용
  // usesession {data: {…}, status: 'authenticated', update: ƒ} 데이터 안에 회원정보 있음
  // console.log("usesession", se);
  const se = useSession();

  const outTest = async () => {
    await localStorage.clear();
    signOut();
    console.log(123);
  };
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span
            className="font-semibold text-xl tracking-tight cursor-pointer"
            onClick={() => router.push("/canSkills")}
          >
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
                    // dispatch(navValue(el.value));
                    console.log("나브 클릭됨" + el.value);
                    if (el.value == "three") {
                      router.push("/canSkills/three");
                    } else if (el.value == "board") {
                      router.push("/canSkills/board");
                    } else if (el.value == "infinity") {
                      router.push("/canSkills/infinity");
                    } else if (el.value == "pdf") {
                      router.push("/canSkills/pdf");
                    } else if (el.value == "kakao") {
                      router.push("/canSkills/kakao");
                    }
                  }}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer"
                >
                  {el.name}
                </a>
              );
            })}
            로그인 상태 : {sessionValue}
            {sessionValue != null ? (
              <>
                {/* <h1>반가워 : {sessionValue?.user?.name}</h1> */}
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer float-right"
                  onClick={() => outTest()}
                >
                  로그아웃
                </a>
              </>
            ) : (
              <a
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer float-right"
                onClick={() => dispatch(LoginModalState(!LoginState))}
              >
                로그인
              </a>
            )}
          </div>
        </div>
      </nav>
      {LoginState && <LoginModal LoginState={LoginState} />}
    </>
  );
};
export default CanSkillNav;
