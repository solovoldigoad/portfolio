"use client"
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [count, setCount] = useState(1);
  const [progress, setProgress] = useState(1);
  
  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
        setProgress(count + 1);
      }, 25);
      
      return () => clearTimeout(timer);
    }
  }, [count]);
  
  return (
    <div className="w-full h-screen bg-black relative">
      {/* Progress bar at the top of the screen */}
      <div className="w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Only the counter number, large size */}
      <div className="absolute bottom-8 right-8">
        <span className="text-[200px] font-bold text-white font-ProjectLine">{count}</span>
      </div>
    </div>
  );
}