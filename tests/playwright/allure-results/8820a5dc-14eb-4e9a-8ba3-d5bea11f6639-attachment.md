# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooksminiproject.spec.js >> Booking Confirm
- Location: tests\hooksminiproject.spec.js:56:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /hfgdhsj/
Received string:  "https://adactinhotelapp.com/BookedItinerary.php"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html xmlns="http://www.w3.org/1999/xhtml">…</html>
       - unexpected value "https://adactinhotelapp.com/BookedItinerary.php"

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
    - row "Welcome to Adactin Group of Hotels Hello admin791! Search Hotel | Booked Itinerary | Change Password | Logout":
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
    - row "Booked Itinerary Search Order Id Go Order Id Cancel Hotel Name Location Rooms First Name Last Name Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (incl. GST) 6K2Y6N0S75 Cancel 6K2Y6N0S75 Hotel Cornice Adelaide 2 Rooms Lavanya M 10/06/2027 12/06/2027 2 Days Deluxe AUD $ 300 AUD $ 671 Cancel Selected Search Hotel Logout":
      - cell "Booked Itinerary Search Order Id Go Order Id Cancel Hotel Name Location Rooms First Name Last Name Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (incl. GST) 6K2Y6N0S75 Cancel 6K2Y6N0S75 Hotel Cornice Adelaide 2 Rooms Lavanya M 10/06/2027 12/06/2027 2 Days Deluxe AUD $ 300 AUD $ 671 Cancel Selected Search Hotel Logout":
        - table:
          - rowgroup:
            - row "Booked Itinerary Search Order Id Go":
              - cell "Booked Itinerary Search Order Id Go":
                - table:
                  - rowgroup:
                    - row "Booked Itinerary Search Order Id Go":
                      - cell "Booked Itinerary"
                      - cell
                      - cell "Search Order Id Go":
                        - text: Search Order Id
                        - textbox
                        - button "Go"
            - row "Order Id Cancel Hotel Name Location Rooms First Name Last Name Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (incl. GST) 6K2Y6N0S75 Cancel 6K2Y6N0S75 Hotel Cornice Adelaide 2 Rooms Lavanya M 10/06/2027 12/06/2027 2 Days Deluxe AUD $ 300 AUD $ 671":
              - cell "Order Id Cancel Hotel Name Location Rooms First Name Last Name Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (incl. GST) 6K2Y6N0S75 Cancel 6K2Y6N0S75 Hotel Cornice Adelaide 2 Rooms Lavanya M 10/06/2027 12/06/2027 2 Days Deluxe AUD $ 300 AUD $ 671":
                - table:
                  - rowgroup:
                    - row "Order Id Cancel Hotel Name Location Rooms First Name Last Name Arrival Date Departure Date No. of Days Rooms Type Price per Night Total Price (incl. GST)":
                      - cell:
                        - checkbox
                      - cell "Order Id":
                        - strong: Order Id
                      - cell "Cancel":
                        - strong: Cancel
                      - cell "Hotel Name":
                        - strong: Hotel Name
                      - cell "Location":
                        - strong: Location
                      - cell "Rooms":
                        - strong: Rooms
                      - cell "First Name":
                        - strong: First Name
                      - cell "Last Name":
                        - strong: Last Name
                      - cell "Arrival Date":
                        - strong: Arrival Date
                      - cell "Departure Date":
                        - strong: Departure Date
                      - cell "No. of Days":
                        - strong: No. of Days
                      - cell "Rooms Type":
                        - strong: Rooms Type
                      - cell "Price per Night":
                        - strong: Price per Night
                      - cell "Total Price (incl. GST)":
                        - strong: Total Price (incl. GST)
                    - row "6K2Y6N0S75 Cancel 6K2Y6N0S75 Hotel Cornice Adelaide 2 Rooms Lavanya M 10/06/2027 12/06/2027 2 Days Deluxe AUD $ 300 AUD $ 671":
                      - cell:
                        - checkbox
                      - cell "6K2Y6N0S75":
                        - textbox: 6K2Y6N0S75
                      - cell "Cancel 6K2Y6N0S75":
                        - button "Cancel 6K2Y6N0S75"
                      - cell "Hotel Cornice":
                        - textbox: Hotel Cornice
                      - cell "Adelaide":
                        - textbox: Adelaide
                      - cell "2 Rooms":
                        - textbox: 2 Rooms
                      - cell "Lavanya":
                        - textbox: Lavanya
                      - cell "M":
                        - textbox: M
                      - cell "10/06/2027":
                        - textbox: 10/06/2027
                      - cell "12/06/2027":
                        - textbox: 12/06/2027
                      - cell "2 Days":
                        - textbox: 2 Days
                      - cell "Deluxe":
                        - textbox: Deluxe
                      - cell "AUD $ 300":
                        - textbox: AUD $ 300
                      - cell "AUD $ 671":
                        - textbox: AUD $ 671
            - row "Cancel Selected Search Hotel Logout":
              - cell "Cancel Selected Search Hotel Logout":
                - button "Cancel Selected"
                - button "Search Hotel"
                - button "Logout"
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
  49 |   test.slow();
  50 |   console.log("Test Slow Annotation")
  51 |   await page.click("#book_now");
  52 |   await page.waitForTimeout(5000);
  53 |   console.log("Hotel Booked");
  54 |   await expect(page).toHaveURL(/BookingConfirm/);
  55 | });
  56 | test("Booking Confirm", async () => {
  57 |   await expect(page.locator(".login_title")).toContainText(
  58 |     "Booking Confirmation",
  59 |   );
  60 |   const ordervalue = await page.inputValue("#order_no");
  61 |   console.log("ordervalue: ", ordervalue);
  62 |   await page.click("#my_itinerary");
  63 |   console.log(`Test Fail Annotation
  64 |      expected page: BookItenary
  65 |      actual page: hfgdhsj`
  66 |      )
  67 |     test.fail();
> 68 |   await expect(page).toHaveURL(/hfgdhsj/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  69 | });
  70 | test("myitinerary", async () => {
  71 |   await expect(page.locator(".login_title")).toHaveText("Booked Itinerary");
  72 |   await page.click("#check_all");
  73 |   await page.on("dialog", async (dialog) => {
  74 |     await page.waitForTimeout(3000);
  75 |     await dialog.accept();
  76 |   });
  77 |   await page.click('[value="Cancel Selected"]');
  78 |   await page.waitForTimeout(3000);
  79 |   console.log("Cancelled");
  80 |   console.log("Test Skip Annotation")
  81 |   test.skip();
  82 | //});
  83 | //test("logout", async () => {
  84 |   await page.click("#logout");
  85 |   console.log("Logged out");
  86 |   await page.waitForTimeout(3000);
  87 | });
  88 | test.afterEach(async () => {
  89 |   console.log("page Test Completed");
  90 | });
  91 | 
```