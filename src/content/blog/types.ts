export type BlogCategory =
  | "Declined & second chance"
  | "COPD"
  | "Heart failure"
  | "AFib"
  | "CAD"
  | "Age & situation"
  | "Medications";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  category: BlogCategory;
  keywords: string[];
}

export interface BlogPost extends BlogPostMeta {
  body: string;
}
