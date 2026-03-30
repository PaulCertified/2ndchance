import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "I was denied twice because of heart issues. I finally got approved within days. I can't believe how easy it was.",
    name: "Robert M.",
    age: "Age 62",
  },
  {
    text: "Thought I couldn't get coverage because of COPD, but I was wrong. Now my family is protected and I have peace of mind.",
    name: "Linda S.",
    age: "Age 58",
  },
  {
    text: "After my stroke, I thought life insurance was off the table. This team found me a plan that actually works.",
    name: "James T.",
    age: "Age 67",
  },
];

const TestimonialSection = () => (
  <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 section-alt">
    <div className="container max-w-5xl mx-auto w-full min-w-0">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12 text-balance px-1">
        Real Stories From Real People
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-5 sm:p-6 shadow-sm border border-border relative min-w-0">
            <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic leading-relaxed text-sm sm:text-base text-pretty break-words">&ldquo;{t.text}&rdquo;</p>
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
