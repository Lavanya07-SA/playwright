# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ohrmtask.spec.js >> ohrm screenshot & videoRec
- Location: tests\ohrmtask.spec.js:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f1e4]:
  - generic [ref=f1e6]:
    - img "company-branding" [ref=f1e8]
    - generic [ref=f1e9]:
      - heading "Login" [level=5] [ref=f1e10]
      - generic [ref=f1e11]:
        - generic [ref=f1e13]:
          - paragraph [ref=f1e14]: "Username : Admin"
          - paragraph [ref=f1e15]: "Password : admin123"
        - generic [ref=f1e16]:
          - generic [ref=f1e18]:
            - generic [ref=f1e19]:
              - generic [ref=f1e20]: 
              - generic [ref=f1e21]: Username
            - textbox "Username" [active] [ref=f1e23]
          - generic [ref=f1e25]:
            - generic [ref=f1e26]:
              - generic [ref=f1e27]: 
              - generic [ref=f1e28]: Password
            - textbox "Password" [ref=f1e30]
          - button "Login" [ref=f1e32] [cursor=pointer]
          - paragraph [ref=f1e34] [cursor=pointer]: Forgot your password?
        - separator [ref=f1e35]
        - paragraph [ref=f1e37]: Or login with
        - generic "Test Provider 1791976297526" [ref=f1e39] [cursor=pointer]:
          - paragraph [ref=f1e40]: Test Provider 1791976297526
      - generic [ref=f1e41]:
        - generic [ref=f1e42]:
          - link [ref=f1e43]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=f1e46]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=f1e49]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=f1e52]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=f1e55]:
          - paragraph [ref=f1e56]: OrangeHRM OS 5.9
          - paragraph [ref=f1e57]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=f1e58]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=f1e60]
```