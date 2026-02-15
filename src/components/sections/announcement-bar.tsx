"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * AnnouncementBar Component
 * 
 * Clones the top black announcement bar featuring CEO Alex Karp’s Letter to Shareholders.
 * Features:
 * - Black background (#111111)
 * - White minimalist typography
 * - Close button with minimal X icon
 * - Responsive layout
 */
export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="bg-[#111111] text-white w-full relative z-[100]"
      style={{
        fontFamily: "'Inter', 'Helvetica', sans-serif",
      }}
      data-testid="announcement-bar"
    >
      <div className="container mx-auto px-10 xl:px-20 h-[50px] flex items-center justify-center relative">
        <div className="text-[12px] md:text-[13px] font-normal tracking-[0.01em] text-center">
            <p className="m-0">
              Introducing Sigma Analytics Pro —{" "}
              <a
                href="/analytics-pro"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity font-medium"
              >
                Learn More
              </a>
            </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-6 md:right-10 xl:right-20 p-2 hover:opacity-70 transition-opacity focus:outline-none flex items-center justify-center"
          aria-label="Close announcement"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M1 1L11 11M1 11L11 1"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}