import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import WhatIsCodity from '@/components/ui/What-is-Codity';
import WhyCodity from '@/components/ui/WhyCodity';
import ModernSection from '@/components/ModernSection';
import CyclesTriageSection from '@/components/CyclesTriageSection';
import AIFeaturesSection from '@/components/AIFeaturesSection';
import ProductSection from '@/components/ProductSection';
import FeaturesDetailedSection from '@/components/FeaturesDetailedSection';
import ContactFooterSection from '@/components/ContactFooterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIsCodity />
      <WhyCodity />
      <ModernSection />
      <CyclesTriageSection />
      <AIFeaturesSection />
      <ProductSection />
      <FeaturesDetailedSection />
      <ContactFooterSection />
    </>
  );
}