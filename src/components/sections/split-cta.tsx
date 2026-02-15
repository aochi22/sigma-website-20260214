import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * SplitCTA component
 * 
 * Replicates the dual-button call to action section with two large side-by-side blocks:
 * 1. "Request a Demo" - Light gray background (#D9D9D9 / rgb(217, 217, 217))
 * 2. "Start Building" - Dark charcoal background (#1A1A1A / rgb(26, 26, 26))
 * 
 * Design characteristics:
 * - Sharp corners (0px border-radius)
 * - Industrial aesthetic
 * - Right-aligned arrow icons
 * - High contrast monochromatic palette
 * - Large typographic weight
 */

const SplitCTA: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full min-h-[160px] md:h-[220px]">
        {/* Request a Demo Block */}
        <a 
          href="/contact"
          className="group relative flex flex-1 items-center justify-between px-10 py-12 md:px-16 transition-colors duration-300"
          style={{ 
            backgroundColor: '#D9D9D9',
            color: '#111111',
            textDecoration: 'none'
          }}
        >
          <span 
            className="text-[32px] md:text-[48px] font-normal tracking-tight leading-tight"
            style={{ 
              fontFamily: 'var(--font-display), "Inter", Helvetica, sans-serif'
            }}
          >
            Request a Demo
          </span>
          <div className="flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight size={32} strokeWidth={1.5} />
          </div>
        </a>

        {/* Start Building Block */}
        <a 
          href="/platforms/aip"
          className="group relative flex flex-1 items-center justify-between px-10 py-12 md:px-16 transition-colors duration-300"
          style={{ 
            backgroundColor: '#1A1A1A',
            color: '#FFFFFF',
            textDecoration: 'none'
          }}
        >
          <span 
            className="text-[32px] md:text-[48px] font-normal tracking-tight leading-tight"
            style={{ 
              fontFamily: 'var(--font-display), "Inter", Helvetica, sans-serif'
            }}
          >
            Start Building
          </span>
          <div className="flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-2">
            <ArrowRight size={32} strokeWidth={1.5} />
          </div>
        </a>
      </div>
      
      {/* Structural bottom border/spacing found in the original design before footer */}
      <div className="w-full h-[60px] bg-white hidden md:block" />
    </section>
  );
};

export default SplitCTA;