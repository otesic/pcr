"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NaviTest = () => {
  const router = useRouter();
  const nowPath = usePathname();

  const go = () => {
    if (nowPath == "/") {
      router.push("/resume");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      {nowPath == "/" ? (
        <button onClick={go}>go resume</button>
      ) : (
        <>
          <button onClick={go}>go main</button>
          <button onClick={() => router.push("/darkMode")}>go darkMode</button>
        </>
      )}
    </div>
  );
};

export default NaviTest;
