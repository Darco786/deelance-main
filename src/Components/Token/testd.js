import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './Token.json';

const LottieScrollPlayer = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, bottom } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          setIsInView(true);
        } 
        else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div ref={containerRef}>
      <Lottie
        options={defaultOptions}
        height='auto'
        width='auto'
        isPaused={!isInView}
      />
    </div>
  );
};

export default LottieScrollPlayer;