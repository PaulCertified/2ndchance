import { useCallback } from "react";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/config/siteSeo";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import HeroSection from "@/components/HeroSection";
import ConditionSection from "@/components/ConditionSection";
import MedicationSection from "@/components/MedicationSection";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import UrgencySection from "@/components/UrgencySection";
import FloatingCTA from "@/components/FloatingCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  useDocumentMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION });

  const scrollToForm = useCallback(() => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden pb-24 md:pb-0">
      <HeroSection onCTAClick={scrollToForm} />
      <ConditionSection />
      <MedicationSection />
      <TestimonialSection />
      <HowItWorks />
      <LeadForm id="lead-form" />
      <UrgencySection onCTAClick={scrollToForm} />

      <SiteFooter />

      <FloatingCTA onClick={scrollToForm} />
      <ExitIntentPopup onCTAClick={scrollToForm} />
    </div>
  );
};

export default Index;
