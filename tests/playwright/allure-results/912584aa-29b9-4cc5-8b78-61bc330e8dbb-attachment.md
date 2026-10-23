# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Annotationtask.spec.js >> slow annotation
- Location: tests\Annotationtask.spec.js:19:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /demo-confirmation/
Received string:  "https://orangehrm.com/book-a-free-demo"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://orangehrm.com/book-a-free-demo"

```

```yaml
- navigation:
  - link "OrangeHRM Logo":
    - /url: /
    - img "OrangeHRM Logo"
  - list:
    - listitem
    - listitem:
      - link "Solutions":
        - /url: /book-a-free-demo#
    - listitem:
      - link "Why OrangeHRM":
        - /url: /book-a-free-demo#
    - listitem:
      - link "Resources":
        - /url: /book-a-free-demo#
    - listitem:
      - link "Company":
        - /url: /book-a-free-demo#
    - listitem:
      - link "Pricing":
        - /url: /pricing
  - list:
    - listitem:
      - button "Language": Global
    - listitem:
      - link "Book a Free Demo":
        - /url: /book-a-free-demo
        - button "Book a Free Demo"
    - listitem:
      - link "Contact Sales":
        - /url: /contact-sales
        - button "Contact Sales"
- main:
  - heading "Simplify HR Operations and Empower Your Team with a Complete HR Software" [level=1]
  - img "form-image OHRM"
  - heading "We Just Need a Few Details." [level=3]
  - paragraph: Please answer the captcha, if you do not see the captcha please enable JavaScript
  - group:
    - textbox "Full Name":
      - /placeholder: Full Name*
      - text: Lavanya M
    - textbox "Email":
      - /placeholder: Work Email*
      - text: lavanya@gmail.com
    - textbox "Phone Number":
      - /placeholder: Phone Number*
      - text: "9360696611"
    - combobox "Country":
      - option "Country"
      - option "Afghanistan"
      - option "Albania"
      - option "Algeria"
      - option "American Samoa"
      - option "Andorra"
      - option "Angola"
      - option "Anguilla"
      - option "Antigua and Barbuda"
      - option "Argentina"
      - option "Armenia"
      - option "Aruba"
      - option "Australia"
      - option "Austria"
      - option "Azerbaijan"
      - option "Bahamas"
      - option "Bahrain"
      - option "Bangladesh"
      - option "Barbados"
      - option "Belarus"
      - option "Belgium"
      - option "Belize"
      - option "Benin"
      - option "Bermuda"
      - option "Bhutan"
      - option "Bolivia"
      - option "Bosnia and Herzegowina"
      - option "Botswana"
      - option "Bouvet Island"
      - option "Brazil"
      - option "Brunei Darussalam"
      - option "Bulgaria"
      - option "Burkina Faso"
      - option "Burundi"
      - option "Cambodia"
      - option "Cameroon"
      - option "Canada"
      - option "Cape Verde"
      - option "Cayman Islands"
      - option "Central African Republic"
      - option "Chad"
      - option "Chile"
      - option "China"
      - option "Christmas Island"
      - option "Cocos (Keeling) Islands"
      - option "Colombia"
      - option "Comoros"
      - option "Congo"
      - option "Cook Islands"
      - option "Costa Rica"
      - option "Cote D'Ivoire"
      - option "Croatia"
      - option "Cuba"
      - option "Cyprus"
      - option "Czech Republic"
      - option "Denmark"
      - option "Djibouti"
      - option "Dominica"
      - option "Dominican Republic"
      - option "East Timor"
      - option "Ecuador"
      - option "Egypt"
      - option "El Salvador"
      - option "Equatorial Guinea"
      - option "Eritrea"
      - option "Estonia"
      - option "Ethiopia"
      - option "Falkland Islands (Malvinas)"
      - option "Faroe Islands"
      - option "Fiji"
      - option "Finland"
      - option "France"
      - option "French Guiana"
      - option "French Polynesia"
      - option "French Southern Territories"
      - option "Gabon"
      - option "Gambia"
      - option "Georgia"
      - option "Germany"
      - option "Ghana"
      - option "Gibraltar"
      - option "Greece"
      - option "Greenland"
      - option "Grenada"
      - option "Guadeloupe"
      - option "Guam"
      - option "Guatemala"
      - option "Guinea"
      - option "Guinea-bissau"
      - option "Guyana"
      - option "Haiti"
      - option "Heard and Mc Donald Islands"
      - option "Honduras"
      - option "Hong Kong"
      - option "Hungary"
      - option "Iceland"
      - option "India" [selected]
      - option "Indonesia"
      - option "Iran"
      - option "Iraq"
      - option "Ireland"
      - option "Israel"
      - option "Italy"
      - option "Jamaica"
      - option "Japan"
      - option "Jordan"
      - option "Kazakhstan"
      - option "Kenya"
      - option "Kiribati"
      - option "North Korea"
      - option "South Korea"
      - option "Kuwait"
      - option "Kyrgyzstan"
      - option "Laos"
      - option "Latvia"
      - option "Lebanon"
      - option "Lesotho"
      - option "Liberia"
      - option "Libya"
      - option "Liechtenstein"
      - option "Lithuania"
      - option "Luxembourg"
      - option "Macau"
      - option "Macedonia"
      - option "Madagascar"
      - option "Malawi"
      - option "Malaysia"
      - option "Maldives"
      - option "Mali"
      - option "Malta"
      - option "Marshall Islands"
      - option "Martinique"
      - option "Mauritania"
      - option "Mauritius"
      - option "Mayotte"
      - option "Mexico"
      - option "Moldova"
      - option "Monaco"
      - option "Montenegro"
      - option "Mongolia"
      - option "Morocco"
      - option "Mozambique"
      - option "Myanmar"
      - option "Namibia"
      - option "Nauru"
      - option "Nepal"
      - option "Netherlands"
      - option "Netherlands Antilles"
      - option "New Caledonia"
      - option "New Zealand"
      - option "Nicaragua"
      - option "Niger"
      - option "Nigeria"
      - option "Niue"
      - option "Norfolk Island"
      - option "Northern Mariana Islands"
      - option "Norway"
      - option "Oman"
      - option "Pakistan"
      - option "Palau"
      - option "Panama"
      - option "Papua New Guinea"
      - option "Paraguay"
      - option "Peru"
      - option "Philippines"
      - option "Poland"
      - option "Portugal"
      - option "Puerto Rico"
      - option "Qatar"
      - option "Reunion"
      - option "Romania"
      - option "Russian Federation"
      - option "Rwanda"
      - option "St Kitts and Nevis"
      - option "St Lucia"
      - option "St Vincent and the Grenadines"
      - option "Samoa"
      - option "San Marino"
      - option "Sao Tome and Principe"
      - option "Saudi Arabia"
      - option "Senegal"
      - option "Serbia"
      - option "Seychelles"
      - option "Sierra Leone"
      - option "Singapore"
      - option "Slovakia"
      - option "Slovenia"
      - option "Solomon Islands"
      - option "Somalia"
      - option "South Africa"
      - option "South Georgia"
      - option "Spain"
      - option "Sri Lanka"
      - option "Sudan"
      - option "Suriname"
      - option "Swaziland"
      - option "Sweden"
      - option "Switzerland"
      - option "Syrian Arab Republic"
      - option "Taiwan"
      - option "Tajikistan"
      - option "Tanzania"
      - option "Thailand"
      - option "Togo"
      - option "Tokelau"
      - option "Tonga"
      - option "Trinidad and Tobago"
      - option "Tunisia"
      - option "Turkey"
      - option "Turkmenistan"
      - option "Turks and Caicos Islands"
      - option "Tuvalu"
      - option "Uganda"
      - option "Ukraine"
      - option "United Arab Emirates"
      - option "United Kingdom"
      - option "United States"
      - option "Uruguay"
      - option "Uzbekistan"
      - option "Vanuatu"
      - option "Venezuela"
      - option "Vietnam"
      - option "Virgin Islands"
      - option "Western Sahara"
      - option "Yemen"
      - option "Zambia"
      - option "Zimbabwe"
      - option "South Sandwich Islands"
      - option "St Helena"
      - option "St Pierre and Miquelon"
      - option "Vatican City"
      - option "Wallis and Futuna Islands"
      - option "Zaire"
    - textbox "Company Name": ABC Company
    - textbox "Job title":
      - /placeholder: Job Title*
      - text: QA Engineer
    - combobox "No Of Employees":
      - option "Number of Employees"
      - option "< 10"
      - option "11 - 50"
      - option "51 - 200"
      - option "200 - 1,000" [selected]
      - option "> 1,000"
    - iframe
  - button "Get a Free Demo"
  - paragraph:
    - text: We respect your privacy. By submitting, you agree to your information being processed according to our
    - link "Privacy Policy.":
      - /url: https://www.orangehrm.com/policies/orangehrm-privacy-policy
  - heading "Powering HR for businesses across 100+ countries" [level=5]
  - img "toluna logo"
  - img "CFI logo"
  - img "Colten Care Logo"
  - img "DyStar"
  - img "Hawkeye Logo"
  - img "Helen Hayes Logo"
  - img "Puma Logo"
  - img "rewe fat east"
  - img "Toyota Logo"
  - img "Rutgers University Emblem"
  - img "Sandals"
  - img "Food for the Hungry"
  - img "stanley black"
  - img "Projects Abroad"
  - img "Chelton"
  - img "GALfoundation"
  - img "TCL"
  - img "toluna logo"
  - img "CFI logo"
  - img "Colten Care Logo"
  - img "DyStar"
  - img "Hawkeye Logo"
  - img "Helen Hayes Logo"
  - img "Puma Logo"
  - img "rewe fat east"
  - img "Toyota Logo"
  - img "Rutgers University Emblem"
  - img "Sandals"
  - img "Food for the Hungry"
  - img "stanley black"
  - img "Projects Abroad"
  - img "Chelton"
  - img "GALfoundation"
  - img "TCL"
  - img "toluna logo"
  - button
  - button
  - button
  - button
  - heading "Consolidate Your HR Processes into One Smart Platform" [level=2]
  - heading "Compensation" [level=3]
  - paragraph: Eliminate the complexity of manually managing leave management, time and attendance tracking, and employee scheduling. With a comprehensive HRMS, you can automate these processes, reduce manual errors, and ensure that all your data flows effortlessly across your HR department. This lets you focus on strategic HR initiatives and building a more productive workplace, instead of getting bogged down by administrative tasks.
  - list:
    - listitem: Leave Management
    - separator
    - listitem: Time and Attendance
    - separator
    - listitem: Roster
    - separator
  - button "Clock in Clock Out":
    - img "Clock in Clock Out"
  - heading "People Management" [level=3]
  - paragraph: The demands of HR, from managing daily challenges to overseeing extensive paperwork, can be significant. With a strong people management strategy backed by automating your HR processes, you can equip your team with the necessary resources to thrive.
  - list:
    - listitem: HR Administration
    - separator
    - listitem: Employee Management
    - separator
    - listitem: Reporting and Analytics
    - separator
    - listitem: Mobile App
    - separator
  - button "HR Administration":
    - img "HR Administration"
  - heading "Talent Management" [level=3]
  - paragraph: A thriving company culture depends on a recruitment team that ensures every hire aligns with its values and vision. Beyond creating a positive candidate experience they require a robust applicant tracking system and the ability to offer an automated, world-class onboarding experience to ensure your new employees are ready before they even step through the door.
  - list:
    - listitem: Recruitment
    - separator
    - listitem: Onboarding
    - separator
    - listitem: Request Desk
    - separator
  - button "Recruitment":
    - img "Recruitment"
  - heading "Culture" [level=3]
  - paragraph: Your commitment to developing your people fosters a thriving company culture where employees feel valued and are more engaged. By actively managing performance, supporting career development, and providing effective training, you empower your team to grow, enabling you to recognize challenges and celebrate successes.
  - list:
    - listitem: Performance Management
    - separator
    - listitem: Career Development
    - separator
    - listitem: Training
    - separator
    - listitem: Surveys
    - separator
    - listitem: Employee Voice
    - separator
  - button "Career Development":
    - img "Career Development"
  - heading "Frequently Asked Questions" [level=2]
  - paragraph: Everything you need to know about OrangeHRM
  - heading "What can I expect in the free demo?" [level=2]:
    - button "What can I expect in the free demo?" [expanded]
  - text: The free demo allows you to evaluate OrangeHRM without any financial commitment. It is an opportunity to see if the platform aligns with your specific needs and expectations before you make a purchasing decision.
  - heading "What features will I experience during the demo?" [level=2]:
    - button "What features will I experience during the demo?"
  - heading "Who will guide me through the demo?" [level=2]:
    - button "Who will guide me through the demo?"
  - heading "What are the main benefits of using OrangeHRM?" [level=2]:
    - button "What are the main benefits of using OrangeHRM?"
  - img "Team Member"
  - img "Team Member"
  - img "Team Member"
  - heading "Still have questions?" [level=4]:
    - strong: Still have questions?
  - paragraph: Can’t find the answer you’re looking for? Talk to one of our product experts today!
  - button "Book a Free Demo"
- contentinfo:
  - link "OrangeHRM Logo":
    - /url: /
    - img "OrangeHRM Logo"
  - img "users-love-us"
  - img "CoreHR_HighPerformer_HighPerformer"
  - img "sourceforge-user-reviews"
  - link "OrangeHRM Advanced Reviews":
    - /url: https://sourceforge.net/software/product/OrangeHRM/?pk_campaign=badge&pk_source=vendor
    - img "OrangeHRM Advanced Reviews"
  - img "CoreHR_HighPerformer_HighPerformer"
  - img "users-love-us"
  - heading "Company" [level=5]
  - list:
    - listitem:
      - link "About Us":
        - /url: https://orangehrm.com/company/about-us
    - listitem:
      - link "Become a Partner":
        - /url: https://orangehrm.com/why-orangehrm/partners/partner-programs
    - listitem:
      - link "Contact Us":
        - /url: https://orangehrm.com/company/contact-us
    - listitem:
      - link "Press Releases":
        - /url: https://orangehrm.com/company/press-releases
    - listitem:
      - link "News Articles":
        - /url: https://orangehrm.com/company/news-articles
    - listitem:
      - link "Careers":
        - /url: https://orangehrm.com/company/careers
    - listitem:
      - link "Contact Sales":
        - /url: https://orangehrm.com/contact-sales
    - listitem:
      - link "Our Offices":
        - /url: https://orangehrm.com/company/about-us
    - listitem:
      - link "Help Portal":
        - /url: https://help.orangehrm.com
    - listitem:
      - link "AI Help Desk":
        - /url: https://aihelpdesk.orangehrm.com/
    - listitem:
      - link "CS & Support":
        - /url: https://help.orangehrm.com/hc/en-us/articles/54232712645913
  - heading "Resources" [level=5]
  - list:
    - listitem:
      - link "E-Books":
        - /url: https://orangehrm.com/resources/e-books
    - listitem:
      - link "Blog":
        - /url: https://orangehrm.com/resources/blog
    - listitem:
      - link "HR Dictionary":
        - /url: https://orangehrm.com/resources/hr-dictionary
    - listitem:
      - link "Advanced Overview":
        - /url: https://orangehrm.com/assets/Documents/pdf/Product-Overview.pdf
    - listitem:
      - link "Data Security Promise":
        - /url: https://orangehrm.com/resources/other-resources/data-security-promise
    - listitem:
      - link "OrangeHRM AI Principles":
        - /url: https://orangehrm.com/ai-principles
    - listitem:
      - link "Product Updates":
        - /url: https://orangehrm.com/product-updates
  - heading "Policies" [level=5]
  - list:
    - listitem:
      - link "Privacy Policy":
        - /url: https://orangehrm.com/policies/orangehrm-privacy-policy
    - listitem:
      - link "Service Privacy Policy":
        - /url: https://orangehrm.com/policies/orangehrm-service-privacy-policy
    - listitem:
      - link "General Public License":
        - /url: https://orangehrm.com/policies/gnu-general-public-license
    - listitem:
      - link "Commercial License":
        - /url: https://orangehrm.com/assets/Uploads/OrangeHRM-Commercial-License.pdf
    - listitem:
      - link "DPF Privacy Policy":
        - /url: https://orangehrm.com/assets/Documents/DPF-Privacy-Policy.pdf
    - listitem:
      - link "Modern Day Slavery Statement":
        - /url: https://orangehrm.com/assets/Documents/policies/orangehrm-modern-slavery-statement.pdf?_gl=1*sh1nzz*_gcl_au*MjkzNzAzODc0LjE3NDY1MDk2NDIuMTM0NTAzNDkwMi4xNzUwMjI4ODE5LjE3NTAyMjg4NDM.
    - listitem:
      - link "Cookie Declaration":
        - /url: https://orangehrm.com/policies/cookie-declaration
  - heading "Alternatives" [level=5]
  - list:
    - listitem:
      - link "Freshteam Alternative":
        - /url: https://orangehrm.com/freshteam-alternative
  - paragraph: OrangeHRM Inc. © 2026 All Rights Reserved.
  - list:
    - listitem:
      - link "facebook":
        - /url: https://www.facebook.com/OrangeHRM
        - img "facebook"
    - listitem:
      - link "linkedin":
        - /url: https://www.linkedin.com/company/orangehrm/mycompany/
        - img "linkedin"
    - listitem:
      - link "youtube":
        - /url: https://x.com/orangehrm
        - img "youtube"
    - listitem:
      - link "linkedin":
        - /url: https://www.youtube.com/user/orangehrm
        - img "linkedin"
    - listitem:
      - link "linkedin":
        - /url: https://www.instagram.com/orangehrm_inc
        - img "linkedin"
  - link "Site Map":
    - /url: /site-map
- iframe
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | /*test("skip annotation", async ({ page }) => {
  3  |   console.log("AdactinHotel Page Test Skipped");
  4  |   test.skip();
  5  |   await page.goto("https://adactinhotelapp.com/");
  6  |   await page.waitForLoadState("domcontentloaded");
  7  |   await page.fill("#username", "admin791");
  8  |   await page.fill("#password", "admin791");
  9  |   await page.click("#login");
  10 | });
  11 | test("fail annotation", async ({ page }) => {
  12 |   test.fail();
  13 |   await page.goto("https://testautomationpractice.blogspot.com/");
  14 |   expect(page).toHaveURL("https://adactinhotelapp.com/");
  15 |   console.log(`Test fail passed-
  16 |     Expected page: AdactinHotel Page
  17 |     Actual page: Testautomationpractice Page`);
  18 | });*/
  19 | test("slow annotation", async ({ page, context }) => {
  20 |   test.slow();
  21 |   await page.goto(
  22 |     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  23 |   );
  24 |   const [tab2] = await Promise.all([
  25 |     context.waitForEvent("page"),
  26 |     page.click('//a[text()="OrangeHRM, Inc"]'),
  27 |   ]);
  28 |   await expect(tab2).toHaveURL(/orangehrm.com/);
  29 |   const [tab3] = await Promise.all([
  30 |     context.waitForEvent("page"),
  31 |     tab2.click('//a[text()="Book a Free Demo"]'),
  32 |   ]);
  33 |   await expect(tab3).toHaveURL(/book-a-free-demo/);
  34 |   await tab3.fill('[name="FullName"]', "Lavanya M");
  35 |   await tab3.fill('[type="email"]', "lavanya@gmail.com");
  36 |   await tab3.fill('[name="Contact"]', "9360696611");
  37 |   await tab3.selectOption('[name="Country"]', "India");
  38 |   await tab3.fill('[name="CompanyName"]', "ABC Company");
  39 |   await tab3.fill('[name="JobTitle"]', "QA Engineer");
  40 |   await tab3.selectOption('[name="NoOfEmployees"]', "200 - 1,000");
  41 |   await tab3.click("//button[text()='Allow selection']");
  42 |   //await tab3.click('[class="recaptcha-checkbox-checkmark"]');
  43 |   await page.waitForTimeout(10000);
  44 |   await tab3.click('[value="Get a Free Demo"]');
  45 |   await tab3.waitForTimeout(6000);
> 46 |   await expect(tab3).toHaveURL(/demo-confirmation/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  47 |   const final = await tab3.locator("//h1").innerText();
  48 |   console.log(final);
  49 | });
  50 | 
```