import { Heart, Wind, Activity, Droplets, Brain, Zap } from "lucide-react";

const conditions = [
  { icon: Wind, name: "COPD", desc: "Chronic Obstructive Pulmonary Disease" },
  { icon: Heart, name: "Heart Failure (CHF)", desc: "Congestive Heart Failure" },
  { icon: Activity, name: "AFib", desc: "Atrial Fibrillation" },
  { icon: Zap, name: "CAD", desc: "Coronary Artery Disease" },
  { icon: Droplets, name: "Diabetes", desc: "Type 1 & Type 2" },
  { icon: Brain, name: "Stroke History", desc: "Prior Stroke or TIA" },
];

const ConditionSection = () => (
  <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 section-alt">
    <div className="container max-w-5xl mx-auto text-center w-full min-w-0">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-3 text-balance px-1">
        We Help People With These Conditions Get Approved
      </h2>
      <p className="text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg text-pretty px-1">
        Even if you&apos;ve been declined before
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {conditions.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-border hover:shadow-md transition-shadow min-w-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1 text-sm sm:text-base break-words">{name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug break-words">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConditionSection;
