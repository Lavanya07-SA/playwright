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
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9]:
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
          - link "Courses" [ref=e20]:
            - /url: /courses
          - link "Contact" [ref=e21]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32]:
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
                - link "Download Excel" [ref=e64]:
                  - /url: /assets/files/sample.xlsx
                - link "Download Pdf" [ref=e65]:
                  - /url: /assets/files/sample.pdf
                - link "Download Text" [ref=e66]:
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
              - link "Watch Tutorial" [ref=e91]:
                - /url: /video/file
              - generic [ref=e95]:
                - text: "Practice ID:"
                - code [ref=e96]: file
          - generic [ref=e99]:
            - insertion:
              - iframe [ref=e101]
        - insertion [ref=e105]:
          - generic [ref=e107]:
            - generic "These are topics related to the article that might interest you" [ref=e108]: Discover more
            - link "Compare SSDs" [ref=e109] [cursor=pointer]
            - link "Share Files Online" [ref=e113] [cursor=pointer]
            - link "Browse Reference" [ref=e117] [cursor=pointer]
            - link "Upgrade Tech" [ref=e121] [cursor=pointer]
            - link "Enroll in Classes" [ref=e125] [cursor=pointer]
            - link "Find Study Aids" [ref=e129] [cursor=pointer]
            - link "Get Class Supplies" [ref=e133] [cursor=pointer]
            - link "Try Office Apps" [ref=e137] [cursor=pointer]
            - link "Resume" [ref=e141] [cursor=pointer]
            - link "Build Your Resume" [ref=e145] [cursor=pointer]
    - contentinfo [ref=e149]:
      - generic [ref=e150]:
        - paragraph [ref=e151]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e152]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e153]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e154]:
          - link "GitHub" [ref=e155]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e159]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e163]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e169]:
            - /url: /contact
          - link "🍕 Support" [ref=e170]:
            - /url: https://buymeacoffee.com/letcode
  - generic:
    - insertion:
      - iframe [ref=e172]
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