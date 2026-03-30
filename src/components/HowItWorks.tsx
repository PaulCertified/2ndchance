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
  <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 overflow-x-hidden">
    <div className="container max-w-5xl mx-auto text-center w-full min-w-0">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-balance px-1">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
        {steps.map(({ icon: Icon, step, title, desc }) => (
          <div key={step} className="flex flex-col items-center max-w-sm mx-auto w-full min-w-0 px-1">
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow z-10 border-2 border-background">
                {step}
              </div>
            </div>
            <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 text-balance">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-pretty">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
