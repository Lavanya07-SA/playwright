# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotationtask.spec.js >> slow annotation
- Location: tests\Annotationtask.spec.js:19:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Tap the dino or press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, tap the dino or press space to play" [ref=e16]
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
  19 | test("slow annotation", async ({ page,context }) => {
  20 |   test.slow();
> 21 |  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |             ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  22 |  await page.click('//a[text()="OrangeHRM, Inc"]');
  23 |  const currenttabs=context.pages();
  24 |  const tab2=currenttabs[1];
  25 |  await expect(page).toHaveURL(/orangehrm.com/);
  26 |  await tab2.click('//a[text()="Book a Free Demo"]')
  27 |  const tab3=currenttabs[2]
  28 |  await expect(page).toHaveURL(/book-a-free-demo/);
  29 |  await page.fill('[name="FullName"]','Lavanya M')
  30 |  await page.fill('[type="email"]','lavanya@gmail.com');
  31 |  await page.fill('[name="Contact"]','9360696611');
  32 |  await page.selectOption('[name="Country"]','India');
  33 |  await page.fill('[name="CompanyName"]','ABC Company');
  34 |  await page.fill('[name="JobTitle"]','QA Engineer');
  35 |  await page.selectOption('[name="NoOfEmployees"]','200 - 1,000');
  36 |  await page.click('[class="recaptcha-checkbox-checkmark"]');
  37 |  await page.click('[value="Get a Free Demo"]');
  38 | 
  39 | });
  40 | 
```