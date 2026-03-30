import { Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import SiteFooter from "@/components/SiteFooter";
import { BLOG_INDEX_DESCRIPTION, BLOG_INDEX_TITLE } from "@/config/siteSeo";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { allBlogPosts } from "@/content/blog/posts";
import { Badge } from "@/components/ui/badge";

const BlogIndex = () => {
  useDocumentMeta({ title: BLOG_INDEX_TITLE, description: BLOG_INDEX_DESCRIPTION });

  return (
    <div className="min-h-screen bg-background flex flex-col w-full overflow-x-hidden">
      <BlogHeader />
      <main className="flex-1 min-w-0">
        <div className="container max-w-3xl mx-auto px-3 sm:px-4 py-10 sm:py-12 md:py-16 w-full min-w-0">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Blog</h1>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl text-pretty">
            Plain-language guides on life insurance after a decline, COPD, heart conditions, AFib, medications like Eliquis,
            and protecting your family—always with realistic expectations, not guarantees.
          </p>

          <ul className="space-y-6">
            {allBlogPosts.map((post) => (
              <li key={post.slug}>
                <article className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow min-w-0">
                  <Badge variant="secondary" className="mb-3 font-normal">
                    {post.category}
                  </Badge>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.description}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <time dateTime={post.publishedAt}>Published {post.publishedAt}</time>
                    <span>Updated {post.updatedAt}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogIndex;
