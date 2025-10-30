import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ModernSection from '@/components/ModernSection';
import CyclesTriageSection from '@/components/CyclesTriageSection';
import AIFeaturesSection from '@/components/AIFeaturesSection';
import ProductSection from '@/components/ProductSection';
import FeaturesDetailedSection from '@/components/FeaturesDetailedSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ModernSection />
      <CyclesTriageSection />
      <AIFeaturesSection />
      <ProductSection />
      <FeaturesDetailedSection />
    </>
  );
}