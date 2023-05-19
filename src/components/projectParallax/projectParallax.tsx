"use client";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "./styles.module.css";

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
}

const Page = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div>
        <img src="/projectPpt/1.png" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>
  </>
);

const Page2 = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div>
        <img src="/projectPpt/2.png" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      {/* <img src="/1.png" /> */}
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>
  </>
);
const Page3 = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div>
        <img src="/projectPpt/3.png" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>
  </>
);
const Page4 = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div>
        <img src="/projectPpt/4.png" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>
  </>
);
const Page5 = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div>
        <img src="/projectPpt/5.png" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>
  </>
);
const Page6 = ({ offset, gradient, onClick }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div>
        <img src="/projectPpt/6.png" />
      </div>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      {/* <span>0{offset + 1}</span> */}
    </ParallaxLayer>
  </>
);
const ProjectParallax = () => {
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={6}
        horizontal
      >
        <Page offset={0} gradient="" onClick={() => scroll(1)} />
        <Page2 offset={1} gradient="" onClick={() => scroll(2)} />
        <Page3 offset={2} gradient="" onClick={() => scroll(3)} />
        <Page4 offset={3} gradient="denger" onClick={() => scroll(4)} />
        <Page5 offset={4} gradient="denger" onClick={() => scroll(5)} />
        <Page6 offset={5} gradient="denger" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
};

export default ProjectParallax;
