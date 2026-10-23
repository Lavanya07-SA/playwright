# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alert.spec.js >> prompt alert
- Location: tests\alert.spec.js:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://letcode.in/alert", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home":
        - /url: /
        - img "LetCode"
      - generic [ref=e6]:
        - link "Work-Space" [ref=e7] [cursor=pointer]:
          - /url: /test
        - generic [ref=e8]:
          - button "Products" [ref=e9] [cursor=pointer]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e13]:
          - button "Grooming" [ref=e14] [cursor=pointer]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
            - link "Resume Builder":
              - /url: /resume-builder
        - link "Courses" [ref=e18] [cursor=pointer]:
          - /url: /courses
        - link "Contact" [ref=e19] [cursor=pointer]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e21] [cursor=pointer]
  - main [ref=e24]:
    - generic [ref=e26]:
      - generic [ref=e28]:
        - navigation "Breadcrumb" [ref=e29]:
          - link "Workspace" [ref=e30] [cursor=pointer]:
            - /url: /test
          - generic [ref=e39]: Alert
        - heading "Alert" [level=1] [ref=e42]
      - generic [ref=e44]:
        - generic [ref=e46]:
          - generic [ref=e47]:
            - generic [ref=e48]: Accept the Alert
            - button "Simple Alert" [ref=e50] [cursor=pointer]
          - generic [ref=e51]:
            - generic [ref=e52]: Dismiss the Alert & print the alert text
            - button "Confirm Alert" [ref=e54] [cursor=pointer]
          - generic [ref=e55]:
            - generic [ref=e56]: Type your name & accept
            - button "Prompt Alert" [ref=e58] [cursor=pointer]
          - generic [ref=e59]:
            - generic [ref=e60]: Sweet alert
            - button "Modern Alert" [ref=e62] [cursor=pointer]
        - generic [ref=e64]:
          - heading "Learning Points" [level=3] [ref=e69]
          - list [ref=e70]:
            - listitem [ref=e71]:
              - generic [ref=e75]: switchTo()
            - listitem [ref=e76]:
              - generic [ref=e80]: accept()
            - listitem [ref=e81]:
              - generic [ref=e85]: dismiss()
            - listitem [ref=e86]:
              - generic [ref=e90]: getText()
            - listitem [ref=e91]:
              - generic [ref=e95]: sendKeys()
            - listitem [ref=e96]:
              - generic [ref=e100]: Sweet Alert
          - generic [ref=e101]:
            - link "Watch Tutorial" [ref=e102] [cursor=pointer]:
              - /url: /video/alert
            - generic [ref=e106]:
              - text: "Practice ID:"
              - code [ref=e107]: alert
        - insertion [ref=e111]
      - insertion [ref=e115]
  - contentinfo [ref=e116]:
    - generic [ref=e117]:
      - paragraph [ref=e118]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e119] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e120] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
      - generic [ref=e121]:
        - link "GitHub" [ref=e122] [cursor=pointer]:
          - /url: https://github.com/ortoniKC
        - link "YouTube" [ref=e126] [cursor=pointer]:
          - /url: https://www.youtube.com/@letcode
        - link "LinkedIn" [ref=e130] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - link "Contact" [ref=e136] [cursor=pointer]:
          - /url: /contact
        - link "🍕 Support" [ref=e137] [cursor=pointer]:
          - /url: https://buymeacoffee.com/letcode
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | test("simple alert", async ({ page }) => {
  3  |   await page.goto("https://letcode.in/alert");
  4  |   await page.on("dialog", async (dialog) => {
  5  |     await page.waitForTimeout(3000);
  6  |     await dialog.accept();
  7  |   });
  8  | 
  9  |   await page.click("#accept");
  10 | });
  11 | test("confirm alert", async ({ page }) => {
  12 |   await page.goto("https://letcode.in/alert");
  13 |   await page.on("dialog", async (dialog) => {
  14 |     await page.waitForTimeout(3000);
  15 |     await dialog.accept();
  16 |   });
  17 |   await page.click("#confirm");
  18 | });
  19 | test("prompt alert", async ({ page }) => {
> 20 |   await page.goto("https://letcode.in/alert");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  21 |   await page.once("dialog", async (dialog) => {
  22 |     await page.waitForTimeout(3000);
  23 |     await dialog.accept("Lavanya");
  24 |   });
  25 |   await page.click("#prompt");
  26 | });
  27 | 
```