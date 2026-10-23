//annotation are special tag-used to control test behaviour(skip fail slow)
//skip()-method name-skips the test
//fail()-expect to fail
//slow()-increase timeout
import { test, expect } from "@playwright/test";
test("annotation", async ({ page }) => {
  test.skip();
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.fill('[name="username"]', "Admin");
  await page.fill('[name="password"]', "admin123");
  await page.click('[type="submit"]');
});
test('fail annotation',async({page})=>{
    test.fail();
    await page.goto('https://www.amazon.in/')
    expect(1).toBe(2);//wrong assertation
})
test('slow annotation',async({page})=>{
    test.slow();
    await page.goto('https://www.flipkart.com/')

})
/*test("a", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});
test.only("b", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
});
test("c", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
});*/
