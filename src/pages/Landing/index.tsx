import PageMeta from "../../components/common/PageMeta";
import LandingNav from "../../components/landing/LandingNav";
import HeroSection from "../../components/landing/HeroSection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import HowItWorksSection from "../../components/landing/HowItWorksSection";
import StatsSection from "../../components/landing/StatsSection";
import PricingSection from "../../components/landing/PricingSection";
import TestimonialsSection from "../../components/landing/TestimonialsSection";
import CTASection from "../../components/landing/CTASection";
import LandingFooter from "../../components/landing/LandingFooter";

export default function Landing() {
  return (
    <>
      <PageMeta
        title="BoltStorage - Lightning Fast Cloud Storage"
        description="Store, sync, and share your files with BoltStorage. The fastest and most secure cloud storage solution."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <LandingNav />
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <LandingFooter />
      </div>
    </>
  );
}
