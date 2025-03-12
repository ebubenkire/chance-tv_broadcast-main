'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black/95 backdrop-blur-md text-white border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-xl font-bold group"
            >
              <span className="text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                ChanceTv Studios
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                About
              </Link>
              <Link 
                href="/events" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                Events
              </Link>
              <Link 
                href="/careers" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                Careers
              </Link>
              <Link 
                href="/academy" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                Academy
              </Link>
              <Link 
                href="/auditions" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                Auditions
              </Link>
              <Link 
                href="/voting" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                Vote
              </Link>
              <Link 
                href="/streaming" 
                className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
              >
                Streaming
              </Link>
              
              {session ? (
                <div className="flex items-center space-x-6">
                  <span className="text-gray-300 px-3 py-2">
                    {session.user?.name}
                  </span>
                  <button
                    onClick={() => signOut()}
                    className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth"
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/5 transition-all duration-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/95 backdrop-blur-md border-t border-white/10`}>
        <div className="px-4 pt-2 pb-3 space-y-2">
          <Link
            href="/about"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/events"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Events
          </Link>
          <Link
            href="/careers"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Careers
          </Link>
          <Link
            href="/academy"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Academy
          </Link>
          <Link
            href="/auditions"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Auditions
          </Link>
          <Link
            href="/voting"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Vote
          </Link>
          <Link
            href="/streaming"
            className="block text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
          >
            Streaming
          </Link>
          
          {session ? (
            <>
              <div className="px-3 py-2.5 text-gray-300 border-t border-white/10 mt-4">
                {session.user?.name}
              </div>
              <button
                onClick={() => {
                  signOut();
                  toggleMenu();
                }}
                className="w-full text-left bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2.5 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 mt-2"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="block w-full text-left bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2.5 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 mt-4"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
} 