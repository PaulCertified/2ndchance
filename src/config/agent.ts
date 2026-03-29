/**
 * Assigned agent shown after lead form submit.
 *
 * Set your real number via env, or change the fallbacks below:
 * VITE_AGENT_PHONE_DISPLAY=(615) 555-1234
 * VITE_AGENT_PHONE_TEL=+16155551234
 */
const phoneDisplay =
  import.meta.env.VITE_AGENT_PHONE_DISPLAY ?? "(555) 555-0199";
const phoneTel = import.meta.env.VITE_AGENT_PHONE_TEL ?? "+15555550199";

export const assignedAgent = {
  fullName: "Paul Gipson",
  title: "Licensed Professional",
  npn: "21670586",
  photoSrc: "/paul.jpg",
  phoneDisplay,
  phoneTel,
} as const;
