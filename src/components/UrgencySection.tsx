import { Button } from "@/components/ui/button";

interface UrgencySectionProps {
  onCTAClick: () => void;
}

const UrgencySection = ({ onCTAClick }: UrgencySectionProps) => (
  <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 hero-gradient">
    <div className="container max-w-3xl mx-auto text-center w-full min-w-0">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance px-1">
        Don&apos;t Wait Until It&apos;s Too Late
      </h2>
      <p className="text-base sm:text-lg text-primary-foreground/85 mb-8 text-pretty px-1">
        Approval options are available right now—request a call from a licensed agent in about a minute.
      </p>
      <Button
        variant="cta"
        size="lg"
        className="w-full max-w-md mx-auto sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 min-h-12 h-auto whitespace-normal rounded-lg"
        onClick={onCTAClick}
      >
        Get My Quote
      </Button>
    </div>
  </section>
);

export default UrgencySection;
