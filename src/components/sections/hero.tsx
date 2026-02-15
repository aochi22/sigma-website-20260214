import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-black text-white">
      {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&q=80"
          alt="AI neural network visualization"
          fill
          className="object-cover opacity-50"
          priority
        />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/30 to-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center select-none">
          <h1 className="h1-hero text-white max-w-[900px]">
            <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Transform Your Data
            </span>
            <br />
            <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Into Actionable Insights
            </span>
          </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 animate-in fade-in duration-1000 delay-700">
          <div className="flex flex-col items-center">
             <svg 
              width="16" 
              height="19" 
              viewBox="0 0 16 19" 
              fill="none" 
              className="text-white mb-2"
            >
              <path 
                d="M8 0V17M8 17L1 10M8 17L15 10" 
                stroke="currentColor" 
                strokeWidth="1.5"
              />
            </svg>
            <p className="earmark text-white/80 tracking-[0.2em] text-[10px]">
              Scroll to Explore
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .h1-hero {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 5rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        
        .earmark {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .h1-hero {
            font-size: 2.75rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;