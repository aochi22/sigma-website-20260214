"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";


interface CarouselItem {
  id: string;
  category: string;
  earmark: string;
  title: string;
  image: string;
  href: string;
}

const CAROUSEL_DATA: CarouselItem[] = [
  {
    id: "data-engineering",
    category: "Data Engineering",
    earmark: "Data Engineering",
    title: "Build Robust Data Pipelines and Infrastructure at Scale",
      image: "/images/data-engineering.png",
    href: "/services/data-engineering"
  },
  {
    id: "business-intelligence",
    category: "Business Intelligence",
    earmark: "Business Intelligence",
    title: "Transform Raw Data Into Actionable Business Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&q=80",
    href: "/services/business-intelligence"
  },
  {
    id: "data-visualization",
    category: "Data Visualization",
    earmark: "Data Visualization",
    title: "Create Compelling Visual Narratives From Complex Data",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=80",
    href: "/services/data-visualization"
  },
  {
    id: "machine-learning",
    category: "Machine Learning",
    earmark: "Machine Learning",
    title: "Develop Predictive Models That Unlock Hidden Potential",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop&q=80",
    href: "/services/machine-learning"
  },
  {
    id: "ai-solutions",
    category: "AI Solutions",
    earmark: "Artificial Intelligence",
    title: "Harness the Power of AI to Automate and Innovate",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=675&fit=crop&q=80",
    href: "/services/ai-solutions"
  },
  {
    id: "data-science",
    category: "Data Science",
    earmark: "Data Science",
    title: "Apply Scientific Methods to Extract Valuable Insights",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=675&fit=crop&q=80",
    href: "/services/data-science"
  }
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const cardWidth = 840;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const cardWidth = 840;
      const newIndex = Math.round(scrollPos / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < CAROUSEL_DATA.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section className="bg-[#f2f2f2] pt-16 pb-20 overflow-hidden">
      <div className="container">
        {/* Header / Tabs */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="flex flex-wrap gap-2">
            {CAROUSEL_DATA.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-1.5 text-[12px] font-medium tracking-wide border transition-all duration-200 uppercase ${
                  activeIndex === index
                    ? "bg-white border-white text-black shadow-sm"
                    : "bg-white/50 border-transparent text-[#666666] hover:bg-white hover:text-black"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
<a
              href="/services/"
              className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#111111] border border-[#e5e5e5] px-4 py-1.5 bg-white hover:bg-black hover:text-white transition-colors"
            >
              All Services
            </a>
        </div>
      </div>

      {/* Carousel Body */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-[2.5rem] xl:px-[5rem] gap-8 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CAROUSEL_DATA.map((item, index) => (
          <div 
            key={item.id} 
            className="flex-shrink-0 w-[85vw] md:w-[800px] snap-start"
          >
            <a 
              href={item.href}
              className="group relative block w-full aspect-[16/9] overflow-hidden bg-black"
            >
                <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 ${item.id === 'data-engineering' ? 'object-[center_85%] scale-[1.3]' : ''}`}
                        priority={index === 0}
                      />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/60 to-transparent">
                <div className="mb-4">
                  <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/80">
                    {item.earmark}
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-4xl font-normal leading-tight max-w-2xl transition-transform duration-300 group-hover:translate-x-2">
                  {item.title} <span className="inline-block ml-2 text-xl md:text-3xl">↗</span>
                </h3>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className={`w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md text-white pointer-events-auto ${index === 0 ? 'invisible' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick(index - 1); }}
                >
                  ←
                </button>
                <button 
                  className={`w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md text-white pointer-events-auto ${index === CAROUSEL_DATA.length - 1 ? 'invisible' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleTabClick(index + 1); }}
                >
                  →
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}