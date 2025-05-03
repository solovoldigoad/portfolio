"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const InfiniteMovingCards = ({
  items,
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

  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-30  max-w-7xl overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-24 w-max flex-nowrap", "animate-scroll ",
        )}
      >
        {items.map((item,) => (
          <li
            className=" max-w-full relative text-[170px] flex-shrink-0 "
            key={item.quote}
          >
              <span className=" relative z-30 text-[170px]  text-white font-TitleName">
                {item.quote}
              </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
