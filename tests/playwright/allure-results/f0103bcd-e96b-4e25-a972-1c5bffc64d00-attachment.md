# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooksminiproject.spec.js >> search hotel
- Location: tests\hooksminiproject.spec.js:18:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /search hotel/
Received string:  "https://adactinhotelapp.com/SearchHotel.php"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
       - unexpected value "https://adactinhotelapp.com/SearchHotel.php"

```

```yaml
- table:
  - rowgroup:
    - 'row "AdactIn Group Adactin Group: Hotel Reservation System"':
      - cell "AdactIn Group":
        - img "AdactIn Group"
      - 'cell "Adactin Group: Hotel Reservation System"':
        - 'img "Adactin Group: Hotel Reservation System"'
    - row:
      - cell
- table:
  - rowgroup:
    - row "Welcome to Adactin Group of Hotels Hello admin791! Search Hotel | Booked Itinerary | Change Password | Logout Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
      - cell "Welcome to Adactin Group of Hotels"
      - cell "Hello admin791! Search Hotel | Booked Itinerary | Change Password | Logout":
        - textbox: Hello admin791!
        - link "Search Hotel":
          - /url: SearchHotel.php
        - text: "|"
        - link "Booked Itinerary":
          - /url: BookedItinerary.php
        - text: "|"
        - link "Change Password":
          - /url: ChangePassword.php
        - text: "|"
        - link "Logout":
          - /url: Logout.php
      - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS. HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more. Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation! Known Defects DOWNLOAD list of known defects for this application. Book on Automation About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
        - table:
          - rowgroup:
            - row "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.":
              - cell "Adactin Hotel Mobile App DOWNLOAD the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.":
                - heading "Adactin Hotel Mobile App" [level=4]
                - link "DOWNLOAD":
                  - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
            - row "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more.":
              - cell "HotelApp Web Services Access Hotel App SOAP and Rest Services to learn web services testing. Click to know more.":
                - heading "HotelApp Web Services" [level=4]
                - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                - link "Click":
                  - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                - text: to know more.
            - row "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!":
              - cell "Sample TestCases DOWNLOAD a complete set of readymade sample TEST CASES for this application. Enjoy automation!":
                - heading "Sample TestCases" [level=4]
                - link "DOWNLOAD":
                  - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
            - row "Known Defects DOWNLOAD list of known defects for this application.":
              - cell "Known Defects DOWNLOAD list of known defects for this application.":
                - heading "Known Defects" [level=4]
                - link "DOWNLOAD":
                  - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                - text: list of known defects for this application.
            - row "Book on Automation":
              - cell "Book on Automation":
                - heading "Book on Automation" [level=4]
                - iframe
            - row "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
              - cell "About Adactin Get solutions for all your testing needs. Visit www.adactin.com today!":
                - heading "About Adactin" [level=4]
                - text: Get solutions for all your testing needs. Visit
                - link "www.adactin.com":
                  - /url: http://www.adactin.com
                - text: today!
    - row "Search Hotel (Fields marked with Red asterix (*) are mandatory) Location* - Select Location - Hotels - Select Hotel - Room Type - Select Room Type - Number of Rooms* 1 - One Check In Date* 15/10/2026 (dd/mm/yyyy) Check Out Date* 16/10/2026 (dd/mm/yyyy) Adults per Room* 1 - One Children per Room 0 - None Search Reset":
      - cell "Search Hotel (Fields marked with Red asterix (*) are mandatory) Location* - Select Location - Hotels - Select Hotel - Room Type - Select Room Type - Number of Rooms* 1 - One Check In Date* 15/10/2026 (dd/mm/yyyy) Check Out Date* 16/10/2026 (dd/mm/yyyy) Adults per Room* 1 - One Children per Room 0 - None Search Reset":
        - table:
          - rowgroup:
            - row "Search Hotel (Fields marked with Red asterix (*) are mandatory)":
              - cell "Search Hotel (Fields marked with Red asterix (*) are mandatory)"
            - row "Location* - Select Location -":
              - cell "Location*"
              - cell "- Select Location -":
                - combobox:
                  - option "- Select Location -" [selected]
                  - option "Sydney"
                  - option "Melbourne"
                  - option "Brisbane"
                  - option "Adelaide"
                  - option "London"
                  - option "New York"
                  - option "Los Angeles"
                  - option "Paris"
            - row "Hotels - Select Hotel -":
              - cell "Hotels"
              - cell "- Select Hotel -":
                - combobox:
                  - option "- Select Hotel -" [selected]
                  - option "Hotel Creek"
                  - option "Hotel Sunshine"
                  - option "Hotel Hervey"
                  - option "Hotel Cornice"
            - row "Room Type - Select Room Type -":
              - cell "Room Type"
              - cell "- Select Room Type -":
                - combobox:
                  - option "- Select Room Type -" [selected]
                  - option "Standard"
                  - option "Double"
                  - option "Deluxe"
                  - option "Super Deluxe"
            - row "Number of Rooms* 1 - One":
              - cell "Number of Rooms*"
              - cell "1 - One":
                - combobox:
                  - option "- Select Number of Rooms -"
                  - option "1 - One" [selected]
                  - option "2 - Two"
                  - option "3 - Three"
                  - option "4 - Four"
                  - option "5 - Five"
                  - option "6 - Six"
                  - option "7 - Seven"
                  - option "8 - Eight"
                  - option "9 - Nine"
                  - option "10 - Ten"
            - row "Check In Date* 15/10/2026 (dd/mm/yyyy)":
              - cell "Check In Date*"
              - cell "15/10/2026 (dd/mm/yyyy)":
                - textbox: 15/10/2026
                - text: (dd/mm/yyyy)
            - row "Check Out Date* 16/10/2026 (dd/mm/yyyy)":
              - cell "Check Out Date*"
              - cell "16/10/2026 (dd/mm/yyyy)":
                - textbox: 16/10/2026
                - text: (dd/mm/yyyy)
            - row "Adults per Room* 1 - One":
              - cell "Adults per Room*"
              - cell "1 - One":
                - combobox:
                  - option "- Select Adults per Room -"
                  - option "1 - One" [selected]
                  - option "2 - Two"
                  - option "3 - Three"
                  - option "4 - Four"
            - row "Children per Room 0 - None":
              - cell "Children per Room"
              - cell "0 - None":
                - combobox:
                  - option "0 - None" [selected]
                  - option "1 - One"
                  - option "2 - Two"
                  - option "3 - Three"
                  - option "4 - Four"
            - row "Search Reset":
              - cell
              - cell "Search Reset":
                - button "Search"
                - button "Reset"
- table:
  - rowgroup:
    - row:
      - cell
    - row "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
      - cell "© 2026 - Adactin.com. All Rights Reserved. Adactin Group Pty. Ltd.":
        - text: © 2026 -
        - link "Adactin.com":
          - /url: http://www.adactin.com
        - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test'
  2  | let page;
  3  | test.beforeAll(async({browser})=>{
  4  |     page=await browser.newPage()
  5  |     console.log("Browser Launched Using beforeAll")
  6  | 
  7  |     await page.goto('https://adactinhotelapp.com/')
  8  |     await page.waitForLoadState('domcontentloaded')
  9  |     await page.fill('#username','admin791')
  10 |     await page.fill('#password','admin791')
  11 |     await page.click('#login')
  12 | 
> 13 |     await expect(page).toHaveURL(/search hotel/)
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  14 | })
  15 | test.beforeEach(async()=>{
  16 |     console.log('search hotel page test')
  17 | })
  18 | test('search hotel',async()=>{
  19 |   await expect(page.locator('.login_title')).toHaveText('Search Hotel ')
  20 |   await page.selectOption('#location',"{label:'Adelaide'}");
  21 |   await page.selectOption('#hotels','{value:"Hotel Cornice"}');
  22 |   await page.selectOption('#room_type','{index:3}');
  23 |   await page.selectOption('#room_nos',"{label:'2 - Two'}");
  24 |   await page.fill('#datepick_in','10/06/2027');
  25 |   await page.fill('#datepick_out','12/06/2027');
  26 |   await page.selectOption("#adult_room",'{value:"2"}');
  27 |   await page.selectOption('#child_room','{index:0}');
  28 |   await page.click('//input[@value="Search"]');
  29 | 
  30 |   await expect(page).toHaveURL(/Search Hotel /)
  31 | })
  32 | test.afterEach(async()=>{
  33 |     console.log('Search Hotel page Test Completed')
  34 | })
  35 | test.beforeEach(async()=>{
  36 |     console.log('Select hotel page Test')
  37 | })
  38 | test('select hotel',async()=>{
  39 |     await expect(page.locator('.login_title')).toHaveText('Select Hotel ')
  40 |     await page.click('#radiobutton_0')
  41 |     await page.click('#continue')
  42 |  
  43 |     await expect(page).toHaveText(/Book A Hotel /)
  44 | })
  45 | test.afterEach(async()=>{
  46 |     console.log('Select hotel page Test Completed')
  47 | })
```