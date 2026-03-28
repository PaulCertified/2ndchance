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
  <section className="py-16 md:py-20 px-4 section-alt">
    <div className="container max-w-5xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
        We Help People With These Conditions Get Approved
      </h2>
      <p className="text-muted-foreground mb-12 text-lg">Even if you've been declined before</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {conditions.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConditionSection;
