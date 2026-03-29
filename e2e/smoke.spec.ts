import { test, expect } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Denied Life Insurance/i);
});

test("blog index loads", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: "Blog", exact: true })).toBeVisible();
});

test("blog post loads", async ({ page }) => {
  await page.goto("/blog/life-insurance-declined-what-to-do-next");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Declined/i);
});
