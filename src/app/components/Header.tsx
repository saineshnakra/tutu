// Header.tsx

'use client';

import Link from 'next/link';
import { BookOpen, Music, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-gray-700 transition-colors">
          <Music className="h-8 w-8 text-orange" />
          <span>Tutu</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/how-it-works" className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>How it Works</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
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
