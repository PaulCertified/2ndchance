/// <reference types="vite/client" />

interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_FORMSPREE_FORM_ID?: string;
  readonly VITE_AGENT_PHONE_DISPLAY?: string;
  readonly VITE_AGENT_PHONE_TEL?: string;
}

declare module "*.md?raw" {
  const content: string;
  export default content;
}
