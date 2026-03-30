import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="py-8 px-3 sm:px-4 border-t border-border bg-background w-full min-w-0">
    <div className="container max-w-5xl mx-auto text-center text-xs sm:text-sm text-muted-foreground space-y-2 text-pretty">
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Link to="/" className="text-primary hover:underline font-medium">
          Home
        </Link>
        <span className="text-border">|</span>
        <Link to="/blog" className="text-primary hover:underline font-medium">
          Blog
        </Link>
      </nav>
      <p>© {new Date().getFullYear()} All rights reserved. This is not a guarantee of coverage.</p>
      <p>Consult a licensed agent for details about eligibility and terms.</p>
    </div>
  </footer>
);

export default SiteFooter;
