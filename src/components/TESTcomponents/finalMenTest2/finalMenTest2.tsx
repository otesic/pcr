"use client";
import * as React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";

export default function FinalMentTest2() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div>
      <div className={styles.background} />
      <Parallax pages={6}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <p className={styles.scrollText}>이런 사람입니다.</p>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>저는</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>게임 하는 것을 좋아합니다.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>축구 보는 것도 좋아합니다.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>그 어떤 것보다 개발이라는 일을 좋아합니다.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 4, end: 4 }}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>사랑하는 일을 함께 할 수 있는 회사를 찾고 있습니다.</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5, end: 6 }}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>연락 주세요</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
