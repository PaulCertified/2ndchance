import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME } from "@/config/siteSeo";

export type DocumentMetaOptions = {
  title: string;
  description: string;
  /** Open Graph type */
  ogType?: "website" | "article";
  /** ISO date for article:published_time */
  articlePublishedTime?: string;
  articleModifiedTime?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Updates document title, meta description, Open Graph, Twitter, and canonical for the current URL.
 * Call from each top-level route so client-side navigation refreshes tags for crawlers and social previews.
 */
export function useDocumentMeta({ title, description, ogType = "website", articlePublishedTime, articleModifiedTime }: DocumentMetaOptions) {
  const location = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const path = `${location.pathname}${location.search}`;
    const canonicalUrl = `${origin}${path}`;
    const imageUrl = `${origin}${DEFAULT_OG_IMAGE_PATH}`;

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", SITE_NAME);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", `${SITE_NAME} — licensed life insurance help after a decline`);

    if (ogType === "article") {
      if (articlePublishedTime) upsertMeta("property", "article:published_time", articlePublishedTime);
      if (articleModifiedTime) upsertMeta("property", "article:modified_time", articleModifiedTime);
    } else {
      document.head.querySelectorAll('meta[property="article:published_time"], meta[property="article:modified_time"]').forEach((el) => el.remove());
    }

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertLink("canonical", canonicalUrl);
  }, [
    title,
    description,
    ogType,
    articlePublishedTime,
    articleModifiedTime,
    location.pathname,
    location.search,
  ]);
}
