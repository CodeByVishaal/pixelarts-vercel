import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, duration, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // trigger once when visible

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default Counter;
