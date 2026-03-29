import { Link, useParams } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import SiteFooter from "@/components/SiteFooter";
import BlogArticleBody from "@/components/BlogArticleBody";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { assignedAgent } from "@/config/agent";
import { SITE_NAME } from "@/config/siteSeo";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { getPostBySlug, getRelatedPosts } from "@/content/blog/posts";

const toArticleIso = (date: string) => `${date}T12:00:00.000Z`;

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const related = slug && post ? getRelatedPosts(slug, 3) : [];

  useDocumentMeta(
    post
      ? {
          title: `${post.title} | ${SITE_NAME}`,
          description: post.description,
          ogType: "article",
          articlePublishedTime: toArticleIso(post.publishedAt),
          articleModifiedTime: toArticleIso(post.updatedAt),
        }
      : {
          title: `Article not found | ${SITE_NAME}`,
          description:
            "That article may have moved. Browse guides on declined life insurance, COPD, heart conditions, AFib, and more on Second Chance Life.",
          ogType: "website",
        },
  );

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <BlogHeader />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Article not found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Back to blog
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = `${siteUrl}/blog/${post.slug}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BlogHeader />
      <main className="flex-1">
        <article className="container max-w-3xl mx-auto px-4 py-10 md:py-14">
          <Link to="/blog" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← All articles
          </Link>
          <Badge variant="secondary" className="mb-4 font-normal">
            {post.category}
          </Badge>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{post.description}</p>
          <p className="text-sm text-muted-foreground mb-10">
            <time dateTime={post.publishedAt}>Published {post.publishedAt}</time>
            {" · "}
            <span>Last updated {post.updatedAt}</span>
          </p>

          <div className="rounded-xl bg-primary/5 border border-primary/15 p-6 mb-10">
            <p className="text-foreground font-medium mb-2">See if you may qualify</p>
            <p className="text-muted-foreground text-sm mb-4">
              Free check—about a minute. A licensed agent will follow up; there is no obligation.
            </p>
            <Button variant="cta" size="lg" className="rounded-lg" asChild>
              <Link to="/#lead-form">Check eligibility</Link>
            </Button>
          </div>

          <BlogArticleBody markdown={post.body} />

          <div className="mt-10 rounded-xl bg-primary/5 border border-primary/15 p-6">
            <p className="text-foreground font-medium mb-2">Ready for a second opinion on coverage?</p>
            <Button variant="cta" size="lg" className="rounded-lg mt-2" asChild>
              <Link to="/#lead-form">Go to the form</Link>
            </Button>
          </div>

          <aside className="mt-12 pt-10 border-t border-border flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={assignedAgent.photoSrc}
              alt={assignedAgent.fullName}
              className="w-20 h-20 rounded-full object-cover border-2 border-border shrink-0"
            />
            <div>
              <p className="font-heading font-bold text-foreground">{assignedAgent.fullName}</p>
              <p className="text-sm text-muted-foreground">{assignedAgent.title}</p>
              <p className="text-sm text-muted-foreground mt-1">
                National Producer Number (NPN): {assignedAgent.npn}
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                This article is for general education—not medical, legal, or tax advice. Coverage is not guaranteed;
                eligibility depends on underwriting and the carrier.
              </p>
            </div>
          </aside>

          {related.length > 0 && (
            <section className="mt-14 pt-10 border-t border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-4">Related reading</h2>
              <ul className="space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`} className="text-primary font-medium hover:underline">
                      {r.title}
                    </Link>
                    <span className="text-muted-foreground text-sm"> — {r.category}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            keywords: post.keywords.join(", "),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: {
              "@type": "Person",
              name: assignedAgent.fullName,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonical,
            },
          }),
        }}
      />
    </div>
  );
};

export default BlogPost;
