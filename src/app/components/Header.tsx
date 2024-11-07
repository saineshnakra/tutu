// Header.tsx

"use client";

import Link from "next/link";
import { BookOpen, Music, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md opacity-90" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold hover:text-gray-700 transition-colors"
        >
          <Music className="h-8 w-8 text-orange" />
          <span>Tutu</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/how-it-works"
                className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
              >
                <BookOpen className="h-5 w-5" />
                <span>How it Works</span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
