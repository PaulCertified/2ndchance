import { Link } from "react-router-dom";

const BlogHeader = () => (
  <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-40">
    <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
      <Link to="/" className="font-heading font-bold text-lg text-primary hover:opacity-90 transition-opacity">
        Second Chance Life
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium">
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
