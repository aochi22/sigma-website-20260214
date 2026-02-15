import React from 'react';
import Image from 'next/image';

const CtaMission = () => {
  return (
    <section 
      className="relative bg-[#F2F2F2] py-[120px] px-10 xl:px-20 flex justify-center items-center overflow-hidden"
      aria-labelledby="cta-mission-headline"
    >
      {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&h=1080&fit=crop&q=80"
          alt="Data analytics visualization"
          fill
          className="object-cover opacity-10"
        />
      <div className="relative z-10 bg-white max-w-[740px] w-full pt-[80px] pb-[80px] px-8 sm:px-16 md:px-24 flex flex-col items-center text-center shadow-lg">
        <h2 
          id="cta-mission-headline"
          className="text-[#111111] font-display text-[42px] md:text-[48px] font-normal leading-[1.1] md:leading-[1.2] tracking-[-0.01em] mb-8 max-w-[600px]"
        >
          Your data has a story to tell
        </h2>
        
        <p className="text-[#111111] font-body text-[18px] md:text-[20px] font-normal leading-[1.6] mb-12 max-w-[500px]">
          Sigma Intelligence helps organizations unlock the full potential of their data with cutting-edge analytics.
        </p>
        
        <a 
          href="/about/"
          className="inline-flex items-center justify-center px-[22px] py-[10px] border border-[#E5E5E5] text-[12px] font-medium tracking-[0.1em] text-[#111111] uppercase transition-colors hover:bg-[#F2F2F2] duration-200"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  );
};

export default CtaMission;