import * as React from "react";
import {
  animated,
  useIsomorphicLayoutEffect,
  useSpringValue,
} from "@react-spring/web";

import { useMousePosition } from "../hooks/useMousePosition";
import { useWindowResize } from "../hooks/useWindowResize";

import styles from "./styles.module.scss";
import { useDock } from "../dock/dockCentext";
import { useRouter } from "next/navigation";

interface DockCardProps {
  children: React.ReactNode;
  src: string;
  chatBot: boolean;
  chatBotHandler: (chatBot: boolean) => void;
}

const INITIAL_WIDTH = 48;

export const DockCard = ({
  children,
  src,
  chatBot,
  chatBotHandler,
}: DockCardProps) => {
  const cardRef = React.useRef<HTMLButtonElement>(null!);
  /**
   * This doesn't need to be real time, think of it as a static
   * value of where the card should go to at the end.
   */
  const [elCenterX, setElCenterX] = React.useState<number>(0);

  const size = useSpringValue(INITIAL_WIDTH, {
    config: {
      mass: 0.1,
      tension: 320,
    },
  });

  const opacity = useSpringValue(0);
  const y = useSpringValue(0, {
    config: {
      friction: 29,
      tension: 238,
    },
  });

  const dock = useDock();

  /**
   * This is just an abstraction around a `useSpring` hook, if you wanted you could do this
   * in the hook above, but these abstractions are useful to demonstrate!
   */
  useMousePosition(
    {
      onChange: ({ value }) => {
        const mouseX = value.x;

        if (dock.width > 0) {
          const transformedValue =
            INITIAL_WIDTH +
            36 *
              Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) **
                12;

          if (dock.hovered) {
            size.start(transformedValue);
          }
        }
      },
    },
    [elCenterX, dock]
  );

  useIsomorphicLayoutEffect(() => {
    if (!dock.hovered) {
      size.start(INITIAL_WIDTH);
    }
  }, [dock.hovered]);

  useWindowResize(() => {
    const { x } = cardRef.current.getBoundingClientRect();

    setElCenterX(x + INITIAL_WIDTH / 2);
  });

  const timesLooped = React.useRef(0);
  const timeoutRef = React.useRef<any>();
  const isAnimating = React.useRef(false);
  const router = useRouter();

  // macDock 네비게이트 함수
  const handleClick = () => {
    if (src == "home") {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else if (src == "resume") {
      setTimeout(() => {
        router.push("/resume");
      }, 2000);
    } else if (src == "skill") {
      setTimeout(() => {
        router.push("/skill");
      }, 2000);
    } else if (src == "study") {
      setTimeout(() => {
        router.push("/study");
      }, 2000);
    } else if (src == "finalMent") {
      setTimeout(() => {
        router.push("/finalMent");
      }, 2000);
    } else if (src == "project") {
      setTimeout(() => {
        router.push("/project");
      }, 2000);
    } else if (src == "chatBot") {
      setTimeout(() => {
        chatBotHandler(!chatBot);
      }, 2000);
    }

    if (!isAnimating.current) {
      isAnimating.current = true;
      opacity.start(0.5);

      timesLooped.current = 0;

      y.start(-INITIAL_WIDTH / 2, {
        loop: () => {
          if (3 === timesLooped.current++) {
            timeoutRef.current = setTimeout(() => {
              opacity.start(0);
              y.set(0);
              isAnimating.current = false;
              timeoutRef.current = undefined;
            }, 1000);
            y.stop();
          }
          return { reverse: true };
        },
      });
    } else {
      /**
       * Allow premature exit of animation
       * on a second click if we're currently animating
       */
      clearTimeout(timeoutRef.current);
      opacity.start(0);
      y.start(0);
      isAnimating.current = false;
    }
  };

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);
  return (
    <div className={styles["dock-card-container"]}>
      <animated.button
        ref={cardRef}
        className={styles["dock-card"]}
        onClick={handleClick}
        style={{
          width: size,
          height: size,
          y,
        }}
      >
        {children}
      </animated.button>
      <animated.div className={styles["dock-dot"]} style={{ opacity }} />
    </div>
  );
};
