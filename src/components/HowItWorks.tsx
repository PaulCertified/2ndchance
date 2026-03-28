import { ClipboardList, Users, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Answer a Few Questions",
    desc: "Tell us about yourself and your health. It takes less than 60 seconds.",
  },
  {
    icon: Users,
    step: "2",
    title: "We Match You With the Right Plan",
    desc: "Our experts find options designed for your specific situation.",
  },
  {
    icon: ShieldCheck,
    step: "3",
    title: "Get Approved & Covered",
    desc: "Receive your approval in as little as 24–72 hours. No medical exam needed.",
  },
];

const HowItWorks = () => (
  <section className="py-16 md:py-20 px-4">
    <div className="container max-w-5xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map(({ icon: Icon, step, title, desc }) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mb-4 shadow-lg">
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm -mt-8 ml-12 relative z-10 shadow">
              {step}
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
