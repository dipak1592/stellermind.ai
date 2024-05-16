"use client"
import React, { useState, useEffect } from 'react';
const TypingAnimation = ({ text, speed }) => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setTypedText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [currentIndex, text, speed]);
  
    return <span className="typing-animation">{typedText}</span>;
  };
  
  export default TypingAnimation;
