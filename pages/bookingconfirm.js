class BookingConfirmPage {
  constructor(page) {
    this.page = page;
    this.orderno = page.locator("#order_no");
    this.myitinerary = page.locator("#my_itinerary");
  }
  async confirm(orderno) {
    const ordervalue=await this.orderno.inputValue();
    console.log("Order No: ",ordervalue);
    await this.myitinerary.click();
  }
}
module.exports = { BookingConfirmPage };
