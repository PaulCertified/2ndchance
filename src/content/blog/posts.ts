import type { BlogPost } from "./types";
import bodyDeclinedNext from "./posts/life-insurance-declined-what-to-do-next.md?raw";
import bodyReapply from "./posts/denied-life-insurance-can-you-reapply.md?raw";
import bodyNoExam from "./posts/no-medical-exam-life-insurance-pre-existing-conditions.md?raw";
import bodyCopd from "./posts/life-insurance-with-copd.md?raw";
import bodyChf from "./posts/life-insurance-with-chf.md?raw";
import bodyAfib from "./posts/life-insurance-with-atrial-fibrillation.md?raw";
import bodyCad from "./posts/life-insurance-with-coronary-artery-disease.md?raw";
import body5075 from "./posts/life-insurance-ages-50-75-health-issues.md?raw";
import bodyMortgage from "./posts/mortgage-protection-with-health-conditions.md?raw";
import bodyEliquis from "./posts/life-insurance-if-you-take-eliquis.md?raw";

export const allBlogPosts: BlogPost[] = [
  {
    slug: "life-insurance-declined-what-to-do-next",
    title: "Life Insurance Declined? What to Do Next",
    description:
      "Steps after a life insurance decline, why it happens, and how second-chance options may still fit COPD, heart conditions, and more.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Declined & second chance",
    keywords: ["declined life insurance", "denied life insurance", "second chance life insurance", "high risk life insurance"],
    body: bodyDeclinedNext,
  },
  {
    slug: "denied-life-insurance-can-you-reapply",
    title: "Denied Life Insurance—Can You Reapply?",
    description:
      "When reapplying makes sense, disclosure rules, and how to match product type to your health history.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Declined & second chance",
    keywords: ["denied life insurance reapply", "life insurance after decline", "reapply life insurance"],
    body: bodyReapply,
  },
  {
    slug: "no-medical-exam-life-insurance-pre-existing-conditions",
    title: "No Medical Exam Life Insurance With Pre-Existing Conditions",
    description:
      "How simplified and no-exam products work, what “graded” means, and realistic expectations for chronic conditions.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Declined & second chance",
    keywords: ["no medical exam life insurance", "pre existing conditions", "simplified issue life insurance"],
    body: bodyNoExam,
  },
  {
    slug: "life-insurance-with-copd",
    title: "Life Insurance With COPD: What Shoppers Should Know",
    description:
      "Underwriting angles for COPD, inhalers and oxygen, and no-exam options—without guaranteed approval language.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "COPD",
    keywords: ["life insurance with COPD", "COPD life insurance no exam", "Spiriva Symbicort life insurance"],
    body: bodyCopd,
  },
  {
    slug: "life-insurance-with-chf",
    title: "Life Insurance With Congestive Heart Failure (CHF)",
    description:
      "How carriers view CHF, common medications like beta blockers and Lasix, and setting expectations for coverage.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Heart failure",
    keywords: ["life insurance CHF", "congestive heart failure life insurance", "heart failure insurance"],
    body: bodyChf,
  },
  {
    slug: "life-insurance-with-atrial-fibrillation",
    title: "Life Insurance With Atrial Fibrillation (AFib)",
    description:
      "AFib underwriting, blood thinners like Eliquis and Xarelto, and why medication names matter in search—and in your application.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "AFib",
    keywords: ["life insurance AFib", "atrial fibrillation life insurance", "life insurance on blood thinners"],
    body: bodyAfib,
  },
  {
    slug: "life-insurance-with-coronary-artery-disease",
    title: "Life Insurance With Coronary Artery Disease (CAD)",
    description:
      "Stents, bypass, statins, and second chances after a cardiac-related decline.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "CAD",
    keywords: ["life insurance CAD", "coronary artery disease life insurance", "life insurance after stent"],
    body: bodyCad,
  },
  {
    slug: "life-insurance-ages-50-75-health-issues",
    title: "Life Insurance for Ages 50–75 With Health Issues",
    description:
      "Why this band searches for no-exam and second-chance options—and how to think about term, permanent, and final expense.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Age & situation",
    keywords: ["life insurance over 50 health issues", "life insurance 60s", "senior life insurance health problems"],
    body: body5075,
  },
  {
    slug: "mortgage-protection-with-health-conditions",
    title: "Mortgage Protection Life Insurance With Health Conditions",
    description:
      "Protecting the family home when you have heart or lung conditions or prior declines—concepts, not guarantees.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Age & situation",
    keywords: ["mortgage protection life insurance", "mortgage insurance health conditions", "life insurance mortgage COPD"],
    body: bodyMortgage,
  },
  {
    slug: "life-insurance-if-you-take-eliquis",
    title: "Life Insurance if You Take Eliquis (Apixaban)",
    description:
      "Medication-first guide for shoppers on Eliquis: what underwriters care about and how AFib or clot history fits in.",
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    category: "Medications",
    keywords: ["life insurance Eliquis", "Eliquis life insurance", "blood thinner life insurance"],
    body: bodyEliquis,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return allBlogPosts.slice(0, limit);
  const sameCategory = allBlogPosts.filter((p) => p.slug !== slug && p.category === current.category);
  const rest = allBlogPosts.filter((p) => p.slug !== slug && p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
