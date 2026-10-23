# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alert.spec.js >> simple alert
- Location: tests\alert.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#accept')
    - locator resolved to <button id="accept" class="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">Simple Alert</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fc-dialog-overlay"></div> from <div class="fc-message-root">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="fc-dialog-overlay"></div> from <div class="fc-message-root">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    39 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="fc-dialog-overlay"></div> from <div class="fc-message-root">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

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
                - generic [ref=e77]:
                  - text: switchTo()
                  - link "Enroll in Classes" [ref=e78] [cursor=pointer]
              - listitem [ref=e82]:
                - generic [ref=e86]: accept()
              - listitem [ref=e87]:
                - generic [ref=e91]: dismiss()
              - listitem [ref=e92]:
                - generic [ref=e96]: getText()
              - listitem [ref=e97]:
                - generic [ref=e101]: sendKeys()
              - listitem [ref=e102]:
                - generic [ref=e106]: Sweet Alert
            - generic [ref=e107]:
              - link "Watch Tutorial" [ref=e108] [cursor=pointer]:
                - /url: /video/alert
              - generic [ref=e112]:
                - text: "Practice ID:"
                - code [ref=e113]: alert
          - insertion [ref=e117]:
            - generic [ref=e120]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e122]: Discover more
              - link "Learn to Code" [ref=e123] [cursor=pointer]
              - link "Take Tech Courses" [ref=e128] [cursor=pointer]
              - link "Get Career Advice" [ref=e133] [cursor=pointer]
              - link "Resume" [ref=e138] [cursor=pointer]
              - link "Build Your Resume" [ref=e143] [cursor=pointer]
              - link "Enroll in Classes" [ref=e148] [cursor=pointer]
              - link "Find Study Aids" [ref=e153] [cursor=pointer]
              - link "Get Class Supplies" [ref=e158] [cursor=pointer]
        - insertion [ref=e166]:
          - iframe [ref=e168]:
            - iframe [ref=f4e1]:
              - generic [ref=f5e2]:
                - iframe [ref=f5e3] [cursor=pointer]
                - link [ref=f5e4] [cursor=pointer]:
                  - /url: https://insight.adsrvr.org/track/clk?imp=2a3207cf-fd78-46c0-8d57-086bb4866b32&ag=fx8qzpw&sfe=1d06e4ed&sig=vcbxFDYpUNVCBjcZ67EE_qUp__PomhRsK26hTtCZooo.&crid=k8kiwt4u&cf=10814345&fq=0&t=1&td_s=letcode.in&rcats=&mste=&mfld=3&mssi=&mfsi=&sv=google&uhow=88&agsa=&wp=as9k7QAN5wUAhNyyAAUixP6O7NPa8hGMNwrUlA&rgz=600100&dt=PC&osf=Windows&os=Windows10&br=Firefox&svpid=pub-6251538267574677&rlangs=en&mlang=&did=&rcxt=Other&tmpc=28.25&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&crrelr=&npt=&cc=3~KLUv_WPYfRZo6QElDQAUEc8HMip4_cBGEY1XCGu0hmsyQgdmeDhxenB3SJHX5w1QiYeUBVoIazhraXd0NHVgkJTCGi4DwAFY0gE3GCAtIEthbmNoaXB1cmFtIgpWZW5nYXZhc2FsKgYFNjgyNjfd_-fq0uhNGCBmbWptbDJh0AKppo4DKTyKBAYtQ1JNNi2ct6Ki2_vUPwk2M6W_r8jtiqCLoAEQy-27FnNNbTBFMFZ6aGI3N3lQUnJBNklGVxgvR3lTPN-CBfIK92nzQvM5zmRMEaL0YOCIYXbY94OvjZ0vGCQGCInmieZ4-A6fs9bY8Ze22Q0JAqgTPMgTPNATAP0TheuRP4AUAaAUALAUALgUAMgUAOoU8BSRAbIVANgVACr8IECGk3yROlJckyl7shnmWpGhG3sB28Lqyg_8qKVLMSFWVw3hPL1c6T7y-inzcID9ea4PU9ZYUNkllQoDhaQ2tn4-YE2i2JPF4WLe-IyjNk_CilDZNMPnrzZqHpDHdCHcWmQ5nN83dW0WQqXa5owYYvhh0BVe03ZQlcHONoocKQK-7Wp8KJhx-zZQLGq-NCw.&dur=2~KLUv_SMNLtZUXWUAACBnqrE-AQD2yjZpIA..&durs=5TUZ6-&bdc=13&testid=-CRM6-&fpa=354&pcm=3&ict=Unknown&said=sMm0E0Vzhb77yPRrA6IFWw&auct=1&tail=1&r=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCQLQO7WTPaoXON7K5k7QPxMWU6A--p-f2dPb-j45XwI23ARABINORliJg5ZLog9gOyAEJqAMByAMCqgTZAU_QmbV2QZuNx149K0kLHDdl_R79zs7YWhX8mlNFN_yGwIiNCciwYc4l2yUt7n0gGPt_wLzDuGQuj4MfdlSkWbioa_tLf60JaoJKckjLxGXe8401yMEP_f7y0MJ531HOxy6igkQfSVcMRvHQZY0eGzLaWSNQi4GHZTyEPqO1OdpRng4rX1v3nVq5LbWhec4gkqV3BLqwozVLOl4yDsjUqoZaqxx6OocpiNxuiUVvFNDt71aKKlY0ugMKugSpCAAiBCBu70x8bOD5enuVMQXI5P56dIlCbwjCnfSABqGzhoyyrvuCLaAGIagHk9ixAqgHlNixAqgHldixAqgHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB_7osQKoB62-sQKoB7_TsQLYBwDSCDAIgGEQATIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WNGhvK6xuZcDYAD6CwIIAYAMAaoNAklO6g0TCK78vK6xuZcDFbLchAAdxCIF_YgOCdAVAYAXAbIXEBgMKgo1NzcxOTk0MDEzUAGqGBcJVeOlmwTAwkASCjU3NzE5OTQwMTMYAQ%26num%3D1%26sig%3DAOD64_2O2mTpwDpy9XINURFLhst53la2Sw%26adurl%3Dhttps://netshort.onelink.me/XC68?pid=thetradedesk_int&af_siteid=letcode.in&c=fmjml2a&af_c_id=fmjml2a&af_adset_id=fx8qzpw&af_ad_id=k8kiwt4u&af_click_lookback=7d&clickid=2a3207cf-fd78-46c0-8d57-086bb4866b32&idfa=&advertising_id=&android_id=&af_sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0aGV0cmFkZWRlc2tfaW50IiwiYXVkIjpbImNsaWNrIl0sInZlciI6InYxIiwiaWF0IjoxNzkxOTc2Njg2LCJleHAiOjE3OTE5ODAyODYsImp0aSI6IjJhMzIwN2NmLWZkNzgtNDZjMC04ZDU3LTA4NmJiNDg2NmIzMiIsInN1YiI6IlhDNjgiLCJwYXJhbXMiOnsicGlkIjoidGhldHJhZGVkZXNrX2ludCIsImMiOiJmbWptbDJhIiwiYWZfc2l0ZWlkIjoibGV0Y29kZS5pbiJ9fQ.tycbugTUGlXBlXoPMOeMl2H05dz5U7m3pgbthpvY4KY
    - contentinfo [ref=e169]:
      - generic [ref=e170]:
        - paragraph [ref=e171]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e172] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e173] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e174]:
          - link "GitHub" [ref=e175] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e179] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e183] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e189] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e190] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - dialog "Unlock more content" [active] [ref=e193]:
    - generic [ref=e194]:
      - img "Welcome to letcode.in" [ref=e197]
      - generic [ref=e198]:
        - heading "Unlock more content" [level=1] [ref=e199]
        - paragraph [ref=e201]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e203] [cursor=pointer]:
        - generic [ref=e204]:
          - generic [ref=e205]: View a short ad
          - generic [ref=e206]: Site-wide access for 24 hours
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
> 9  |   await page.click("#accept");
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
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
  20 |   await page.goto("https://letcode.in/alert");
  21 |   await page.once("dialog", async (dialog) => {
  22 |     await page.waitForTimeout(3000);
  23 |     await dialog.accept("Lavanya");
  24 |   });
  25 |   await page.click("#prompt");
  26 | });
  27 | 
```