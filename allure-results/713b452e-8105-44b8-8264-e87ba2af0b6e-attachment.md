# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fileupload.spec.js >> file upload
- Location: tests\fileupload.spec.js:2:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\ADMIN\Documents\playwright\tests\demo.txt'
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
            - generic [ref=e41]:
              - text: Upload and Download
              - link "Share Files Online" [ref=e42] [cursor=pointer]
          - heading "Upload and Download" [level=1] [ref=e48]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e52]:
              - heading "Upload" [level=2] [ref=e53]
              - generic [ref=e54]: No file is uploaded, it's a dummy site for learning.
              - generic [ref=e57] [cursor=pointer]:
                - generic [ref=e58]: 
                - generic [ref=e60]: Choose a file…
            - generic [ref=e61]:
              - heading "Download" [level=2] [ref=e62]
              - generic [ref=e63]:
                - link "Download Excel" [ref=e64] [cursor=pointer]:
                  - /url: /assets/files/sample.xlsx
                - link "Download Pdf" [ref=e65] [cursor=pointer]:
                  - /url: /assets/files/sample.pdf
                - link "Download Text" [ref=e66] [cursor=pointer]:
                  - /url: /assets/files/sample.txt
          - generic [ref=e68]:
            - heading "Learning Points" [level=3] [ref=e73]
            - list [ref=e74]:
              - listitem [ref=e75]:
                - generic [ref=e79]: How to download & upload files
              - listitem [ref=e80]:
                - generic [ref=e84]: ChromeOption class
              - listitem [ref=e85]:
                - generic [ref=e89]: SetFileDetector
            - generic [ref=e90]:
              - link "Watch Tutorial" [ref=e91] [cursor=pointer]:
                - /url: /video/file
              - generic [ref=e95]:
                - text: "Practice ID:"
                - code [ref=e96]: file
          - insertion [ref=e100]
        - insertion [ref=e104]
    - contentinfo [ref=e105]:
      - generic [ref=e106]:
        - paragraph [ref=e107]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e108] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e109] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e110]:
          - link "GitHub" [ref=e111] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e115] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e119] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e125] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e126] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - dialog "Unlock more content" [active] [ref=e129]:
    - generic [ref=e130]:
      - img "Welcome to letcode.in" [ref=e133]
      - generic [ref=e134]:
        - heading "Unlock more content" [level=1] [ref=e135]
        - paragraph [ref=e137]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e139] [cursor=pointer]:
        - generic [ref=e140]:
          - generic [ref=e141]: View a short ad
          - generic [ref=e142]: Site-wide access for 24 hours
```

# Test source

```ts
  1 | import{test,expect} from '@playwright/test'
  2 | test('file upload',async({page})=>{
  3 |     await page.goto('https://letcode.in/file');
  4 | 
  5 |     await page.waitForSelector('[for="resume"]');
> 6 |     await page.setInputFiles('[name="resume"]','C:/Users/ADMIN/Documents/playwright/tests/demo.txt');
    |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\ADMIN\Documents\playwright\tests\demo.txt'
  7 |     await page.waitForTimeout(3000);
  8 |     console.log('file uploaded successfully');
  9 | })
```