import { Button } from "@/components/ui/button";

interface UrgencySectionProps {
  onCTAClick: () => void;
}

const UrgencySection = ({ onCTAClick }: UrgencySectionProps) => (
  <section className="py-16 md:py-20 px-4 hero-gradient">
    <div className="container max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
        Don't Wait Until It's Too Late
      </h2>
      <p className="text-lg text-primary-foreground/85 mb-8">
        Approval options are available right now—check in under 60 seconds
      </p>
      <Button variant="cta" size="lg" className="text-lg px-10 py-6 rounded-lg" onClick={onCTAClick}>
        Get My Quote
      </Button>
    </div>
  </section>
);

export default UrgencySection;
