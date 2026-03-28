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
    <section className="hero-gradient py-16 md:py-24 px-4">
      <div className="container max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
          Denied Life Insurance Before?
          <br />
          <span className="opacity-90">You May Still Qualify Today</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8">
          Even with common health conditions, you could get approved with no medical exam.
        </p>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 shrink-0 text-green-300" />
              <span className="font-medium">{b}</span>
            </li>
          ))}
        </ul>

        <Button variant="cta" size="lg" className="text-lg px-10 py-6 rounded-lg" onClick={onCTAClick}>
          Check If You Qualify
        </Button>

        <div className="flex items-center justify-center gap-6 mt-12">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-primary-foreground/70">
              <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
