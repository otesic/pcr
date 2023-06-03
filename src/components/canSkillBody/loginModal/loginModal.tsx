"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { LoginModalState } from "@/app/GlobalState/Features/LoginModal/LoginModalSlice";
import { usePathname, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { error } from "console";
interface propsType {
  LoginState: boolean;
}
export default function LoginModal({ LoginState }: propsType) {
  const dispatch = useDispatch();
  const cancelButtonRef = useRef(null);
  const router = useRouter();

  // 회원 가입 핸들러
  const joinHandler = async () => {
    await dispatch(LoginModalState(!LoginState));
    router.push("/canSkills/join");
  };

  // 로그인 핸들러 지울거임
  // const loginHandler = async () => {
  //   await dispatch(LoginModalState(!LoginState));
  //   console.log(userInput);

  //   fetch("/api/auth/signIn", {
  //     method: "POST",
  //     body: userInput,
  //   }).then(() => {
  //     // 로그인 이후에 라우팅
  //     router.push("/canSkills");
  //   });
  // };

  // 현재 경로 찾기
  const path: any = usePathname();
  const login = async (e: any) => {
    // 원래 실행되는 이벤트 취소
    // router.pathname
    e.preventDefault();
    // Form 안에서 이메일, 패스워드 가져오기
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signIn("email-password-credential", {
      email,
      password,
      redirect: false,
    }).then((err: any) => {
      if (err.error !== null) {
        alert("오류");
      } else {
        // 모달 끄고 현재 페이지로 라우팅 시킴
        dispatch(LoginModalState(!LoginState));
        router.push(path);
      }
    });
  };

  const githubLogin = async () => {
    await signIn("github");
  };

  return (
    <Transition.Root show={LoginState} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(LoginModalState(!LoginState))}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        로그인
                      </Dialog.Title>
                      <div className="mt-2">
                        <form onSubmit={login}>
                          <label>
                            이메일 :
                            <input
                              type="email"
                              name="email"
                              placeholder="id 입력"
                            />
                          </label>
                          <label>
                            비밀번호 :
                            <input
                              type="password"
                              name="password"
                              placeholder="pw 입력"
                            />
                          </label>
                          <button type="submit">로그인</button>
                        </form>
                        <br />
                        <br />
                        <br />
                        <span className="cursor-pointer" onClick={joinHandler}>
                          회원가입 하러가기
                        </span>
                        <button className="bg-red-200" onClick={() => signIn()}>
                          깃헙로그인
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
