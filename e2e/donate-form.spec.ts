import { expect, test } from "@playwright/test";

const AMOUNT_INPUT = "Enter donation amount in dollars";
const SUBMIT = "Continue to Payment";

test.describe("donate form validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/donate");
  });

  test("submit stays disabled until amount and email are valid", async ({
    page,
  }) => {
    const submit = page.getByRole("button", { name: SUBMIT });
    await expect(submit).toBeDisabled();

    await page.getByLabel(AMOUNT_INPUT).fill("50");
    await expect(submit).toBeDisabled();

    await page.getByLabel("Email Address").fill("donor@example.com");
    await expect(submit).toBeEnabled();
  });

  test("zero and negative amounts do not enable submission", async ({
    page,
  }) => {
    const submit = page.getByRole("button", { name: SUBMIT });

    await page.getByLabel(AMOUNT_INPUT).fill("0");
    await page.getByLabel("Email Address").fill("donor@example.com");
    await expect(submit).toBeDisabled();

    await page.getByLabel(AMOUNT_INPUT).fill("-5");
    await expect(submit).toBeDisabled();
  });

  test("currency toggle switches the amount field context", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "NGN (₦)" }).click();

    await expect(
      page.getByLabel("Enter donation amount in naira"),
    ).toBeVisible();
    await expect(page.getByText("₦", { exact: true })).toBeVisible();

    await page.getByRole("button", { name: "USD ($)" }).click();
    await expect(page.getByLabel(AMOUNT_INPUT)).toBeVisible();
  });
});
