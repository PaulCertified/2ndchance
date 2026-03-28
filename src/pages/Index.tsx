import { useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import ConditionSection from "@/components/ConditionSection";
import MedicationSection from "@/components/MedicationSection";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import UrgencySection from "@/components/UrgencySection";
import FloatingCTA from "@/components/FloatingCTA";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  const scrollToForm = useCallback(() => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={scrollToForm} />
      <ConditionSection />
      <MedicationSection />
      <TestimonialSection />
      <HowItWorks />
      <LeadForm id="lead-form" />
      <UrgencySection onCTAClick={scrollToForm} />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} All rights reserved. This is not a guarantee of coverage.</p>
          <p className="mt-1">Consult a licensed agent for details about eligibility and terms.</p>
        </div>
      </footer>

      <FloatingCTA onClick={scrollToForm} />
      <ExitIntentPopup onCTAClick={scrollToForm} />
    </div>
  );
};

export default Index;
