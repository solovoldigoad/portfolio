import React from 'react';
import { cn } from '@/lib/utils';

interface BigTextProps {
  text: string;
  className?: string;
  year?: string;
  isOutline?: boolean;
}

const BigText = ({ text, className, year, isOutline = false }: BigTextProps) => {
  return (
    <div className={cn("relative", className)}>
      {year && (
        <div className="absolute -left-12 top-0 text-xs md:text-sm opacity-70">
          {year}
        </div>
      )}
      <div 
        className={cn(
          "big-text text-4xl md:text-6xl lg:text-8xl font-display tracking-tighter skew-x-[-12deg] transform-gpu perspective-[500px]",
          isOutline && "outline-text"
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default BigText;