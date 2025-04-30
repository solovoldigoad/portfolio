"use client"
import { useState, useEffect } from "react";
import "./globals.css";
import LoadingScreen from "@/components/Loading"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2400); // Simulating loading delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <body>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
