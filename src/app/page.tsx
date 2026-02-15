"use client";

import AnnouncementBar from "@/components/sections/announcement-bar";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import ProductCarousel from "@/components/sections/product-carousel";

import CtaMission from "@/components/sections/cta-mission";
import CustomerTestimonials from "@/components/sections/customer-testimonials";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section with Video */}
      <HeroSection />
      
      {/* Product Carousel */}
      <ProductCarousel />
      
        {/* CTA Mission Block */}
      <CtaMission />
      
      {/* Customer Testimonials with Split CTA */}
      <CustomerTestimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
