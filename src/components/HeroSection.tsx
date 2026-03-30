import { Shield, Clock, HeartPulse, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "Fast Approvals" },
  { icon: HeartPulse, label: "All Conditions Considered" },
];

const bullets = [
  "No medical exam options",
  "Fast approvals (24–72 hours)",
  "Coverage for people with health conditions",
];

interface HeroSectionProps {
  onCTAClick: () => void;
}

const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="hero-gradient py-12 sm:py-16 md:py-24 px-3 sm:px-4">
      <div className="container max-w-5xl mx-auto text-center w-full min-w-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 text-balance px-1">
          Denied Life Insurance Before?
          <br />
          <span className="opacity-90">You May Still Qualify Today</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 text-pretty px-1">
          Even with common health conditions, you could get approved with no medical exam.
        </p>

        <ul className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-x-6 sm:gap-y-3 mb-10 max-w-2xl mx-auto">
          {bullets.map((b) => (
            <li key={b} className="flex items-start sm:items-center gap-2 text-primary-foreground/90 text-left sm:text-center px-2 sm:px-0">
              <CheckCircle className="w-5 h-5 shrink-0 text-green-300 mt-0.5 sm:mt-0" />
              <span className="font-medium text-sm sm:text-base leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="cta"
          size="lg"
          className="w-full max-w-md mx-auto sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-lg min-h-12 whitespace-normal"
          onClick={onCTAClick}
        >
          Check If You Qualify
        </Button>

        <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 mt-10 sm:mt-12 max-w-md sm:max-w-none mx-auto px-1">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-primary-foreground/70 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-center leading-tight px-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
