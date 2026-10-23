# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame.spec.js >> frame
- Location: tests\frame.spec.js:2:5

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
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: Rohit
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [ref=f1e12]: Kumar
                  - paragraph [ref=f1e14]: You have entered Rohit Kumar
                  - iframe [active] [ref=f1e16]:
                    - generic [ref=f5e1]:
                      - generic [ref=f5e5]:
                        - generic [ref=f5e6]: Email
                        - textbox "Enter email" [active] [ref=f5e7]: rohit.kumar@example.com
                      - insertion [ref=f5e9]
                - insertion [ref=f1e18]
          - generic [ref=e53]:
            - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - generic [ref=e69]:
                  - text: switchTo()
                  - link "Enroll in Classes" [ref=e70] [cursor=pointer]
              - listitem [ref=e74]:
                - generic [ref=e78]: defaultContent()
              - listitem [ref=e79]:
                - generic [ref=e83]: parentFrame()
              - listitem [ref=e84]:
                - generic [ref=e88]:
                  - text: Overloading concept -
                  - link "JAVA" [ref=e89] [cursor=pointer]:
                    - /url: "#"
            - generic [ref=e92]:
              - link "Watch Tutorial" [ref=e93] [cursor=pointer]:
                - /url: /video/frame
              - generic [ref=e97]:
                - text: "Practice ID:"
                - code [ref=e98]: frame
          - insertion [ref=e102]
        - insertion [ref=e106]
    - contentinfo [ref=e107]:
      - generic [ref=e108]:
        - paragraph [ref=e109]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e110] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e111] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e112]:
          - link "GitHub" [ref=e113] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e117] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e121] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e127] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e128] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - dialog "Unlock more content" [ref=e131]:
    - generic [ref=e132]:
      - img "Welcome to letcode.in" [ref=e135]
      - generic [ref=e136]:
        - heading "Unlock more content" [level=1] [ref=e137]
        - paragraph [ref=e139]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e141] [cursor=pointer]:
        - generic [ref=e142]:
          - generic [ref=e143]: View a short ad
          - generic [ref=e144]: Site-wide access for 24 hours
```