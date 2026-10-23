# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotationtask.spec.js >> slow annotation
- Location: tests\Annotationtask.spec.js:19:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | /*test("skip annotation", async ({ page }) => {
  3  |   console.log("AdactinHotel Page Test Skipped");
  4  |   test.skip();
  5  |   await page.goto("https://adactinhotelapp.com/");
  6  |   await page.waitForLoadState("domcontentloaded");
  7  |   await page.fill("#username", "admin791");
  8  |   await page.fill("#password", "admin791");
  9  |   await page.click("#login");
  10 | });
  11 | test("fail annotation", async ({ page }) => {
  12 |   test.fail();
  13 |   await page.goto("https://testautomationpractice.blogspot.com/");
  14 |   expect(page).toHaveURL("https://adactinhotelapp.com/");
  15 |   console.log(`Test fail passed-
  16 |     Expected page: AdactinHotel Page
  17 |     Actual page: Testautomationpractice Page`);
  18 | });*/
  19 | test("slow annotation", async ({ browser }) => {
  20 |   test.slow();
> 21 |   page=await browser.newPage();
     |       ^ ReferenceError: page is not defined
  22 |  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  23 |  await page.click('//a[text()="OrangeHRM, Inc"]');
  24 |  expect(page).toHaveURL(/orangehrm.com/);
  25 |  await page.click('//a[text()="Book a Free Demo"]')
  26 |  expect(page).toHaveURL(/book-a-free-demo/);
  27 |  await page.fill('[name="FullName"]','Lavanya M')
  28 |  await page.fill('[type="email"]','lavanya@gmail.com');
  29 |  await page.fill('[name="Contact"]','9360696611');
  30 |  await page.selectOption('[name="Country"]','India');
  31 |  await page.fill('[name="CompanyName"]','ABC Company');
  32 |  await page.fill('[name="JobTitle"]','QA Engineer');
  33 |  await page.selectOption('[name="NoOfEmployees"]','200 - 1,000');
  34 |  await page.click('[class="recaptcha-checkbox-checkmark"]');
  35 |  await page.click('[value="Get a Free Demo"]');
  36 | 
  37 | });
  38 | 
```