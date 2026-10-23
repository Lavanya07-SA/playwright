class BookHotelPage {
  constructor(page) {
    this.page = page;
    this.firstname = page.locator("#first_name");
    this.lastname = page.locator("#last_name");
    this.address = page.locator("#address");
    this.creditcardno = page.locator("#cc_num");
    this.cardtype = page.locator("#cc_type");
    this.cardexpmonth = page.locator("#cc_exp_month");
    this.cardexpyear = page.locator("#cc_exp_year");
    this.cardcvv = page.locator("#cc_cvv");
    this.booknowbtn = page.locator("#book_now");
  }
  async bookNow(
    firstname,
    lastname,
    address,
    creditcardno,
    cardtype,
    cardexpmonth,
    cardexpyear,
    cardcvv,
  ) {
    await this.firstname.fill(firstname);
    await this.lastname.fill(lastname);
    await this.address.fill(address);
    await this.creditcardno.fill(creditcardno);
    await this.cardtype.selectOption(cardtype);
    await this.cardexpmonth.selectOption(cardexpmonth);
    await this.cardexpyear.selectOption(cardexpyear);
    await this.cardcvv.fill(cardcvv);
    await this.booknowbtn.click();
  }
}
module.exports = { BookHotelPage };
