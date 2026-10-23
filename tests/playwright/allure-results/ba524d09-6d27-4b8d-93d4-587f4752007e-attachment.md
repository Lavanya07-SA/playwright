# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alert.spec.js >> confirm alert
- Location: tests\alert.spec.js:11:5

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
            - generic [ref=e41]: Alert
          - heading "Alert" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]: Accept the Alert
              - button "Simple Alert" [ref=e52] [cursor=pointer]
            - generic [ref=e53]:
              - generic [ref=e54]: Dismiss the Alert & print the alert text
              - button "Confirm Alert" [ref=e56] [cursor=pointer]
            - generic [ref=e57]:
              - generic [ref=e58]: Type your name & accept
              - button "Prompt Alert" [ref=e60] [cursor=pointer]
            - generic [ref=e61]:
              - generic [ref=e62]: Sweet alert
              - button "Modern Alert" [ref=e64] [cursor=pointer]
          - generic [ref=e66]:
            - heading "Learning Points" [level=3] [ref=e71]
            - list [ref=e72]:
              - listitem [ref=e73]:
                - generic [ref=e77]: switchTo()
              - listitem [ref=e78]:
                - generic [ref=e82]: accept()
              - listitem [ref=e83]:
                - generic [ref=e87]: dismiss()
              - listitem [ref=e88]:
                - generic [ref=e92]: getText()
              - listitem [ref=e93]:
                - generic [ref=e97]: sendKeys()
              - listitem [ref=e98]:
                - generic [ref=e102]: Sweet Alert
            - generic [ref=e103]:
              - link "Watch Tutorial" [ref=e104] [cursor=pointer]:
                - /url: /video/alert
              - generic [ref=e108]:
                - text: "Practice ID:"
                - code [ref=e109]: alert
          - generic [ref=e112]:
            - insertion:
              - iframe [ref=e114]
        - insertion [ref=e118]:
          - generic [ref=e120]:
            - generic "These are topics related to the article that might interest you" [ref=e121]: Discover more
            - link "Learn to Code" [ref=e122] [cursor=pointer]
            - link "Take Tech Courses" [ref=e126] [cursor=pointer]
            - link "Get Career Advice" [ref=e130] [cursor=pointer]
            - link "Resume" [ref=e134] [cursor=pointer]
            - link "Build Your Resume" [ref=e138] [cursor=pointer]
            - link "Enroll in Classes" [ref=e142] [cursor=pointer]
            - link "Find Study Aids" [ref=e146] [cursor=pointer]
            - link "Get Class Supplies" [ref=e150] [cursor=pointer]
            - link "Find Song Lyrics" [ref=e154] [cursor=pointer]
            - link "Get Certified" [ref=e158] [cursor=pointer]
    - contentinfo [ref=e162]:
      - generic [ref=e163]:
        - paragraph [ref=e164]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e165] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e166] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
          - link "Learn to Code" [ref=e167] [cursor=pointer]
        - generic [ref=e171]:
          - link "GitHub" [ref=e172] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e176] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e180] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e186] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e187] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - generic:
    - insertion:
      - iframe [ref=e189]
  - dialog "Unlock more content" [active] [ref=e192]:
    - generic [ref=e193]:
      - img "Welcome to letcode.in" [ref=e196]
      - generic [ref=e197]:
        - heading "Unlock more content" [level=1] [ref=e198]
        - paragraph [ref=e200]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e202] [cursor=pointer]:
        - generic [ref=e203]:
          - generic [ref=e204]: View a short ad
          - generic [ref=e205]: Site-wide access for 24 hours
```