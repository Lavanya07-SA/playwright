# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooksminiproject.spec.js >> Booking Confirm
- Location: tests\hooksminiproject.spec.js:52:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /BookingConfirm/
Received string:  "https://adactinhotelapp.com/BookHotel.php"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
       - unexpected value "https://adactinhotelapp.com/BookHotel.php"

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
    - row "Back Book A Hotel Hotel Name Hotel Cornice Location Adelaide Room Type Deluxe Number of Rooms 2 Room(s) Total Days 2 Day(s) Price per Night AUD $ 300 Total Price AUD $ 610 GST AUD $ 61 Final Billed Price AUD $ 671 First Name* Lavanya Last Name* M Billing Address* ABC Street Credit Card No.* 1234567890123456 Use 16 digit Dummy Data Credit Card Type* American Express Expiry Date* January 2030 CVV Number* 123 Book Now Cancel Please wait! We are processing your Hotel Booking...":
      - cell "Back Book A Hotel Hotel Name Hotel Cornice Location Adelaide Room Type Deluxe Number of Rooms 2 Room(s) Total Days 2 Day(s) Price per Night AUD $ 300 Total Price AUD $ 610 GST AUD $ 61 Final Billed Price AUD $ 671 First Name* Lavanya Last Name* M Billing Address* ABC Street Credit Card No.* 1234567890123456 Use 16 digit Dummy Data Credit Card Type* American Express Expiry Date* January 2030 CVV Number* 123 Book Now Cancel Please wait! We are processing your Hotel Booking...":
        - table:
          - rowgroup:
            - row "Back":
              - cell "Back":
                - link "Back":
                  - /url: SelectHotel.php
            - row "Book A Hotel":
              - cell "Book A Hotel"
            - row "Hotel Name Hotel Cornice":
              - cell "Hotel Name"
              - cell "Hotel Cornice":
                - textbox [disabled]: Hotel Cornice
            - row "Location Adelaide":
              - cell "Location"
              - cell "Adelaide":
                - textbox [disabled]: Adelaide
            - row "Room Type Deluxe":
              - cell "Room Type"
              - cell "Deluxe":
                - textbox [disabled]: Deluxe
            - row "Number of Rooms 2 Room(s)":
              - cell "Number of Rooms"
              - cell "2 Room(s)":
                - textbox [disabled]: 2 Room(s)
            - row "Total Days 2 Day(s)":
              - cell "Total Days"
              - cell "2 Day(s)":
                - textbox [disabled]: 2 Day(s)
            - row "Price per Night AUD $ 300":
              - cell "Price per Night"
              - cell "AUD $ 300":
                - textbox [disabled]: AUD $ 300
            - row "Total Price AUD $ 610":
              - cell "Total Price"
              - cell "AUD $ 610":
                - textbox [disabled]: AUD $ 610
            - row "GST AUD $ 61":
              - cell "GST"
              - cell "AUD $ 61":
                - textbox [disabled]: AUD $ 61
            - row "Final Billed Price AUD $ 671":
              - cell "Final Billed Price"
              - cell "AUD $ 671":
                - textbox [disabled]: AUD $ 671
            - row "First Name* Lavanya":
              - cell "First Name*"
              - cell "Lavanya":
                - textbox: Lavanya
            - row "Last Name* M":
              - cell "Last Name*"
              - cell "M":
                - textbox: M
            - row "Billing Address* ABC Street":
              - cell "Billing Address*"
              - cell "ABC Street":
                - textbox: ABC Street
            - row "Credit Card No.* 1234567890123456 Use 16 digit Dummy Data":
              - cell "Credit Card No.*"
              - cell "1234567890123456 Use 16 digit Dummy Data":
                - textbox: "1234567890123456"
                - text: Use 16 digit Dummy Data
            - row "Credit Card Type* American Express":
              - cell "Credit Card Type*"
              - cell "American Express":
                - combobox:
                  - option "- Select Credit Card Type -"
                  - option "American Express" [selected]
                  - option "VISA"
                  - option "Master Card"
                  - option "Other"
            - row "Expiry Date* January 2030":
              - cell "Expiry Date*"
              - cell "January 2030":
                - combobox:
                  - option "- Select Month -"
                  - option "January" [selected]
                  - option "February"
                  - option "March"
                  - option "April"
                  - option "May"
                  - option "June"
                  - option "July"
                  - option "August"
                  - option "September"
                  - option "October"
                  - option "November"
                  - option "December"
                - combobox:
                  - option "- Select Year -"
                  - option "2011"
                  - option "2012"
                  - option "2013"
                  - option "2014"
                  - option "2015"
                  - option "2016"
                  - option "2017"
                  - option "2018"
                  - option "2019"
                  - option "2020"
                  - option "2021"
                  - option "2022"
                  - option "2023"
                  - option "2024"
                  - option "2025"
                  - option "2026"
                  - option "2027"
                  - option "2028"
                  - option "2029"
                  - option "2030" [selected]
            - row "CVV Number* 123":
              - cell "CVV Number*"
              - cell "123":
                - textbox: "123"
            - row "Book Now Cancel Please wait! We are processing your Hotel Booking...":
              - cell
              - cell "Book Now Cancel Please wait! We are processing your Hotel Booking...":
                - button "Book Now"
                - button "Cancel"
                - text: Please wait! We are processing your Hotel Booking...
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
  13 |     await expect(page).toHaveURL(/SearchHotel/)
  14 | })
  15 | test.beforeEach(async()=>{
  16 |     console.log('starting page test')
  17 | })
  18 | test('search hotel',async()=>{
  19 |   await expect(page.locator('.login_title')).toContainText('Search Hotel')
  20 |   await page.selectOption('#location','Adelaide');
  21 |   await page.selectOption('#hotels','Hotel Cornice');
  22 |   await page.selectOption('#room_type','Deluxe');
  23 |   await page.selectOption('#room_nos','2 - Two');
  24 |   await page.fill('#datepick_in','10/06/2027');
  25 |   await page.fill('#datepick_out','12/06/2027');
  26 |   await page.selectOption("#adult_room",'3 - Three');
  27 |   await page.selectOption('#child_room','0 - None');
  28 |   await page.click('//input[@value="Search"]');
  29 | 
  30 |   await expect(page).toHaveURL(/SelectHotel/)
  31 | })
  32 | test('select hotel',async()=>{
  33 |     await expect(page.locator('.login_title')).toContainText('Select Hotel')
  34 |     await page.click('#radiobutton_0')
  35 |     await page.click('#continue')
  36 |  
  37 |     await expect(page).toHaveURL(/BookHotel/)
  38 | })
  39 | test('Book Hotel',async()=>{
  40 |     await expect(page.locator('#book_hotel_form')).toContainText('Book A Hotel')
  41 |     await page.fill('#first_name','Lavanya')
  42 |     await page.fill('#last_name','M')
  43 |     await page.fill('#address','ABC Street')
  44 |     await page.fill('#cc_num','1234567890123456')
  45 |     await page.selectOption('#cc_type','American Express')
  46 |     await page.selectOption('#cc_exp_month','January')
  47 |     await page.selectOption('#cc_exp_year','2030')
  48 |     await page.fill('#cc_cvv','123')
  49 |     await page.click('#book_now')
  50 |     await page.waitForLoadState('domcontentloaded')
  51 | })
  52 | test('Booking Confirm',async()=>{
> 53 |     await expect(page).toHaveURL(/BookingConfirm/)
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  54 |     await expect(page.locator('.login_title')).toContainText('Booking Confirmation')
  55 |     await page.inputValue('#order_no')
  56 |     await page.click('#my_itinerary')
  57 | 
  58 |     await expect(page).toHaveURL(/BookedItinerary/)
  59 | })
  60 | test('myitinerary',async()=>{
  61 |     await expect(page.locator('.login_title')).toHaveText('Booked Itinerary')
  62 |     await page.click('check_all')
  63 |     await page.on('dialog', async(dialog)=>{
  64 |         await page.waitForTimeout(3000);
  65 |         await dialog.accept();
  66 |     })
  67 |     await page.click('[value="Cancel Selected"]')
  68 | 
  69 |     page.waitForLoadState('domcontentloaded');
  70 | await page.click('#logout')
  71 | })
  72 | test.afterEach(async()=>{
  73 |     console.log('page Test Completed')
  74 | })
```