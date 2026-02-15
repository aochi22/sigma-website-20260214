import React from 'react';

const NavigationOverlay = () => {
  return (
    <nav 
      role="navigation" 
      aria-label="Main" 
      className="fixed inset-0 z-[100] bg-white overflow-y-auto pt-24 pb-12 px-10 md:px-20"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Core Navigation Links Column */}
        <article className="lg:col-span-3">
          <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#666666] mb-8">
            Navigation
          </h2>
          <ul className="flex flex-col gap-4">
            <li><a href="/analytics/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">Analytics Suite</a></li>
            <li><a href="/platforms/insight/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">↳ Insight</a></li>
            <li><a href="/platforms/discover/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">↳ Discover</a></li>
            <li><a href="/platforms/predict/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">↳ Predict</a></li>
            <li className="mt-4"><a href="/services/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">Services</a></li>
            <li><a href="/case-studies/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">Case Studies</a></li>
            <li><a href="/documentation/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">Documentation</a></li>
            <li><a href="/careers/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">Careers</a></li>
            <li><a href="/newsroom/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">Newsroom</a></li>
            <li><a href="/about/" className="text-[24px] font-medium hover:text-[#666666] transition-colors leading-tight">About Us</a></li>
          </ul>
        </article>

        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          
          {/* Latest News Column */}
          <article className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex justify-between items-center border-b border-[#e5e5e5] pb-4">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#666666]">
                Latest News
              </h2>
              <a href="/newsroom/" className="text-[12px] font-medium uppercase tracking-[0.1em] flex items-center gap-1 hover:text-black transition-colors">
                Newsroom <span className="text-[10px]">↗</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* News Card 1 */}
              <a href="/newsroom/ai-analytics-report" className="group flex flex-col h-full bg-[#f2f2f2]">
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#1a1a3e] to-[#0a0a2e] flex items-center justify-center">
                  <header className="absolute top-4 left-4 z-10 text-[10px] font-medium uppercase tracking-wider text-white">
                    Report, January 2026
                  </header>
                  <span className="text-white/20 text-6xl font-bold">Σ</span>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-grow border-x border-b border-[#e5e5e5]">
                  <p className="text-[18px] font-medium leading-tight">
                    How AI-powered analytics are transforming enterprise decision-making
                  </p>
                  <p className="text-[14px] text-[#666666] leading-relaxed">
                    A deep dive into the latest trends in data analytics and machine learning for business.
                  </p>
                  <span className="mt-auto text-[14px] font-medium flex items-center gap-2">
                    <span className="text-[#666666]">↳</span> Read More
                  </span>
                </div>
              </a>

              {/* News Card 2 */}
              <a href="/newsroom/data-platform-launch" className="group flex flex-col h-full bg-[#f2f2f2]">
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#0d2137] to-[#1a3a5c] flex items-center justify-center">
                  <header className="absolute top-4 left-4 z-10 text-[10px] font-medium uppercase tracking-wider text-white">
                    Product, February 2026
                  </header>
                  <span className="text-white/20 text-6xl font-bold">Σ</span>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-grow border-x border-b border-[#e5e5e5]">
                  <p className="text-[18px] font-medium leading-tight">
                    Introducing our next-generation unified data platform
                  </p>
                  <p className="text-[14px] text-[#666666] leading-relaxed">
                    A new approach to connecting, processing, and analyzing enterprise data at scale.
                  </p>
                  <span className="mt-auto text-[14px] font-medium flex items-center gap-2">
                    <span className="text-[#666666]">↳</span> Read More
                  </span>
                </div>
              </a>
            </div>
          </article>

          {/* Quick Links Column */}
          <article className="flex flex-col gap-8">
            <div className="border-b border-[#e5e5e5] pb-4">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#666666]">
                Quick links
              </h2>
            </div>
            <nav>
              <ul className="flex flex-col gap-3">
                {['About Us', 'Blog', 'Investor Relations', 'Privacy Policy', 'Information Security', 'Cloud Partners', 'Learning Center', 'Customer Success', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}/`} className="text-[16px] text-black hover:text-[#666666] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </article>

          {/* Services Column */}
          <article className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center border-b border-[#e5e5e5] pb-4">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#666666]">
                Services
              </h2>
              <a href="/services/" className="text-[12px] font-medium uppercase tracking-[0.1em] flex items-center gap-1 hover:text-black transition-colors">
                View All <span className="text-[10px]">↗</span>
              </a>
            </div>
            <a href="/services/data-engineering" className="group bg-[#f2f2f2] p-6 border border-[#e5e5e5] h-full flex flex-col justify-between">
              <p className="text-[16px] leading-relaxed text-black">
                Our platform helps organizations across industries harness data to make smarter, faster decisions with cutting-edge analytics and machine learning.
              </p>
              <span className="mt-8 text-[14px] font-medium flex items-center gap-2">
                <span className="text-[#666666]">↳</span> Explore our services
              </span>
            </a>
          </article>

          {/* Latest Case Study Column */}
          <article className="flex flex-col gap-8 md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center border-b border-[#e5e5e5] pb-4">
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#666666]">
                Latest Case Study
              </h2>
              <a href="/case-studies/" className="text-[12px] font-medium uppercase tracking-[0.1em] flex items-center gap-1 hover:text-black transition-colors">
                View All <span className="text-[10px]">↗</span>
              </a>
            </div>
            <a href="/case-studies/healthcare-analytics" className="group flex flex-col h-full bg-[#f2f2f2]">
              <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-[#162d50] to-[#0a1628] flex items-center justify-center">
                <header className="absolute top-4 left-4 z-10 text-[10px] font-medium uppercase tracking-wider text-white">
                  Case Study // Healthcare
                </header>
                <span className="text-white/20 text-6xl font-bold">Σ</span>
              </div>
              <div className="p-6 border-x border-b border-[#e5e5e5] flex-grow">
                <p className="text-[18px] font-medium leading-tight">
                  Improving patient outcomes through real-time analytics
                </p>
              </div>
            </a>
          </article>
          
        </div>
      </div>

      {/* Close Button */}
      <div className="fixed top-8 right-10 md:right-20">
        <button 
          className="w-10 h-10 flex items-center justify-center border border-[#e5e5e5] hover:bg-black hover:text-white transition-all group"
          aria-label="Close Navigation"
        >
          <span className="text-xl font-light transform scale-150 rotate-45">+</span>
        </button>
      </div>
    </nav>
  );
};

export default NavigationOverlay;
