# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: annotation.spec.js >> fail annotation
- Location: tests\annotation.spec.js:15:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: 1
```

# Test source

```ts
  1  | //annotation are special tag-used to control test behaviour(skip fail slow)
  2  | //skip()-method name-skips the test
  3  | //fail()-expect to fail
  4  | //slow()-increase timeout
  5  | import { test, expect } from "@playwright/test";
  6  | test("annotation", async ({ page }) => {
  7  |   test.skip();
  8  |   await page.goto(
  9  |     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  10 |   );
  11 |   await page.fill('[name="username"]', "Admin");
  12 |   await page.fill('[name="password"]', "admin123");
  13 |   await page.click('[type="submit"]');
  14 | });
  15 | test('fail annotation',async({page})=>{
  16 |     test.fail();
  17 |     await page.goto('https://www.amazon.in/')
> 18 |     expect(1).toBe(2);//wrong assertation
     |               ^ Error: expect(received).toBe(expected) // Object.is equality
  19 | })
  20 | test('slow annotation',async({page})=>{
  21 |     test.slow();
  22 |     await page.goto('https://www.flipkart.com/')
  23 | 
  24 | })
  25 | /*test("a", async ({ page }) => {
  26 |   await page.goto(
  27 |     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  28 |   );
  29 | });
  30 | test.only("b", async ({ page }) => {
  31 |   await page.goto("https://www.amazon.in/");
  32 | });
  33 | test("c", async ({ page }) => {
  34 |   await page.goto("https://www.flipkart.com/");
  35 | });*/
  36 | 
```