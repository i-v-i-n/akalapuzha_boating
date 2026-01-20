"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#051923]">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <div className="grain-overlay" />
    </main>
  );
}
