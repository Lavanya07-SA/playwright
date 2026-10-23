class SearchHotelPage {
  constructor(page) {
    this.page = page;
    this.location = page.locator("#location");
    this.hotel = page.locator("#hotels");
    this.roomtype = page.locator("#room_type");
    this.roomnos = page.locator("#room_nos");
    this.datein = page.locator("#datepick_in");
    this.dateout = page.locator("#datepick_out");
    this.adultroom = page.locator("#adult_room");
    this.childroom = page.locator("#child_room");
    this.searchbtn = page.locator('//input[@value="Search"]');
  }
  async Search(
    location,
    hotel,
    roomtype,
    roomnos,
    datein,
    dateout,
    adultroom,
    childroom,
  ) {
    await this.location.selectOption(location);
    await this.hotel.selectOption(hotel);
    await this.roomtype.selectOption(roomtype);
    await this.roomnos.selectOption(roomnos);
    await this.datein.fill(datein);
    await this.dateout.fill(dateout);
    await this.adultroom.selectOption(adultroom);
    await this.childroom.selectOption(childroom);
    await this.searchbtn.click();
  }
}
module.exports = { SearchHotelPage };
