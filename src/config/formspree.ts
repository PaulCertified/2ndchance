/**
 * Formspree form ID from the dashboard (e.g. URL https://formspree.io/f/abcxyz → abcxyz).
 * Set in `.env`: VITE_FORMSPREE_FORM_ID=your_id
 */
const formId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

export function getFormspreeEndpoint(): string | null {
  if (!formId?.trim()) return null;
  return `https://formspree.io/f/${formId.trim()}`;
}
