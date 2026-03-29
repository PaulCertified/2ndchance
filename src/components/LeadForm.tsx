import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Lock, Phone } from "lucide-react";
import { toast } from "sonner";
import { assignedAgent } from "@/config/agent";
import { cn } from "@/lib/utils";

const ageOptions = Array.from({ length: 36 }, (_, i) => 40 + i);

const conditionOptions = [
  "COPD",
  "Heart Failure (CHF)",
  "Atrial Fibrillation (AFib)",
  "Coronary Artery Disease (CAD)",
  "Diabetes",
  "Stroke History",
  "Other",
];

interface LeadFormProps {
  id?: string;
}

const LeadForm = ({ id }: LeadFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    condition: "",
    medications: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email || !form.age || !form.condition) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // In production, send to backend
    console.log("Lead submitted:", form);
    setSubmitted(true);
    toast.success("Thank you! A licensed agent will reach out soon.");
  };

  if (submitted) {
    return (
      <section id={id} className="py-16 md:py-20 px-4 section-alt">
        <div className="container max-w-xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">You're All Set!</h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
              A licensed agent will contact you shortly to review what you shared and walk through coverage options that may fit your health history. There&apos;s no obligation.
            </p>

            <div
              className={cn(
                "mt-10 pt-10 border-t border-border text-left",
                "animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-both",
              )}
            >
              <p className="text-center text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                Your assigned agent
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="shrink-0">
                  <div className="relative">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full hero-gradient p-1 shadow-lg">
                      <img
                        src={assignedAgent.photoSrc}
                        alt={assignedAgent.fullName}
                        className="w-full h-full rounded-full object-cover border-4 border-card"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shadow-md border-2 border-card">
                      ✓
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{assignedAgent.fullName}</h3>
                  <p className="font-body font-semibold text-foreground">{assignedAgent.title}</p>
                  <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
                    <span className="text-primary" aria-hidden>
                      •
                    </span>
                    <span>
                      National Producer Number (NPN):{" "}
                      <span className="font-medium text-foreground tabular-nums">{assignedAgent.npn}</span>
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground pt-1">
                    Questions before we reach out? Call me directly:
                  </p>
                  <Button variant="cta" size="lg" className="w-full sm:w-auto rounded-lg gap-2" asChild>
                    <a href={`tel:${assignedAgent.phoneTel}`}>
                      <Phone className="w-5 h-5" />
                      Call now — {assignedAgent.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 md:py-20 px-4 section-alt">
      <div className="container max-w-lg mx-auto">
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Talk With a Licensed Agent About Your Options
          </h2>
          <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed mb-2 max-w-md mx-auto">
            With COPD, heart conditions, or similar histories, seeing if you qualify isn&apos;t something a website can decide alone—you&apos;ll need a conversation with a{" "}
            <span className="text-foreground font-medium">licensed agent</span> who understands underwriting.
          </p>
          <p className="text-muted-foreground text-center text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
            Take a minute to share your situation below. A licensed agent will contact you to go over{" "}
            <span className="text-foreground font-medium">coverage options</span> that may fit you. Free, no obligation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Your health profile</p>

            <div>
              <Label htmlFor="age">Age *</Label>
              <select
                name="age"
                id="age"
                value={form.age}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select your age</option>
                {ageOptions.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="condition">Primary health condition *</Label>
              <select
                name="condition"
                id="condition"
                value={form.condition}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select your condition</option>
                {conditionOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="medications">Current medications (optional)</Label>
              <Input
                name="medications"
                id="medications"
                value={form.medications}
                onChange={handleChange}
                placeholder="e.g. Eliquis, Metoprolol, Spiriva"
              />
              <p className="text-xs text-muted-foreground mt-1.5">Helps the agent prepare before your call.</p>
            </div>

            <div className="pt-2 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-4">How we&apos;ll reach you</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name *</Label>
                    <Input name="firstName" id="firstName" value={form.firstName} onChange={handleChange} placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name *</Label>
                    <Input name="lastName" id="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input name="phone" id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
                  <p className="text-xs text-muted-foreground mt-1.5">A licensed agent may call or text to discuss options.</p>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input name="email" id="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
              </div>
            </div>

            <Button variant="cta" size="lg" type="submit" className="w-full text-lg py-6 rounded-lg mt-2">
              Request contact from a licensed agent
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-3 flex items-start justify-center gap-2">
              <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-muted-foreground" aria-hidden />
              <span>Your information is secure and is only used so a licensed agent can reach you. We never sell your data.</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
