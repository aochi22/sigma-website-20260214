"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

/**
 * Header component for Sigma Intelligence.
 * Implements a transparent sticky header with absolute positioning transition based on scroll.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 w-full flex items-center justify-between px-10 py-6 pointer-events-none ${
          isScrolled ? 'bg-transparent' : 'bg-transparent'
        }`}
      >
        {/* Logo Container */}
        <div className="pointer-events-auto">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Sigma Intelligence">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xl">Σ</span>
            </div>
            <span className="text-white text-[18px] font-medium tracking-tight hidden sm:inline">
              Sigma Intelligence
            </span>
          </Link>
        </div>

        {/* Right Utility Buttons */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Get Started Button */}
          <Link 
            href="/contact" 
            className="hidden md:flex items-center gap-2 bg-white text-[#111111] px-5 py-2.5 text-[14px] font-medium border border-transparent hover:bg-white/90 transition-all duration-200"
          >
            <span className="text-[14px] leading-none mb-0.5">↖</span>
            <span>Get Started</span>
          </Link>

          {/* Search Button */}
          <button 
            className="p-3 bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 group"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5 overflow-hidden">
              <span className={`block h-[1.5px] bg-current transform transition-transform duration-300 origin-center ${isMenuOpen ? 'translate-y-[7.5px] rotate-45' : ''}`}></span>
              <span className={`block h-[1.5px] bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-[1.5px] bg-current transform transition-transform duration-300 origin-center ${isMenuOpen ? '-translate-y-[7.5px] -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Full-screen Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0a0a]/95 z-[70] transition-transform duration-500 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-end p-10">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-3 text-white hover:text-white/70 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-grow flex items-center px-10 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
            <div className="flex flex-col gap-6">
              <span className="text-[#666666] text-[12px] uppercase tracking-widest font-medium">Platform</span>
              <ul className="flex flex-col gap-4 text-white text-[24px] md:text-[32px]">
                <li><Link href="/analytics" className="hover:text-white/60 transition-colors">Analytics Suite</Link></li>
                <li><Link href="/platforms/insight" className="hover:text-white/60 transition-colors">↳ Insight</Link></li>
                <li><Link href="/platforms/discover" className="hover:text-white/60 transition-colors">↳ Discover</Link></li>
                <li><Link href="/platforms/predict" className="hover:text-white/60 transition-colors">↳ Predict</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[#666666] text-[12px] uppercase tracking-widest font-medium">Resources</span>
              <ul className="flex flex-col gap-4 text-white text-[24px]">
                <li><Link href="/documentation" className="hover:text-white/60 transition-colors">Documentation</Link></li>
                <li><Link href="/careers" className="hover:text-white/60 transition-colors">Careers</Link></li>
                <li><Link href="/newsroom" className="hover:text-white/60 transition-colors">Newsroom</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;