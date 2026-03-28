import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

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
    toast.success("Thank you! We'll be in touch soon.");
  };

  if (submitted) {
    return (
      <section id={id} className="py-16 md:py-20 px-4 section-alt">
        <div className="container max-w-lg mx-auto text-center">
          <div className="bg-card rounded-2xl p-10 shadow-lg border border-border">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">You're All Set!</h2>
            <p className="text-muted-foreground">
              A licensed agent will contact you shortly to discuss your options. There's no obligation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 md:py-20 px-4 section-alt">
      <div className="container max-w-lg mx-auto">
        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
            See If You Qualify
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Free, no-obligation check. Takes under 60 seconds.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input name="firstName" id="firstName" value={form.firstName} onChange={handleChange} placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input name="lastName" id="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input name="phone" id="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input name="email" id="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
            </div>

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
              <Label htmlFor="condition">Health Condition *</Label>
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
              <Label htmlFor="medications">Current Medications (optional)</Label>
              <Input
                name="medications"
                id="medications"
                value={form.medications}
                onChange={handleChange}
                placeholder="e.g. Eliquis, Metoprolol"
              />
            </div>

            <Button variant="cta" size="lg" type="submit" className="w-full text-lg py-6 rounded-lg mt-2">
              See If I Qualify
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-3">
              🔒 Your information is secure and will never be sold.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
