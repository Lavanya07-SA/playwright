import { test, expect } from "@playwright/test";
test("skip annotation", async ({ page }) => {
  console.log("AdactinHotel Page Test Skipped");
  test.skip();
  await page.goto("https://adactinhotelapp.com/");
  await page.waitForLoadState("domcontentloaded");
  await page.fill("#username", "admin791");
  await page.fill("#password", "admin791");
  await page.click("#login");
});
test("fail annotation", async ({ page }) => {
  test.fail();
  await page.goto("https://testautomationpractice.blogspot.com/");
  expect(page).toHaveURL("https://adactinhotelapp.com/");
  console.log(`Test fail passed-
    Expected page: AdactinHotel Page
    Actual page: Testautomationpractice Page`);
});
test("slow annotation", async ({ page, context }) => {
  test.slow();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  const [tab2] = await Promise.all([
    context.waitForEvent("page"),
    page.click('//a[text()="OrangeHRM, Inc"]'),
  ]);
  await expect(tab2).toHaveURL(/orangehrm.com/);
  const [tab3] = await Promise.all([
    context.waitForEvent("page"),
    tab2.click('//a[text()="Book a Free Demo"]'),
  ]);
  await expect(tab3).toHaveURL(/book-a-free-demo/);
  await tab3.fill('[name="FullName"]', "Lavanya M");
  await tab3.fill('[type="email"]', "lavanya@gmail.com");
  await tab3.fill('[name="Contact"]', "9360696611");
  await tab3.selectOption('[name="Country"]', "India");
  await tab3.fill('[name="CompanyName"]', "ABC Company");
  await tab3.fill('[name="JobTitle"]', "QA Engineer");
  await tab3.selectOption('[name="NoOfEmployees"]', "200 - 1,000");
  await tab3.click("//button[text()='Allow selection']");
  //await tab3.click('[class="recaptcha-checkbox-checkmark"]');
  await page.waitForTimeout(10000);
  await tab3.click('[value="Get a Free Demo"]');
  await tab3.waitForTimeout(6000);
  await expect(tab3).toHaveURL(/demo-confirmation/);
  const final = await tab3.locator("//h1").innerText();
  console.log(final);
});
test('a',async({page})=>{
await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.fill('[name="username"]', "Admin");
  await page.fill('[name="password"]', "admin123");
  await page.click('[type="submit"]');
  await page.click('//span[text()="My Info"]')
  await page.fill('//div[@class="--name-grouped-field"]/descendant::input[@name="firstName"]', 'Lavanya');
  await page.fill('//div[@class="--name-grouped-field"]/descendant::input[@name="middleName"]', '.');
  await page.fill('//div[@class="--name-grouped-field"]/descendant::input[@name="lastName"]', 'M');
  await page.fill('//div[@class="orangehrm-edit-employee-content"]/descendant::input[4]', 'ABC12345');
  await page.fill('//div[@class="orangehrm-edit-employee-content"]/descendant::input[5]', '123456');
  await page.fill('//div[@class="orangehrm-edit-employee-content"]/descendant::input[6]', 'TN871234');
  await page.fill('//div[@class="orangehrm-edit-employee-content"]/descendant::input[7]', '2030-09-07');
  await page.fill('//div[@class="orangehrm-edit-employee-content"]/descendant::input[8]', '2001-09-07');
  await page.click('//div[@class="orangehrm-edit-employee-content"]/descendant::input[@value="2"]')
})
test.only('OrangeHrm',async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('[name="username"]', "Admin");
  await page.fill('[name="password"]', "admin123");
  await page.click('[type="submit"]');
  await page.click('//span[text()="PIM"]');
  await page.click('//a[text()="Add Employee"]');
  await page.waitForSelector('[class="employee-image-wrapper"]');
  await page.setInputFiles("[type='file']",'C:/Users/ADMIN/Pictures/ANBE2531.jpg')
  await page.fill('[name="firstName"]', 'Lavanya');
  await page.fill('[name="middleName"]', ' ');
  await page.fill('[name="lastName"]', 'M');
  await page.fill('//div[@class="orangehrm-employee-container"]/descendant::input[5]', '14301');
  //await page.click('[type="checkbox"]');
  await page.click('//button[text()=" Save "]');
})
