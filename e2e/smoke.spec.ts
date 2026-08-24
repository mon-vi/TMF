import { expect, test } from "@playwright/test";

const ROUTES = [
  { path: "/", heading: "Empowering Future Leaders" },
  { path: "/about", heading: "Building a Legacy of" },
  { path: "/donate", heading: "Your contribution creates opportunity." },
  { path: "/donate/thank-you", heading: "Thank you for your generosity." },
];

test.describe("smoke", () => {
  for (const route of ROUTES) {
    test(`${route.path} renders its hero heading without errors`, async ({
      page,
    }) => {
      const consoleErrors: string[] = [];
      page.on("pageerror", (error) => consoleErrors.push(error.message));

      await page.goto(route.path);

      await expect(
        page.getByRole("heading", { level: 1, name: route.heading }),
      ).toBeVisible();
      expect(consoleErrors).toEqual([]);
    });
  }

  test("every page has exactly one main landmark", async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route.path);
      await expect(page.locator("main")).toHaveCount(1);
    }
  });

  test("unknown routes render the not-found page with a single main landmark", async ({
    page,
  }) => {
    await page.goto("/this-route-does-not-exist");
    await expect(
      page.getByRole("heading", { level: 1, name: /doesn.t exist/i }),
    ).toBeVisible();
    await expect(page.locator("main")).toHaveCount(1);
  });

  test("skip-to-content link is the first element focused via keyboard", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to content" }),
    ).toBeFocused();
  });
});
