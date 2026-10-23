# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: edit.spec.js >> edit
- Location: tests\edit.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://letcode.in/edit", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "main navigation" [ref=e4]:
    - generic [ref=e5]:
      - link "LetCode Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "LetCode" [ref=e7]
      - generic [ref=e8]:
        - link "Work-Space" [ref=e9] [cursor=pointer]:
          - /url: /test
        - generic [ref=e10]:
          - button "Products" [ref=e11] [cursor=pointer]
          - generic:
            - link "Ortoni Report":
              - /url: /product/ortoni-report
            - link "LetXPath":
              - /url: /product/letxpath
            - link "Playwright Runner":
              - /url: /product/playwright-runner
        - generic [ref=e15]:
          - button "Grooming" [ref=e16] [cursor=pointer]
          - generic:
            - link "Test Practice":
              - /url: /test-practice
            - link "Interview Q & A":
              - /url: /interview
            - link "Playwright Quiz":
              - /url: /pw-quiz
            - link "Resume Builder":
              - /url: /resume-builder
        - link "Courses" [ref=e20] [cursor=pointer]:
          - /url: /courses
        - link "Contact" [ref=e21] [cursor=pointer]:
          - /url: /contact
      - button "Switch to dark mode" [ref=e23] [cursor=pointer]
  - main [ref=e26]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - navigation "Breadcrumb" [ref=e31]:
          - link "Workspace" [ref=e32] [cursor=pointer]:
            - /url: /test
          - link "Input" [ref=e42] [cursor=pointer]:
            - /url: "#"
        - heading "Input" [level=1] [ref=e47]
      - generic [ref=e49]:
        - generic [ref=e51]:
          - generic [ref=e52]:
            - generic [ref=e53]: Enter your full Name
            - textbox "Enter your full Name" [active] [ref=e54]:
              - /placeholder: Enter first & last name
          - generic [ref=e55]:
            - generic [ref=e56]: Append a text and press keyboard tab
            - textbox "Append a text and press keyboard tab" [ref=e57]:
              - /placeholder: Enter
              - text: I am good
          - generic [ref=e58]:
            - generic [ref=e59]: What is inside the text box
            - textbox "What is inside the text box" [ref=e60]:
              - /placeholder: Enter
              - text: ortonikc
          - generic [ref=e61]:
            - generic [ref=e62]: Clear the text
            - textbox "Clear the text" [ref=e63]:
              - /placeholder: Enter
              - text: Koushik Chatterjee
          - generic [ref=e64]:
            - generic [ref=e65]: Confirm edit field is disabled
            - textbox "Confirm edit field is disabled" [disabled] [ref=e66]:
              - /placeholder: Enter
          - generic [ref=e67]:
            - generic [ref=e68]: Confirm text is readonly
            - textbox "Confirm text is readonly" [ref=e69]: This text is readonly
        - generic [ref=e71]:
          - heading "Learning Points" [level=3] [ref=e76]
          - list [ref=e77]:
            - listitem [ref=e78]:
              - generic [ref=e82]:
                - text: sendKeys()
                - link "Test Keyboards" [ref=e83] [cursor=pointer]
            - listitem [ref=e87]:
              - generic [ref=e91]:
                - link "Keyboard" [ref=e92] [cursor=pointer]:
                  - /url: "#"
                - text: TAB
            - listitem [ref=e95]:
              - generic [ref=e99]: getAttribute()
            - listitem [ref=e100]:
              - generic [ref=e104]: clear()
            - listitem [ref=e105]:
              - generic [ref=e109]: isEnabled()
          - generic [ref=e110]:
            - link "Watch Tutorial" [ref=e111] [cursor=pointer]:
              - /url: /video/edit
            - generic [ref=e115]:
              - text: "Practice ID:"
              - code [ref=e116]: edit
        - insertion [ref=e120]
      - insertion [ref=e124]
  - contentinfo [ref=e125]:
    - generic [ref=e126]:
      - paragraph [ref=e127]:
        - text: © 2026 LetCode ·
        - link "Koushik Chatterjee" [ref=e128] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - text: "&"
        - link "Bollineni Yaswanth" [ref=e129] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
      - generic [ref=e130]:
        - link "GitHub" [ref=e131] [cursor=pointer]:
          - /url: https://github.com/ortoniKC
        - link "YouTube" [ref=e135] [cursor=pointer]:
          - /url: https://www.youtube.com/@letcode
        - link "LinkedIn" [ref=e139] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/ortoni/
        - link "Contact" [ref=e145] [cursor=pointer]:
          - /url: /contact
        - link "🍕 Support" [ref=e146] [cursor=pointer]:
          - /url: https://buymeacoffee.com/letcode
```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test'
  2  | test('edit',async({page})=>{
> 3  |     await page.goto('https://letcode.in/edit')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  4  |     await page.locator('#fullName').fill('Lavanya')
  5  | 
  6  |     const letter=await page.locator('#join')
  7  | 
  8  |     await letter.press('End')
  9  |     await letter.type(' Student')
  10 |     await letter.press('Tab')
  11 | 
  12 |     const input=await page.locator('#getMe')
  13 |     const getme=await input.inputValue()
  14 |     console.log(getme)
  15 | 
  16 |     const clear=await page.locator('#clearMe')
  17 |     await clear.clear()
  18 | 
  19 |     const enable=await page.locator('#noEdit')
  20 |     const edit=await enable.isEnabled()
  21 |     console.log(edit)
  22 | 
  23 |     const enable1=await page.locator('#dontwrite')
  24 |     const read=await enable1.isEnabled()
  25 |     console.log(read)
  26 | })
```