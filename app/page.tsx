import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ModernSection from '@/components/ModernSection';
import CyclesTriageSection from '@/components/CyclesTriageSection';
import ProductIntelligenceSection from '@/components/ProductIntelligenceSection';
import AIFeaturesSection from '@/components/AIFeaturesSection';
import SystemSection from '@/components/SystemSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FoundationsSection from '@/components/FoundationsSection';
import ProductSection from '@/components/ProductSection';
import FeaturesDetailedSection from '@/components/FeaturesDetailedSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ModernSection />
      <CyclesTriageSection />
      <ProductIntelligenceSection />
      <AIFeaturesSection />
      <SystemSection />
      <IntegrationsSection />
      <FoundationsSection />
      <ProductSection />
      <FeaturesDetailedSection />
    </>
  );
}