"use client";
import React, { useState, useEffect } from "react";

const AnimatedCounter = ({ initialValue, finalValue, duration }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const startAnimation = (timestamp) => {
      startTime = timestamp || performance.now();
      animationFrameId = requestAnimationFrame(animate);
    };

    const animate = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const nextValue = Math.floor(
        initialValue + (finalValue - initialValue) * progress
      );
      setCount(nextValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    startAnimation();

    return () => cancelAnimationFrame(animationFrameId);
  }, [initialValue, finalValue, duration]);

  return <span>{count}</span>;
};

// const Counter = () => {
//   return (
//     <div>
//       <h2>Statistics</h2>
//       <div>
//         Clients:
//         <AnimatedCounter initialValue={0} finalValue={100} duration={5000} />
//       </div>
//       <div>
//         Projects Completed:
//         <AnimatedCounter initialValue={0} finalValue={50} duration={1500} />
//       </div>
//     </div>
//   );
// };

export default AnimatedCounter;
