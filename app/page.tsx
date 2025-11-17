import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorks from '@/components/HowItWorks';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import { TrustBar } from '@/components/ui/TrustBar';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TrustedBy />
      <ServicesSection />
      <BenefitsSection />
      <HowItWorks />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
