# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: button.spec.js >> button
- Location: tests\button.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - generic [ref=e41]: Button
          - heading "Button" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: Goto Home and come back here using driver commands
              - link "Goto Home" [ref=e52] [cursor=pointer]:
                - /url: /
            - generic [ref=e53]:
              - generic [ref=e54]: Get the X & Y co-ordinates
              - button "Find Location" [ref=e56] [cursor=pointer]
            - generic [ref=e57]:
              - generic [ref=e58]: Find the color of the button
              - button "What is my color?" [ref=e60] [cursor=pointer]
            - generic [ref=e61]:
              - generic [ref=e62]: Find the height & width of the button
              - button "How tall & fat I am?" [ref=e64] [cursor=pointer]
            - generic [ref=e65]:
              - generic [ref=e66]: Confirm button is disabled
              - button "Disabled" [disabled] [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]: Click and Hold Button
              - button [ref=e72] [cursor=pointer]:
                - heading "Button Hold!" [level=2] [ref=e74]
          - generic [ref=e76]:
            - heading "Learning Points" [level=3] [ref=e81]
            - list [ref=e82]:
              - listitem [ref=e83]:
                - generic [ref=e87]:
                  - text: click()
                  - link "Enroll in Classes" [ref=e88] [cursor=pointer]
              - listitem [ref=e92]:
                - generic [ref=e96]: driver navigation commands
              - listitem [ref=e97]:
                - generic [ref=e101]: getLocation()
              - listitem [ref=e102]:
                - generic [ref=e106]: getCss()
              - listitem [ref=e107]:
                - generic [ref=e111]: getSize()
              - listitem [ref=e112]:
                - generic [ref=e116]: isEnabled()
            - generic [ref=e117]:
              - link "Watch Tutorial" [ref=e118] [cursor=pointer]:
                - /url: /video/button
              - generic [ref=e122]:
                - text: "Practice ID:"
                - code [ref=e123]: button
          - insertion [ref=e127]
        - insertion [ref=e131]
    - contentinfo [ref=e132]:
      - generic [ref=e133]:
        - paragraph [ref=e134]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e135] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e136] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e137]:
          - link "GitHub" [ref=e138] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e142] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e146] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e152] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e153] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - dialog "Unlock more content" [active] [ref=e156]:
    - generic [ref=e157]:
      - img "Welcome to letcode.in" [ref=e160]
      - generic [ref=e161]:
        - heading "Unlock more content" [level=1] [ref=e162]
        - paragraph [ref=e164]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e166] [cursor=pointer]:
        - generic [ref=e167]:
          - generic [ref=e168]: View a short ad
          - generic [ref=e169]: Site-wide access for 24 hours
```