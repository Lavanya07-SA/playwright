import { test, expect } from "@playwright/test";
let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  console.log("Browser Launched Using beforeAll");

  await page.goto("https://adactinhotelapp.com/");
  await page.waitForLoadState("domcontentloaded");
  await page.fill("#username", "admin791");
  await page.fill("#password", "admin791");
  await page.click("#login");

  await expect(page).toHaveURL(/SearchHotel/);
});
test.beforeEach(async () => {
  console.log("starting page test");
});
test("search hotel", async () => {
  await expect(page.locator(".login_title")).toContainText("Search Hotel");
  await page.selectOption("#location", "Adelaide");
  await page.selectOption("#hotels", "Hotel Cornice");
  await page.selectOption("#room_type", "Deluxe");
  await page.selectOption("#room_nos", "2 - Two");
  await page.fill("#datepick_in", "10/06/2027");
  await page.fill("#datepick_out", "12/06/2027");
  await page.selectOption("#adult_room", "3 - Three");
  await page.selectOption("#child_room", "0 - None");
  await page.click('//input[@value="Search"]');
  console.log("Hotel Searched");
  await expect(page).toHaveURL(/SelectHotel/);
});
test("select hotel", async () => {
  await expect(page.locator(".login_title")).toContainText("Select Hotel");
  await page.click("#radiobutton_0");
  await page.click("#continue");
  console.log("Hotel Selected");
  await expect(page).toHaveURL(/BookHotel/);
});
test("Book Hotel", async () => {
  await expect(page.locator("#book_hotel_form")).toContainText("Book A Hotel");
  await page.fill("#first_name", "Lavanya");
  await page.fill("#last_name", "M");
  await page.fill("#address", "ABC Street");
  await page.fill("#cc_num", "1234567890123456");
  await page.selectOption("#cc_type", "American Express");
  await page.selectOption("#cc_exp_month", "January");
  await page.selectOption("#cc_exp_year", "2030");
  await page.fill("#cc_cvv", "123");
  test.slow();
  console.log("Test Slow Annotation")
  await page.click("#book_now");
  await page.waitForTimeout(5000);
  console.log("Hotel Booked");
  await expect(page).toHaveURL(/BookingConfirm/);
});
test("Booking Confirm", async () => {
  await expect(page.locator(".login_title")).toContainText(
    "Booking Confirmation",
  );
  const ordervalue = await page.inputValue("#order_no");
  console.log("ordervalue: ", ordervalue);
  await page.click("#my_itinerary");
  console.log(`Test Fail Annotation
     expected page: BookItenary
     actual page: hfgdhsj`
     )
    test.fail();
  await expect(page).toHaveURL(/hfgdhsj/);
});
test("myitinerary", async () => {
  await expect(page.locator(".login_title")).toHaveText("Booked Itinerary");
  await page.click("#check_all");
  await page.on("dialog", async (dialog) => {
    await page.waitForTimeout(3000);
    await dialog.accept();
  });
  await page.click('[value="Cancel Selected"]');
  await page.waitForTimeout(3000);
  console.log("Cancelled");
  console.log("Test Skip Annotation")
  test.skip();
//});
//test("logout", async () => {
  await page.click("#logout");
  console.log("Logged out");
  await page.waitForTimeout(3000);
});
test.afterEach(async () => {
  console.log("page Test Completed");
});
