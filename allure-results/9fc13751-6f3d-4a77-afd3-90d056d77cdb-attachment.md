# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooksminiproject.spec.js >> Book Hotel
- Location: tests\hooksminiproject.spec.js:39:5

# Error details

```
TypeError: console.loh is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=f7e1]:
  - table [ref=f7e2]:
    - rowgroup [ref=f7e3]:
      - row [ref=f7e4]:
        - cell [ref=f7e5]:
          - img "AdactIn Group" [ref=f7e6]
        - cell [ref=f7e7]:
          - 'img "Adactin Group: Hotel Reservation System" [ref=f7e8]'
      - row [ref=f7e9]:
        - cell [ref=f7e10]
  - table [ref=f7e11]:
    - rowgroup [ref=f7e12]:
      - row [ref=f7e13]:
        - cell "Welcome to Adactin Group of Hotels" [ref=f7e14]
        - cell [ref=f7e15]:
          - textbox [ref=f7e16]: Hello admin791!
          - link "Search Hotel" [ref=f7e17] [cursor=pointer]:
            - /url: SearchHotel.php
          - text: "|"
          - link "Booked Itinerary" [ref=f7e18] [cursor=pointer]:
            - /url: BookedItinerary.php
          - text: "|"
          - link "Change Password" [ref=f7e19] [cursor=pointer]:
            - /url: ChangePassword.php
          - text: "|"
          - link "Logout" [ref=f7e20] [cursor=pointer]:
            - /url: Logout.php
        - cell [ref=f7e21]:
          - table [ref=f7e22]:
            - rowgroup [ref=f7e23]:
              - row [ref=f7e24]:
                - cell [ref=f7e25]:
                  - heading "Adactin Hotel Mobile App" [level=4] [ref=f7e26]
                  - link "DOWNLOAD" [ref=f7e27] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/resources/AdactinHotelApp_SetupGuide.pdf
                  - text: the Hotel Mobile App and extend your experience. Click to know more about how to get the app on Android or IOS.
              - row [ref=f7e28]:
                - cell [ref=f7e29]:
                  - heading "HotelApp Web Services" [level=4] [ref=f7e30]
                  - text: Access Hotel App SOAP and Rest Services to learn web services testing.
                  - link "Click" [ref=f7e31] [cursor=pointer]:
                    - /url: https://adactinhotelapp.com/HotelAdactinWebServices/
                  - text: to know more.
              - row [ref=f7e32]:
                - cell [ref=f7e33]:
                  - heading "Sample TestCases" [level=4] [ref=f7e34]
                  - link "DOWNLOAD" [ref=f7e35] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/Sample-TestCases_HotelApplication.pdf
                  - text: a complete set of readymade sample TEST CASES for this application. Enjoy automation!
              - row [ref=f7e36]:
                - cell [ref=f7e37]:
                  - heading "Known Defects" [level=4] [ref=f7e38]
                  - link "DOWNLOAD" [ref=f7e39] [cursor=pointer]:
                    - /url: http://adactinhotelapp.com/resources/KnownDefects_HotelApp.pdf
                  - text: list of known defects for this application.
              - row [ref=f7e40]:
                - cell [ref=f7e41]:
                  - heading "Book on Automation" [level=4] [ref=f7e42]
                  - iframe [ref=f7e43]
              - row [ref=f7e44]:
                - cell [ref=f7e45]:
                  - heading "About Adactin" [level=4] [ref=f7e46]
                  - text: Get solutions for all your testing needs. Visit
                  - link "www.adactin.com" [ref=f7e47] [cursor=pointer]:
                    - /url: http://www.adactin.com
                  - text: today!
      - row [ref=f7e48]:
        - cell [ref=f7e49]:
          - table [ref=f7e51]:
            - rowgroup [ref=f7e52]:
              - row [ref=f7e53]:
                - cell "Booking Confirmation" [ref=f7e54]
              - row [ref=f7e55]:
                - cell "Hotel Name" [ref=f7e56]
                - cell [ref=f7e57]:
                  - textbox [disabled] [ref=f7e58]: Hotel Cornice
              - row [ref=f7e59]:
                - cell "Location" [ref=f7e60]
                - cell [ref=f7e61]:
                  - textbox [disabled] [ref=f7e62]: Adelaide
              - row [ref=f7e63]:
                - cell "Room Type" [ref=f7e64]
                - cell [ref=f7e65]:
                  - textbox [disabled] [ref=f7e66]: Standard
              - row [ref=f7e67]:
                - cell "Arrival Date" [ref=f7e68]
                - cell [ref=f7e69]:
                  - textbox [disabled] [ref=f7e70]: 10/06/2027
              - row
              - row [ref=f7e71]:
                - cell "Departure Date" [ref=f7e72]
                - cell [ref=f7e73]:
                  - textbox [disabled] [ref=f7e74]: 12/06/2027
              - row [ref=f7e75]:
                - cell "Total Rooms" [ref=f7e76]
                - cell [ref=f7e77]:
                  - textbox [disabled] [ref=f7e78]: 2 Room(s)
              - row [ref=f7e79]:
                - cell "Adults Per Room" [ref=f7e80]
                - cell [ref=f7e81]:
                  - textbox [disabled] [ref=f7e82]: 3 Adult(s)
              - row [ref=f7e83]:
                - cell "Children per Room" [ref=f7e84]
                - cell [ref=f7e85]:
                  - textbox [disabled] [ref=f7e86]: 0 Children
              - row [ref=f7e87]:
                - cell "Price per Night" [ref=f7e88]
                - cell [ref=f7e89]:
                  - textbox [disabled] [ref=f7e90]: AUD $ 300
              - row [ref=f7e91]:
                - cell "Total Price" [ref=f7e92]
                - cell [ref=f7e93]:
                  - textbox [disabled] [ref=f7e94]: AUD $ 610
              - row [ref=f7e95]:
                - cell "GST" [ref=f7e96]
                - cell [ref=f7e97]:
                  - textbox [disabled] [ref=f7e98]: AUD $ 61
              - row [ref=f7e99]:
                - cell "Final Billed Price" [ref=f7e100]
                - cell [ref=f7e101]:
                  - textbox [disabled] [ref=f7e102]: AUD $ 671
              - row [ref=f7e103]:
                - cell "First Name" [ref=f7e104]
                - cell [ref=f7e105]:
                  - textbox [disabled] [ref=f7e106]: Lavanya
              - row [ref=f7e107]:
                - cell "Last Name" [ref=f7e108]
                - cell [ref=f7e109]:
                  - textbox [disabled] [ref=f7e110]
              - row [ref=f7e111]:
                - cell "Billing Address" [ref=f7e112]
                - cell [ref=f7e113]:
                  - textbox [disabled] [ref=f7e114]: ABC Street
              - row [ref=f7e115]:
                - cell "Order No." [ref=f7e116]
                - cell [ref=f7e117]:
                  - textbox [disabled] [ref=f7e118]: C77C021X8A
              - row [ref=f7e119]:
                - cell [ref=f7e120]
                - cell [ref=f7e121]:
                  - button "Search Hotel" [ref=f7e122]
                  - button "My Itinerary" [ref=f7e123]
                  - button "Logout" [ref=f7e124]
  - table [ref=f7e125]:
    - rowgroup [ref=f7e126]:
      - row [ref=f7e127]:
        - cell [ref=f7e128]
      - row [ref=f7e129]:
        - cell [ref=f7e130]:
          - text: © 2026 -
          - link "Adactin.com" [ref=f7e131] [cursor=pointer]:
            - /url: http://www.adactin.com
          - text: . All Rights Reserved. Adactin Group Pty. Ltd.
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | let page;
  3  | test.beforeAll(async ({ browser }) => {
  4  |   page = await browser.newPage();
  5  |   console.log("Browser Launched Using beforeAll");
  6  | 
  7  |   await page.goto("https://adactinhotelapp.com/");
  8  |   await page.waitForLoadState("domcontentloaded");
  9  |   await page.fill("#username", "admin791");
  10 |   await page.fill("#password", "admin791");
  11 |   await page.click("#login");
  12 | 
  13 |   await expect(page).toHaveURL(/SearchHotel/);
  14 | });
  15 | test.beforeEach(async () => {
  16 |   console.log("starting page test");
  17 | });
  18 | test("search hotel", async () => {
  19 |   await expect(page.locator(".login_title")).toContainText("Search Hotel");
  20 |   await page.selectOption("#location", "Adelaide");
  21 |   await page.selectOption("#hotels", "Hotel Cornice");
  22 |   await page.selectOption("#room_type", "Deluxe");
  23 |   await page.selectOption("#room_nos", "2 - Two");
  24 |   await page.fill("#datepick_in", "10/06/2027");
  25 |   await page.fill("#datepick_out", "12/06/2027");
  26 |   await page.selectOption("#adult_room", "3 - Three");
  27 |   await page.selectOption("#child_room", "0 - None");
  28 |   await page.click('//input[@value="Search"]');
  29 |   console.log("Hotel Searched");
  30 |   await expect(page).toHaveURL(/SelectHotel/);
  31 | });
  32 | test("select hotel", async () => {
  33 |   await expect(page.locator(".login_title")).toContainText("Select Hotel");
  34 |   await page.click("#radiobutton_0");
  35 |   await page.click("#continue");
  36 |   console.log("Hotel Selected");
  37 |   await expect(page).toHaveURL(/BookHotel/);
  38 | });
  39 | test("Book Hotel", async () => {
  40 |   await expect(page.locator("#book_hotel_form")).toContainText("Book A Hotel");
  41 |   await page.fill("#first_name", "Lavanya");
  42 |   await page.fill("#last_name", "M");
  43 |   await page.fill("#address", "ABC Street");
  44 |   await page.fill("#cc_num", "1234567890123456");
  45 |   await page.selectOption("#cc_type", "American Express");
  46 |   await page.selectOption("#cc_exp_month", "January");
  47 |   await page.selectOption("#cc_exp_year", "2030");
  48 |   await page.fill("#cc_cvv", "123");
  49 |   await page.click("#book_now");
  50 |   await page.waitForTimeout(5000);
> 51 |   console.loh("Hotel Booked");
     |           ^ TypeError: console.loh is not a function
  52 |   await expect(page).toHaveURL(/BookingConfirm/);
  53 | });
  54 | test("Booking Confirm", async () => {
  55 |   await expect(page.locator(".login_title")).toContainText(
  56 |     "Booking Confirmation",
  57 |   );
  58 |   const ordervalue = await page.inputValue("#order_no");
  59 |   console.log("ordervalue: ", ordervalue);
  60 |   await page.click("#my_itinerary");
  61 | 
  62 |   await expect(page).toHaveURL(/BookedItinerary/);
  63 | });
  64 | test("myitinerary", async () => {
  65 |   await expect(page.locator(".login_title")).toHaveText("Booked Itinerary");
  66 |   await page.click("#check_all");
  67 |   await page.on("dialog", async (dialog) => {
  68 |     await page.waitForTimeout(3000);
  69 |     await dialog.accept();
  70 |   });
  71 |   await page.click('[value="Cancel Selected"]');
  72 |   await page.waitForTimeout(3000);
  73 |   await page.click("#logout");
  74 |   console.log("Logged out");
  75 | });
  76 | test.afterEach(async () => {
  77 |   console.log("page Test Completed");
  78 | });
  79 | 
```