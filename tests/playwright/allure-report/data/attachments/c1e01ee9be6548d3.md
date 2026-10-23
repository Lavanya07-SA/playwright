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
            - link "Build Your Resume" [ref=e141] [cursor=pointer]
            - link "Resume" [ref=e145] [cursor=pointer]
    - contentinfo [ref=e149]:
      - generic [ref=e150]:
        - paragraph [ref=e151]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e152] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e153] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e154]:
          - link "GitHub" [ref=e155] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
          - link "YouTube" [ref=e159] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
          - link "LinkedIn" [ref=e163] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - link "Contact" [ref=e169] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e170] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e172]:
    - iframe [ref=e174]:
      - generic [ref=f8e1]:
        - generic [ref=f8e6]:
          - generic [ref=f8e7]:
            - generic "Google Gemini" [ref=f8e9]:
              - link "Claim your free Gemini student plan" [ref=f8e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwPZnr2LPaq7YG7rM4t4P9YeSkALvnYGbigG26p3h_BW1kB8QASDTkZYiYOWS6IPYDqAB9OmL_gLIAQGoAwHIA8sEqgSCAk_QCO5mWXtKIO-yeLK82GT-y3r-zjzI0_VnCZoa7SQDABL-f1rKAFrTxR5bCtCvSRoL7wZK92ZM4Y8UnV2kYU4GgokiSC6IbKR9ux2laEBJyyrbetXHkgLwSkIjqMDz0JxpJXc1T80OHvar_w7Fvti6xUG9tG65fe3vQKNyLUbBE8OtWtygWbBXv1k_jiPWbgQud-FLmdgpgiOvrzXVUkO4nZ376klbKZo44VgnzZghUK7O1M1t9lHUCbJqJDmi-NN0V-PJtOCSDTw_0YJ6UGNxgov9T-Bbrj3HgxTFp6z4ihqixWTq2tDt5ohRgmk8MZ2GWV8nzIAZrtTH9RVPS2SXi8AEhs7smt8FiAWm5vrSWYAH9JX0gQGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB5jFsQKoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WJW6xpyvuZcDYAGaCSFodHRwczovL29uZS5nb29nbGUuY29tL2FpLXN0dWRlbnSxCdDU7tOR-oi2gAoByAsB4AsBogxTKgoKCPDfsQKZ7rECYhAKDmNvbS5nb29nbGUub25laisKKWNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLnN1YnNjcmlwdGlvbnMucmVkeAGIAQGQAQGqDQJJTsgNAeoNEwiz8cacr7mXAxU6ptgFHfWDBCKIDgnYEw2IFAbQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpmYYASIBANAYAegYAcIZAggB&gclid=EAIaIQobChMI7uvGnK-5lwMVOqbYBR31gwQiEAEYASAAEgKx8fD_BwE&num=1&cid=CAQSjQIAQM4h3N2_Fpx76GXUiVCTOIj9dkCvL-aDaGrWyqnrWciY_3P1Kj2eFfdWqqw-S6OXbqCM6yTnIwU8SLlkTEpHaezh83ImwwTJhHu6tP_rBQYz_M8MJTPAJDpzj9LS2XpjNCl5nXWPqKS2fQrZ5230O_5Md6XO7iCIOv1fnzJ2rAOWrDEtSZADxQ2r8FHqBItFsHChSuHPJVTQMlxwmLYnuY6Z2fg9emaUv37qd2U1CkskU7v5sV4ORUrsrdEBI9ArDGsmrH_DbWSlvY61Z7sw_QWqWs9cvk2akvngg29HNKZYpUxZbSAlYkCL9IJ7S4kMytVTsIVHZeajyMHQ0VgtTDNHNeOsk3VfKXeLnBgB&sig=AOD64_0sNa8AizN9HDGJUEhTArVUg9Af8Q&rf=1&nb=0&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700009108194252%26ds_a_cid%3D272908699%26ds_a_caid%3D24064733990%26ds_a_agid%3D197356365574%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D820911958787%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34712873.453979924%3Bdc_trk_aid%3D648111639%3Bdc_trk_cid%3D246484283%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_transparent%3D1%3B%3Fhttps://one.google.com/ai-student%3Fplans%3D1%252C2%26utm_source%3Dgemini%26utm_medium%3Dpaid_media%26utm_campaign%3Dslap_dg_dr-dg%26gad_source%3D5%26gad_campaignid%3D24064733990
            - generic [ref=f8e11]:
              - 'link "Google Gemini: Claim your free student plan for 1 year" [ref=f8e13] [cursor=pointer]':
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwPZnr2LPaq7YG7rM4t4P9YeSkALvnYGbigG26p3h_BW1kB8QASDTkZYiYOWS6IPYDqAB9OmL_gLIAQGoAwHIA8sEqgSCAk_QCO5mWXtKIO-yeLK82GT-y3r-zjzI0_VnCZoa7SQDABL-f1rKAFrTxR5bCtCvSRoL7wZK92ZM4Y8UnV2kYU4GgokiSC6IbKR9ux2laEBJyyrbetXHkgLwSkIjqMDz0JxpJXc1T80OHvar_w7Fvti6xUG9tG65fe3vQKNyLUbBE8OtWtygWbBXv1k_jiPWbgQud-FLmdgpgiOvrzXVUkO4nZ376klbKZo44VgnzZghUK7O1M1t9lHUCbJqJDmi-NN0V-PJtOCSDTw_0YJ6UGNxgov9T-Bbrj3HgxTFp6z4ihqixWTq2tDt5ohRgmk8MZ2GWV8nzIAZrtTH9RVPS2SXi8AEhs7smt8FiAWm5vrSWYAH9JX0gQGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB5jFsQKoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WJW6xpyvuZcDYAGaCSFodHRwczovL29uZS5nb29nbGUuY29tL2FpLXN0dWRlbnSxCdDU7tOR-oi2gAoByAsB4AsBogxTKgoKCPDfsQKZ7rECYhAKDmNvbS5nb29nbGUub25laisKKWNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLnN1YnNjcmlwdGlvbnMucmVkeAGIAQGQAQGqDQJJTsgNAeoNEwiz8cacr7mXAxU6ptgFHfWDBCKIDgnYEw2IFAbQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpmYYASIBANAYAegYAcIZAggB&gclid=EAIaIQobChMI7uvGnK-5lwMVOqbYBR31gwQiEAEYASAAEgKx8fD_BwE&num=1&cid=CAQSjQIAQM4h3N2_Fpx76GXUiVCTOIj9dkCvL-aDaGrWyqnrWciY_3P1Kj2eFfdWqqw-S6OXbqCM6yTnIwU8SLlkTEpHaezh83ImwwTJhHu6tP_rBQYz_M8MJTPAJDpzj9LS2XpjNCl5nXWPqKS2fQrZ5230O_5Md6XO7iCIOv1fnzJ2rAOWrDEtSZADxQ2r8FHqBItFsHChSuHPJVTQMlxwmLYnuY6Z2fg9emaUv37qd2U1CkskU7v5sV4ORUrsrdEBI9ArDGsmrH_DbWSlvY61Z7sw_QWqWs9cvk2akvngg29HNKZYpUxZbSAlYkCL9IJ7S4kMytVTsIVHZeajyMHQ0VgtTDNHNeOsk3VfKXeLnBgB&sig=AOD64_0sNa8AizN9HDGJUEhTArVUg9Af8Q&rf=1&nb=7&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700009108194252%26ds_a_cid%3D272908699%26ds_a_caid%3D24064733990%26ds_a_agid%3D197356365574%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D820911958787%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34712873.453979924%3Bdc_trk_aid%3D648111639%3Bdc_trk_cid%3D246484283%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_transparent%3D1%3B%3Fhttps://one.google.com/ai-student%3Fplans%3D1%252C2%26utm_source%3Dgemini%26utm_medium%3Dpaid_media%26utm_campaign%3Dslap_dg_dr-dg%26gad_source%3D5%26gad_campaignid%3D24064733990
              - link [ref=f8e14] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwPZnr2LPaq7YG7rM4t4P9YeSkALvnYGbigG26p3h_BW1kB8QASDTkZYiYOWS6IPYDqAB9OmL_gLIAQGoAwHIA8sEqgSCAk_QCO5mWXtKIO-yeLK82GT-y3r-zjzI0_VnCZoa7SQDABL-f1rKAFrTxR5bCtCvSRoL7wZK92ZM4Y8UnV2kYU4GgokiSC6IbKR9ux2laEBJyyrbetXHkgLwSkIjqMDz0JxpJXc1T80OHvar_w7Fvti6xUG9tG65fe3vQKNyLUbBE8OtWtygWbBXv1k_jiPWbgQud-FLmdgpgiOvrzXVUkO4nZ376klbKZo44VgnzZghUK7O1M1t9lHUCbJqJDmi-NN0V-PJtOCSDTw_0YJ6UGNxgov9T-Bbrj3HgxTFp6z4ihqixWTq2tDt5ohRgmk8MZ2GWV8nzIAZrtTH9RVPS2SXi8AEhs7smt8FiAWm5vrSWYAH9JX0gQGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB5jFsQKoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WJW6xpyvuZcDYAGaCSFodHRwczovL29uZS5nb29nbGUuY29tL2FpLXN0dWRlbnSxCdDU7tOR-oi2gAoByAsB4AsBogxTKgoKCPDfsQKZ7rECYhAKDmNvbS5nb29nbGUub25laisKKWNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLnN1YnNjcmlwdGlvbnMucmVkeAGIAQGQAQGqDQJJTsgNAeoNEwiz8cacr7mXAxU6ptgFHfWDBCKIDgnYEw2IFAbQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpmYYASIBANAYAegYAcIZAggB&gclid=EAIaIQobChMI7uvGnK-5lwMVOqbYBR31gwQiEAEYASAAEgKx8fD_BwE&num=1&cid=CAQSjQIAQM4h3N2_Fpx76GXUiVCTOIj9dkCvL-aDaGrWyqnrWciY_3P1Kj2eFfdWqqw-S6OXbqCM6yTnIwU8SLlkTEpHaezh83ImwwTJhHu6tP_rBQYz_M8MJTPAJDpzj9LS2XpjNCl5nXWPqKS2fQrZ5230O_5Md6XO7iCIOv1fnzJ2rAOWrDEtSZADxQ2r8FHqBItFsHChSuHPJVTQMlxwmLYnuY6Z2fg9emaUv37qd2U1CkskU7v5sV4ORUrsrdEBI9ArDGsmrH_DbWSlvY61Z7sw_QWqWs9cvk2akvngg29HNKZYpUxZbSAlYkCL9IJ7S4kMytVTsIVHZeajyMHQ0VgtTDNHNeOsk3VfKXeLnBgB&sig=AOD64_0sNa8AizN9HDGJUEhTArVUg9Af8Q&rf=1&nb=8&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700009108194252%26ds_a_cid%3D272908699%26ds_a_caid%3D24064733990%26ds_a_agid%3D197356365574%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D820911958787%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34712873.453979924%3Bdc_trk_aid%3D648111639%3Bdc_trk_cid%3D246484283%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_transparent%3D1%3B%3Fhttps://one.google.com/ai-student%3Fplans%3D1%252C2%26utm_source%3Dgemini%26utm_medium%3Dpaid_media%26utm_campaign%3Dslap_dg_dr-dg%26gad_source%3D5%26gad_campaignid%3D24064733990
          - generic "Google Gemini" [ref=f8e17]:
            - link "Google Gemini" [ref=f8e18] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwPZnr2LPaq7YG7rM4t4P9YeSkALvnYGbigG26p3h_BW1kB8QASDTkZYiYOWS6IPYDqAB9OmL_gLIAQGoAwHIA8sEqgSCAk_QCO5mWXtKIO-yeLK82GT-y3r-zjzI0_VnCZoa7SQDABL-f1rKAFrTxR5bCtCvSRoL7wZK92ZM4Y8UnV2kYU4GgokiSC6IbKR9ux2laEBJyyrbetXHkgLwSkIjqMDz0JxpJXc1T80OHvar_w7Fvti6xUG9tG65fe3vQKNyLUbBE8OtWtygWbBXv1k_jiPWbgQud-FLmdgpgiOvrzXVUkO4nZ376klbKZo44VgnzZghUK7O1M1t9lHUCbJqJDmi-NN0V-PJtOCSDTw_0YJ6UGNxgov9T-Bbrj3HgxTFp6z4ihqixWTq2tDt5ohRgmk8MZ2GWV8nzIAZrtTH9RVPS2SXi8AEhs7smt8FiAWm5vrSWYAH9JX0gQGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gH2baxAqgHmgaoB5jFsQKoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB8LIsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAGEi9_cE6WJW6xpyvuZcDYAGaCSFodHRwczovL29uZS5nb29nbGUuY29tL2FpLXN0dWRlbnSxCdDU7tOR-oi2gAoByAsB4AsBogxTKgoKCPDfsQKZ7rECYhAKDmNvbS5nb29nbGUub25laisKKWNvbS5nb29nbGUuYW5kcm9pZC5hcHBzLnN1YnNjcmlwdGlvbnMucmVkeAGIAQGQAQGqDQJJTsgNAeoNEwiz8cacr7mXAxU6ptgFHfWDBCKIDgnYEw2IFAbQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICpmYYASIBANAYAegYAcIZAggB&gclid=EAIaIQobChMI7uvGnK-5lwMVOqbYBR31gwQiEAEYASAAEgKx8fD_BwE&num=1&cid=CAQSjQIAQM4h3N2_Fpx76GXUiVCTOIj9dkCvL-aDaGrWyqnrWciY_3P1Kj2eFfdWqqw-S6OXbqCM6yTnIwU8SLlkTEpHaezh83ImwwTJhHu6tP_rBQYz_M8MJTPAJDpzj9LS2XpjNCl5nXWPqKS2fQrZ5230O_5Md6XO7iCIOv1fnzJ2rAOWrDEtSZADxQ2r8FHqBItFsHChSuHPJVTQMlxwmLYnuY6Z2fg9emaUv37qd2U1CkskU7v5sV4ORUrsrdEBI9ArDGsmrH_DbWSlvY61Z7sw_QWqWs9cvk2akvngg29HNKZYpUxZbSAlYkCL9IJ7S4kMytVTsIVHZeajyMHQ0VgtTDNHNeOsk3VfKXeLnBgB&sig=AOD64_0sNa8AizN9HDGJUEhTArVUg9Af8Q&rf=1&nb=1&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700009108194252%26ds_a_cid%3D272908699%26ds_a_caid%3D24064733990%26ds_a_agid%3D197356365574%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D820911958787%26ds_e_matchtype%3Dcontent%26ds_e_device%3Dc%26ds_e_network%3Dd%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34712873.453979924%3Bdc_trk_aid%3D648111639%3Bdc_trk_cid%3D246484283%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_transparent%3D1%3B%3Fhttps://one.google.com/ai-student%3Fplans%3D1%252C2%26utm_source%3Dgemini%26utm_medium%3Dpaid_media%26utm_campaign%3Dslap_dg_dr-dg%26gad_source%3D5%26gad_campaignid%3D24064733990
        - generic [ref=f8e19] [cursor=pointer]
        - button [ref=f8e24] [cursor=pointer]
        - iframe
  - dialog "Unlock more content" [active] [ref=e177]:
    - generic [ref=e178]:
      - img "Welcome to letcode.in" [ref=e181]
      - generic [ref=e182]:
        - heading "Unlock more content" [level=1] [ref=e183]
        - paragraph [ref=e185]: Take action to continue accessing the content on this site
      - button "View a short ad Site-wide access for 24 hours" [ref=e187] [cursor=pointer]:
        - generic [ref=e188]:
          - generic [ref=e189]: View a short ad
          - generic [ref=e190]: Site-wide access for 24 hours
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