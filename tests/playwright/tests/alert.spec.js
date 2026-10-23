import { test, expect } from "@playwright/test";
test("simple alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");
  await page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept();
  });

  await page.click("#accept");
});
test("confirm alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");
  await page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept();
  });
  await page.click("#confirm");
});
test("prompt alert", async ({ page }) => {
  await page.goto("https://letcode.in/alert");
  await page.once("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept("Lavanya");
  });
  await page.click("#prompt");
});
