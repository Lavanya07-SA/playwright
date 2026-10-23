# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotationtask.spec.js >> slow annotation
- Location: tests\Annotationtask.spec.js:19:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /orangehrm.com/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

```
Error: page.click: Test ended.
Call log:
  - waiting for locator('//a[text()="Book a Free Demo"]')

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
  19 | test("slow annotation", async ({ page }) => {
  20 |   test.slow();
  21 |  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  22 |  await page.click('//a[text()="OrangeHRM, Inc"]');
  23 |  expect(page).toHaveURL(/orangehrm.com/);
> 24 |  await page.click('//a[text()="Book a Free Demo"]')
     |             ^ Error: page.click: Test ended.
  25 |  expect(page).toHaveURL(/book-a-free-demo/);
  26 |  await page.fill('[name="FullName"]','Lavanya M')
  27 |  await page.fill('[type="email"]','lavanya@gmail.com');
  28 |  await page.fill('[name="Contact"]','9360696611');
  29 |  await page.selectOption('[name="Country"]','India');
  30 |  await page.fill('[name="CompanyName"]','ABC Company');
  31 |  await page.fill('[name="JobTitle"]','QA Engineer');
  32 |  await page.selectOption('[name="NoOfEmployees"]','200 - 1,000');
  33 |  await page.click('[class="recaptcha-checkbox-checkmark"]');
  34 |  await page.click('[value="Get a Free Demo"]');
  35 |  
  36 | });
  37 | 
```