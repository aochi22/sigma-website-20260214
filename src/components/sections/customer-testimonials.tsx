import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    company: "GLOBAL RETAIL CORP",
    quote: '"Sigma Intelligence helped us reduce inventory costs by 23% in just six months. The predictive analytics have been transformative for our supply chain operations."',
    author: "Sarah Chen",
    role: "VP of Operations, Global Retail Corp",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&q=80",
    tag: "Predictive Analytics"
  },
  {
    company: "HEALTHCARE SYSTEMS INC",
    quote: '"The real-time dashboards have revolutionized how we monitor patient outcomes. We went from weekly reports to instant insights that directly improve care quality."',
    author: "Dr. Michael Torres",
    role: "Chief Data Officer, Healthcare Systems Inc",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
    tag: "Real-Time BI"
  },
  {
    company: "FINTECH SOLUTIONS",
    quote: '"With Sigma\'s analytics platform, we identified fraud patterns that saved us over $50M annually. The machine learning models are incredibly accurate and easy to deploy."',
    author: "James Wright",
    role: "Director of Risk Analytics, Fintech Solutions",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80",
    tag: "Machine Learning"
  },
  {
    company: "MANUFACTURING DYNAMICS",
    quote: '"The data integration capabilities are unmatched. We connected 200+ data sources across our factories in weeks, not months. Production efficiency is up 18%."',
    author: "Lisa Park",
    role: "Head of Digital Transformation, Manufacturing Dynamics",
      image: "/images/data-engineering.png",
    tag: "Data Engineering"
  },
  {
    company: "ENERGY PARTNERS",
    quote: '"Sigma Intelligence gave us the visibility we needed to optimize our energy distribution. The forecasting accuracy has exceeded all our expectations."',
    author: "Robert Anderson",
    role: "CTO, Energy Partners",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&q=80",
    tag: "AI Forecasting"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="relative flex flex-col pt-0 pb-12 px-0 bg-[#F2F2F2] min-h-[540px] border-l border-white first:border-l-0 group">
      <div 
        className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-white border-l-[20px] border-l-transparent z-10"
        aria-hidden="true"
      />

        {/* Image */}
        <div className="relative w-full h-[160px] overflow-hidden">
          <Image
                  src={testimonial.image}
                  alt={testimonial.company}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${testimonial.tag === 'Data Engineering' ? 'object-[center_85%] scale-[1.3]' : ''}`}
                />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F2F2F2] to-transparent" />
        <span className="absolute bottom-3 left-4 text-[10px] font-medium uppercase tracking-[0.1em] text-[#111111] bg-white/80 backdrop-blur-sm px-2 py-1">
          {testimonial.tag}
        </span>
      </div>
      
      <div className="px-6 pt-4">
        <header className="mb-8">
          <h2 className="earmark text-[12px] leading-[1] font-medium uppercase tracking-[0.1em] text-[#666666]">
            {testimonial.company}
          </h2>
        </header>

        <div className="flex-1 flex flex-col justify-start">
          <blockquote className="m-0 p-0">
            <p className="text-[16px] leading-[1.6] text-[#111111] font-normal mb-8 line-clamp-[8]">
              {testimonial.quote}
            </p>
          </blockquote>
        </div>

        <footer className="mt-auto">
          <div className="text-[14px] font-medium text-[#111111] leading-tight">
            {testimonial.author}
          </div>
          <div className="text-[14px] text-[#666666] leading-tight mt-1">
            {testimonial.role}
          </div>
        </footer>
      </div>
    </div>
  );
};

const CustomerTestimonials = () => {
  return (
    <section className="w-full bg-white py-24 mb-[120px]">
      <div className="container px-10 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-[#E5E5E5]">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} testimonial={item} />
          ))}
        </div>

        {/* Action Buttons Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
          <a 
            href="/contact"
            className="group flex items-center justify-between p-12 bg-[#E5E5E5] transition-colors hover:bg-[#DADADA] decoration-0"
          >
            <span className="text-[40px] lg:text-[48px] font-normal text-[#111111] tracking-tight">Request a Demo</span>
            <span className="text-[32px] text-[#111111] transform transition-transform group-hover:translate-x-2">→</span>
          </a>
          <a 
            href="/get-started"
            className="group flex items-center justify-between p-12 bg-[#1A1A1A] transition-colors hover:bg-black decoration-0"
          >
            <span className="text-[40px] lg:text-[48px] font-normal text-white tracking-tight">Start Free Trial</span>
            <span className="text-[32px] text-white transform transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>
      
      {/* Bottom Border Rule */}
      <div className="container px-10 xl:px-20 mt-24">
        <hr className="border-t border-[#E5E5E5]" />
      </div>
    </section>
  );
};

export default CustomerTestimonials;