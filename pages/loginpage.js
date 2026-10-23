//POM-page object model-design pattern-used in automation testing to organize and maintain test script easy
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginbtn = page.locator("#login");
  }
  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
  }
}
module.exports = { LoginPage };
