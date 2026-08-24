import { expect, test } from "@playwright/test";

async function navigateViaNavbar(
  page: import("@playwright/test").Page,
  label: string,
) {
  const hamburger = page.getByRole("button", { name: "Open navigation menu" });
  if (await hamburger.isVisible()) {
    await hamburger.click();
    const dialog = page.getByRole("dialog", { name: "Navigation menu" });
    await dialog.getByRole("link", { name: label }).click();
  } else {
    await page.locator("header").getByRole("link", { name: label }).click();
  }
}

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navbar About Us link routes to /about", async ({ page }) => {
    await navigateViaNavbar(page, "About Us");
    await expect(page).toHaveURL(/\/about$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Building a Legacy of" }),
    ).toBeVisible();
  });

  test("navbar Donate button routes to /donate", async ({ page }) => {
    await navigateViaNavbar(page, "Donate");
    await expect(page).toHaveURL(/\/donate$/);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Your contribution creates opportunity.",
      }),
    ).toBeVisible();
  });

  test("logo returns to the homepage from a subpage", async ({ page }) => {
    await page.goto("/about");
    await page
      .locator("header")
      .getByRole("link", { name: "TalentMakers Foundation home" })
      .click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("mobile menu behaviour", () => {
  test.skip(
    ({ viewport }) => viewport === null || viewport.width >= 1024,
    "mobile-only overlay",
  );

  test("Escape closes the mobile navigation overlay", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation menu" }).click();

    const dialog = page.getByRole("dialog", { name: "Navigation menu" });
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
  });

  test("focus moves into the dialog on open, is trapped inside, and returns to the trigger on close", async ({
    page,
  }) => {
    await page.goto("/");
    const hamburger = page.getByRole("button", {
      name: "Open navigation menu",
    });
    await hamburger.click();

    const dialog = page.getByRole("dialog", { name: "Navigation menu" });
    await expect(dialog).toBeVisible();
    // First focusable in the dialog (the Close button) receives focus.
    await expect(
      dialog.getByRole("button", { name: "Close navigation menu" }),
    ).toBeFocused();

    // Tab cycles inside the dialog instead of reaching the page behind it.
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press("Tab");
      const focused = page.evaluate(() =>
        Boolean(document.activeElement?.closest('[role="dialog"]')),
      );
      expect(await focused).toBe(true);
    }

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(hamburger).toBeFocused();
  });
});
