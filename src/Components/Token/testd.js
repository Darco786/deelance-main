import useIntersectionObserver from "hooks/useIntersectionObserver";
import React, { useRef, useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./Token.json";

const LottieScrollPlayer = () => {
  const containerRef = useRef(null);
  const isOnScreen = useIntersectionObserver(containerRef);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div ref={containerRef}>
      <Lottie
        options={defaultOptions}
        height="auto"
        width="auto"
        isStopped={!isOnScreen}
      />
    </div>
  );
};

export default LottieScrollPlayer;
