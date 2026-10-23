const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginpage.js");
const { SearchHotelPage } = require("../pages/searchpage.js");
const { SelectHotelPage } = require("../pages/selectpage.js");
const { BookHotelPage } = require("../pages/bookhotel.js");
const { BookingConfirmPage } = require("../pages/bookingconfirm.js");
const { ItineraryPage } = require("../pages/myitinerary.js");
test("Mini Project", async ({ page }) => {
  await page.goto("https://adactinhotelapp.com/");
  console.log("      Module 1-loginpage.js       ");
  const loginPage = new LoginPage(page);
  await loginPage.login("admin791", "admin791");
  console.log("AdactinHotel-login page done");
  console.log("     Module 2-searchpage.js       ");
  const searchpage = new SearchHotelPage(page);
  await searchpage.Search(
    "Adelaide",
    "Hotel Cornice",
    "Deluxe",
    "2 - Two",
    "10/06/2027",
    "12/06/2027",
    "3 - Three",
    "0 - None",
  );
  console.log("AdactinHotel-search page done");
  console.log("        Module 3-select.js      ");
  const selectpage = new SelectHotelPage(page);
  await selectpage.Select();
  console.log("AdactinHotel-select page done");
  console.log("        Module 4-bookhotel.js      ");
  const booknow = new BookHotelPage(page);
  await booknow.bookNow(
    "Lavanya",
    "M",
    "ABC Street",
    "1234567890123456",
    "American Express",
    "January",
    "2030",
    "123",
  );
  console.log("AdactinHotel-BookNow Page done");
  console.log("       Module 5-bookingconfirm.js      ");
  const order = new BookingConfirmPage(page);
  await order.confirm();
  console.log("AdactinHotel-Booking Confirm Page done");
  console.log("       Module 6-myitinerary.js      ");
  const itinerary = new ItineraryPage(page);
  await itinerary.Itinerary();
  console.log("AdactinHotel- MyItinerary Page done");
});
//pwd
//cd-change directory
//ls
//cat-catch