import { Pill } from "lucide-react";

const medications = ["Eliquis", "Xarelto", "Spiriva", "Symbicort", "Metoprolol", "Lisinopril"];

const MedicationSection = () => (
  <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4">
    <div className="container max-w-4xl mx-auto text-center w-full min-w-0">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-3 text-balance px-1">
        Taking Any of These Medications?
      </h2>
      <p className="text-muted-foreground mb-8 sm:mb-10 text-base sm:text-lg text-pretty px-1">You may still qualify for coverage</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {medications.map((med) => (
          <div
            key={med}
            className="flex items-center gap-2 sm:gap-3 bg-card border border-border rounded-lg px-3 py-3 sm:px-5 sm:py-4 shadow-sm min-w-0"
          >
            <Pill className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
            <span className="font-semibold text-foreground text-sm sm:text-base text-left break-words min-w-0">{med}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MedicationSection;
