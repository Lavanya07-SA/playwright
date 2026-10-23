class ItineraryPage {
  constructor(page) {
    this.page = page;
    this.checkall = page.locator("#check_all");
    this.cancel = page.locator('[value="Cancel Selected"]');
    this.logout = page.locator("#logout");
  }
  async Itinerary() {
    await this.checkall.click();
    await this.page.on("dialog", async (dialog) => {
      await this.page.waitForTimeout(3000);
      await dialog.accept();
    });
    await this.cancel.click();
    await this.logout.click();
    await this.page.waitForTimeout(3000);
  }
}
module.exports = { ItineraryPage };
