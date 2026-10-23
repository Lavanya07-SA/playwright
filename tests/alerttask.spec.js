import { test, expect } from "@playwright/test";
test("simple alert", async ({ page }) => {
  await page.goto("https://leafground.com/alert.xhtml");
  await page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept();
  });
  await page.click('[id="j_idt88:j_idt91"]');
});
test("confirm alert", async ({ page }) => {
  await page.goto("https://leafground.com/alert.xhtml");
  await page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept();
  });
  await page.click('[id="j_idt88:j_idt93"]');
});
test("prompt alert", async ({ page }) => {
  await page.goto("https://leafground.com/alert.xhtml");
  await page.once("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept("Lavanya");
  });
  await page.click('[id="j_idt88:j_idt104"]');
});
