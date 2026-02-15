import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const products = [
    "Analytics Pro", "DataStream", "Predict", "Insight",
    "Connect", "Visualize", "Governance", "Security Suite"
  ];

  const solutions = [
    "Financial Services", "Healthcare", "Retail & E-commerce",
    "Manufacturing", "Energy & Utilities", "Telecommunications",
    "Government", "Life Sciences"
  ];

  const capabilities = [
    "Data Integration", "Predictive Analytics", "Machine Learning",
    "Real-Time Dashboards", "Data Governance", "Self-Service BI",
    "Embedded Analytics", "Cloud & On-Premise"
  ];

  const resources = [
    "Documentation", "API Reference", "Developer Portal",
    "Community", "Blog", "Webinars", "Case Studies",
    "Support Center"
  ];

  const socialLinks = [
    { name: "YOUTUBE", url: "#" },
    { name: "X", url: "#" },
    { name: "LINKEDIN", url: "#" },
    { name: "GITHUB", url: "#" },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-[#E5E5E5]">
      <div className="container mx-auto px-10 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Copyright & Socials Column */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-xl">Σ</span>
              </div>
              <span className="text-[16px] font-medium tracking-tight">
                Sigma Intelligence
              </span>
            </div>
            <div className="mb-6">
              <p className="text-[14px] leading-[1.6] text-[#111111] font-normal">
                © {currentYear} Sigma Intelligence Inc.
              </p>
              <p className="text-[14px] leading-[1.6] text-[#111111] font-normal">
                All rights reserved.
              </p>
            </div>

            <div className="mb-6 pt-4 border-t border-[#E5E5E5]">
              <a href="/cookie-settings" className="text-[14px] text-[#111111] hover:underline flex items-center">
                Cookie Settings <span className="ml-1 text-[10px]">↗</span>
              </a>
            </div>

            <div className="mb-8 pt-4 border-t border-[#E5E5E5]">
              <div className="flex gap-3 text-[14px] text-[#111111]">
                <a href="/?lang=en-US" className="hover:underline">US</a>
                <a href="/?lang=en-GB" className="hover:underline">UK</a>
                <a href="/?lang=de-DE" className="hover:underline">DE</a>
                <a href="/?lang=ja-JP" className="hover:underline">JP</a>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-[#E5E5E5]">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-full flex items-center justify-center py-2 px-4 border border-[#E5E5E5] rounded-full text-[12px] font-medium tracking-[0.1em] text-[#111111] hover:bg-[#F2F2F2] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[12px] font-medium tracking-[0.1em] text-[#666666] uppercase mb-6">Products</h3>
            <ul className="flex flex-col gap-2">
              {products.map((item) => (
                <li key={item}>
                  <a href={`/products/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14px] text-[#111111] hover:underline block leading-relaxed">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[12px] font-medium tracking-[0.1em] text-[#666666] uppercase mb-6">Solutions</h3>
            <ul className="flex flex-col gap-2">
              {solutions.map((item) => (
                <li key={item}>
                  <a href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14px] text-[#111111] hover:underline block leading-relaxed">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[12px] font-medium tracking-[0.1em] text-[#666666] uppercase mb-6">Capabilities</h3>
            <ul className="flex flex-col gap-2">
              {capabilities.map((item) => (
                <li key={item}>
                  <a href={`/capabilities/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14px] text-[#111111] hover:underline block leading-relaxed">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-1">
            <h3 className="text-[12px] font-medium tracking-[0.1em] text-[#666666] uppercase mb-6">Resources</h3>
            <ul className="flex flex-col gap-2">
              {resources.map((item) => (
                <li key={item}>
                  <a href={`/resources/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[14px] text-[#111111] hover:underline block leading-relaxed">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;