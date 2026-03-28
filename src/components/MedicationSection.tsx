import { Pill } from "lucide-react";

const medications = ["Eliquis", "Xarelto", "Spiriva", "Symbicort", "Metoprolol", "Lisinopril"];

const MedicationSection = () => (
  <section className="py-16 md:py-20 px-4">
    <div className="container max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
        Taking Any of These Medications?
      </h2>
      <p className="text-muted-foreground mb-10 text-lg">You may still qualify for coverage</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {medications.map((med) => (
          <div
            key={med}
            className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4 shadow-sm"
          >
            <Pill className="w-5 h-5 text-accent shrink-0" />
            <span className="font-semibold text-foreground">{med}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MedicationSection;
