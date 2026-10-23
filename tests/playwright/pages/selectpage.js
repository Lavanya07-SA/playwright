class SelectHotelPage {
  constructor(page) {
    this.page = page;
    this.radiobtn = page.locator("#radiobutton_0");
    this.continuebtn = page.locator("#continue");
  }
  async Select() {
    await this.radiobtn.click();
    await this.continuebtn.click();
  }
}
module.exports = { SelectHotelPage };
