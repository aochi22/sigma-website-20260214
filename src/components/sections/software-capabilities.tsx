"use client";

import React from 'react';
import Image from 'next/image';

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  image: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: 'business-intelligence',
    number: '/0.1',
    title: 'Transform raw data into actionable insights with custom dashboards and reporting solutions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 'artificial-intelligence',
    number: '/0.2',
    title: 'Leverage AI-powered automation to streamline operations and drive intelligent decision-making',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 'data-visualization',
    number: '/0.3',
    title: 'Create compelling visual narratives that make complex data accessible and meaningful',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 'data-engineering',
    number: '/0.4',
    title: 'Build robust data pipelines and infrastructure to collect, process, and store your data efficiently',
      image: '/images/data-engineering.png',
  },
  {
    id: 'machine-learning',
    number: '/0.5',
    title: 'Develop predictive models and algorithms that unlock the hidden potential in your data',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80',
  },
  {
    id: 'data-science',
    number: '/0.6',
    title: 'Apply scientific methods and statistical techniques to extract valuable insights from your data',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop&q=80',
  },
];

const SoftwareCapabilities: React.FC = () => {
  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto px-10 xl:px-20">
        {/* Typographic Mission Statement */}
        <div className="mb-[120px] max-w-[1200px]">
          <h2 className="text-[48px] leading-[1.2] tracking-[-0.01em] font-display text-[#111111] opacity-40">
            Our platform empowers <span className="text-[#111111] opacity-100">data-driven decisions</span> across enterprises worldwide, from startups to Fortune 500 companies.
          </h2>
        </div>

        {/* Capabilities List */}
        <div className="flex flex-col border-t border-[#e5e5e5]">
          {capabilities.map((item) => (
            <div 
              key={item.id} 
              className="relative grid grid-cols-1 md:grid-cols-12 items-start py-8 md:py-16 border-b border-[#e5e5e5] group transition-colors duration-300 hover:bg-[#f9f9f9]"
            >
              <div className="col-span-1 md:col-span-4 lg:col-span-3 z-10">
                <p className="text-[14px] leading-[1.6] text-[#111111] max-w-[280px] font-body mb-8 md:mb-12">
                  {item.title}
                </p>
                <span className="text-[12px] font-medium text-[#666666] uppercase tracking-[0.1em]">
                  {item.number}
                </span>
              </div>

                <div className="hidden md:flex col-span-8 lg:col-span-9 justify-end">
                  <div className="relative w-[400px] h-[250px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                          src={item.image}
                          alt={item.id.replace('-', ' ')}
                          fill
                          className={`object-cover ${item.id === 'data-engineering' ? 'object-[center_85%] scale-[1.3]' : ''}`}
                        />
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareCapabilities;