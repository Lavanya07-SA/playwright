import{test,expect}from '@playwright/test';
test("Adactin Hotel", async ({ browser }) => {
  const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto("https://adactinhotelapp.com/");
  await page.waitForTimeout(1000);
 const context2 = await browser.newContext();
 const page2 = await context2.newPage();
 await page2.goto("https://adactinhotelapp.com/");

});