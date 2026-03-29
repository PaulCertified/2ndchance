import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const markdownComponents: Components = {
  a: ({ href, children }) => {
    if (href?.startsWith("/")) {
      return (
        <Link to={href} className="text-primary font-medium underline-offset-2 hover:underline">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-primary font-medium underline-offset-2 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
};

interface BlogArticleBodyProps {
  markdown: string;
}

const BlogArticleBody = ({ markdown }: BlogArticleBodyProps) => (
  <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-ul:my-4 prose-ol:my-4">
    <Markdown components={markdownComponents}>{markdown}</Markdown>
  </div>
);

export default BlogArticleBody;
