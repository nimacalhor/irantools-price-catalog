import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window?.innerWidth || 500,
    height: window?.innerHeight || 500,
    breakPoint: getBreakpoint(window.innerWidth),
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      breakPoint: getBreakpoint(window.innerWidth),
    });
  };

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      breakPoint: getBreakpoint(window.innerWidth),
    });

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

function getBreakpoint(width: number): "sm" | "md" | "lg" | "xl" | "2xl" {
  if (width < 640) {
    return "sm";
  } else if (width < 768) {
    return "md";
  } else if (width < 1024) {
    return "lg";
  } else if (width < 1280) {
    return "xl";
  } else {
    return "2xl";
  }
}

export default useWindowSize;
