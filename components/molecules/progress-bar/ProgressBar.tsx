import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { ProgressBarProps } from "./types";
import delayExecution from "@/utils/timers/delayExecution";

const ProgressBar = (props: ProgressBarProps) => {
  const {
    duration,
    height,
    className = "",
    totalProgresses = 1,
    currentProgress = 0,
  } = props;

  const [scope, animate] = useAnimate();

  const stepPercent = 100 / totalProgresses;

  const totalProgressMap = Array.from(Array(totalProgresses).keys()).map(
    (item) => ({ per: stepPercent * item })
  );

  const resetAnimation = async (index: number) => {
    if (index === 0) {
      animate(scope.current, { width: 0 }, { duration: 0, ease: "linear" });
      await delayExecution(100);
    } else {
      animate(
        scope.current,
        { width: `${totalProgressMap?.[index]?.per ?? 100}%` },
        { duration: 0, ease: "linear" }
      );
      await delayExecution(100);
    }
  };

  const startAnimation = async (index: number, duration = 0) => {
    await resetAnimation(index);
    if (index === 0) {
      if (totalProgressMap.length <= 1) {
        animate(scope.current, { width: "100%" }, { duration, ease: "linear" });
      } else {
        animate(
          scope.current,
          { width: `${totalProgressMap[1].per}%` },
          { duration, ease: "linear" }
        );
      }
    } else {
      animate(
        scope.current,
        { width: `${totalProgressMap?.[index + 1]?.per ?? 100}%` },
        { duration, ease: "linear" }
      );
    }
  };

  useEffect(() => {
    startAnimation(currentProgress, duration);
  }, [currentProgress, totalProgresses]);

  return (
    <div className={`w-full ${className} relative`}>
      {totalProgressMap.map((item) => {
        if (item.per === 0) return null;
        return (
          <div
            style={{ left: `${item.per}%` }}
            key={item.per.toString()}
            className={`h-full absolute w-1 bg-slate-500 right-${item}`}
          />
        );
      })}
      <div
        className={`w-full bg-black rounded overflow-hidden`}
        style={{ height: `${height}px` }}
      >
        <motion.div
          ref={scope}
          initial={{ width: 0 }}
          className="h-full bg-pink-500"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
