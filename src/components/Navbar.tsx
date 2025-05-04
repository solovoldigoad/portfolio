"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { number: "01", label: "home", href: "#home" },
    { number: "02", label: "expertise", href: "#expertise" },
    { number: "03", label: "work", href: "#work" },
    { number: "04", label: "experience", href: "#experience" },
    { number: "05", label: "contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#0a0e17] shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-[#3BBDC4] text-2xl md:text-3xl font-bold">
            RC._
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className={cn(
                  "transition-colors group flex items-center",
                  isScrolled ? "text-[#3BBDC4] hover:text-white" : "text-white hover:text-[#3BBDC4]",
                )}
              >
                <span className={cn("text-sm mr-2", isScrolled ? "text-gray-300" : "text-gray-400")}>
                  {item.number}
                </span>
                <span className="group-hover:underline">`// ${item.label}`</span>
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17] border-t border-gray-800">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className={cn(
                  "py-3 border-b border-gray-800 flex items-center transition-colors",
                  isScrolled ? "text-[#3BBDC4] hover:text-white" : "text-white hover:text-[#3BBDC4]",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className={cn("text-sm mr-2 w-8", isScrolled ? "text-gray-300" : "text-gray-400")}>
                  {item.number}
                </span>
                <span>`// {item.label}`</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

