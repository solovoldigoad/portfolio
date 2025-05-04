"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",  speed = "fast",
  className,
}: {
  items: {
    quote: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  
  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);
  
  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      else if (speed === "slow") duration = "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);
  
  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
  
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
  
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-10  w-full overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-24 w-max flex-nowrap",
          start ? "animate-scroll" : "",
        )}
      >
        {items.map((item,) => (
          <li
            className=" max-w-full z-10 relative text-[150px] flex-shrink-0 "
            key={item.quote}
          >
              <span className=" relative z-10 text-[150px]  text-white font-TitleName">
                {item.quote}
              </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
