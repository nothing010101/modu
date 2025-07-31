'use client';

import { useRef } from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import TokenomicsSection from '@/components/tokenomics-section';
import BuySection from '@/components/buy-section';
import RoadmapSection from '@/components/roadmap-section';
import CommunitySection from '@/components/community-section';
import Footer from '@/components/footer';

export default function HomePage(): JSX.Element {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const tokenomicsRef = useRef<HTMLElement>(null);
  const buyRef = useRef<HTMLElement>(null);
  const roadmapRef = useRef<HTMLElement>(null);
  const communityRef = useRef<HTMLElement>(null);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyClick = (): void => {
    scrollToSection('buy');
  };

  const handleLearnMoreClick = (): void => {
    scrollToSection('about');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        <section id="home" ref={heroRef} className="relative">
          <HeroSection 
            onBuyClick={handleBuyClick}
            onLearnMoreClick={handleLearnMoreClick}
          />
        </section>

        <section id="about" ref={aboutRef} className="relative">
          <AboutSection />
        </section>

        <section id="tokenomics" ref={tokenomicsRef} className="relative">
          <TokenomicsSection />
        </section>

        <section id="buy" ref={buyRef} className="relative">
          <BuySection />
        </section>

        <section id="roadmap" ref={roadmapRef} className="relative">
          <RoadmapSection />
        </section>
