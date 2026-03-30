import { Link } from "react-router-dom";

const BlogHeader = () => (
  <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-40">
    <div className="container max-w-5xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4 min-w-0">
      <Link
        to="/"
        className="font-heading font-bold text-base sm:text-lg text-primary hover:opacity-90 transition-opacity min-w-0 truncate pr-2"
      >
        Second Chance Life
      </Link>
      <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium shrink-0">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          Home
        </Link>
        <Link to="/blog" className="text-foreground">
          Blog
        </Link>
      </nav>
    </div>
  </header>
);

export default BlogHeader;
