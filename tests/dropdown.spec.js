import { test, expect } from "@playwright/test";
test("dropdown", async ({ page }) => {
  await page.goto("https://letcode.in/dropdowns");

  const single = await page.locator("#fruits");

  await single.selectOption({ label: "Mango" }); //visible text
  await page.waitForTimeout(3000);

  await single.selectOption({ value: "2" }); //attribute value
  await page.waitForTimeout(3000);

  await single.selectOption({ index: 4 }); //index
  await page.waitForTimeout(3000);

  const check = await single.evaluate((el) => el.multiple); //to check whether multiple or single dropdown
  console.log(check);

  const alloption = await single.locator("option").allTextContents(); //all text from options-all options prints
  console.log(alloption);

  const selectedoption = await single.inputValue(); //selected option-prints that value which we selected
  console.log(selectedoption);

  //task-multiple dropdown,select and unselect
});
