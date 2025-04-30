"use client";

import { useState } from "react";

const UiButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [content, setContent] = useState("");

  const animationFrames = [
    "#", ".", "^{", "-!", "#$_", "№:0", "#{+.", "@}-?", "?{4@%", "=.,^!", "?2@%", "\\;1}]",
    "?{%:%", "|{f[4", "{4%0%", "'1_0<", "{0%", "]>'", "4", "2", ""
  ];

  const startAnimation = () => {
    setIsHovered(true);
    let index = 0;

    const interval = setInterval(() => {
      setContent(animationFrames[index]);
      index++;

      if (index >= animationFrames.length) {
        clearInterval(interval);
        setContent("");
      }
    }, 60); // Total duration roughly 1.2s (60ms * 20 frames)
  };

  const stopAnimation = () => {
    setIsHovered(false);
    setContent("");
  };

  return (
    <button
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      className="flex items-center justify-center px-5 py-3 bg-neutral-800 text-white font-semibold text-[16px] font-mono rounded shadow-md transition duration-300 overflow-hidden relative hover:bg-neutral-700 focus:bg-neutral-700"
    >
      <span className="relative tracking-[.1rem] transition-all duration-300">
        {isHovered && content ? (
          <span className="absolute inset-0">{content}</span>
        ) : (
          "Button"
        )}
      </span>
    </button>
  );
};

export default UiButton;
