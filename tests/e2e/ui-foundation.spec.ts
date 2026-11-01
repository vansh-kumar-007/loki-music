import { expect, test } from "@playwright/test";

test("landing page introduces LOKI and discloses preview status", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Music is better when shared." })).toBeVisible();
  await expect(page.getByText(/No music or accounts are connected yet/)).toBeVisible();
  await expect(page.getByRole("link", { name: "Start listening" })).toHaveAttribute("href", "/dashboard");
  await expect(page.getByRole("link", { name: "Explore rooms" })).toHaveAttribute("href", "/rooms");
});

test("dashboard exposes honest connection states and a working queue panel", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page.locator(".preview-banner strong")).toHaveText("Interface preview");
  await expect(page.getByText("Provider setup comes later")).toBeVisible();
  await page.getByRole("button", { name: "Open queue" }).click();
  const dialog = page.getByRole("dialog", { name: "The queue" });
  await expect(dialog).toBeVisible();
  await expect(page.getByText("A shared queue will be available")).toBeVisible();
  const closeButton = dialog.getByRole("button", { name: "Close queue" });
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(page.getByRole("button", { name: "Open queue" })).toBeFocused();
});

test("sample search filters locally and does not expose playback actions", async ({ page }) => {
  await page.goto("/search");

  const search = page.getByRole("searchbox", { name: "Search sample music" });
  await search.fill("Glass");
  await expect(page.locator("#main-content").getByText("Glass Gardens", { exact: true })).toBeVisible();
  await expect(page.getByText("1 fictional sample track")).toBeVisible();
  await expect(page.locator(".track-row-preview").first()).toHaveAttribute("title", "Playback is not available in Phase 1");

  await search.fill("no matching title");
  await expect(page.getByText(/No sample tracks match/)).toBeVisible();
  await page.locator(".search-no-results").getByRole("button", { name: "Clear search" }).click();
  await expect(page.getByText("5 fictional sample tracks")).toBeVisible();
});

test("mobile navigation opens and the dashboard fits its viewport", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The mobile layout has its own viewport project.");
  await page.goto("/dashboard");

  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.getByRole("complementary", { name: "Application navigation" })).toBeHidden();
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await expect(page.getByRole("complementary", { name: "Application navigation" })).toBeVisible();
  await page.getByRole("complementary", { name: "Application navigation" }).getByRole("link", { name: "Listening Rooms", exact: true }).click();
  await expect(page).toHaveURL(/\/rooms$/, { timeout: 15_000 });
  await expect(page.getByRole("heading", { name: /Your room/ })).toBeVisible();

  const viewportWidth = await page.evaluate(() => window.innerWidth);
  const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(documentWidth).toBeLessThanOrEqual(viewportWidth);
});

test("dashboard stays within tablet, mobile, and desktop viewport widths", async ({ page }) => {
  await page.goto("/dashboard");

  for (const width of [1440, 820, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.getByRole("heading", { name: /Welcome back/ })).toBeVisible();
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth), {
        message: `document should fit within ${width}px after responsive layout settles`,
      })
      .toBeLessThanOrEqual(width);
  }
});

test("sign-in route does not accept credentials before authentication exists", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByRole("heading", { name: /Welcome back/ })).toBeVisible();
  await expect(page.getByText("Authentication is not connected yet. This preview does not accept credentials or create accounts.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore the app preview" })).toHaveAttribute("href", "/dashboard");
});
