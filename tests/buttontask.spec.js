import{test,expect}from '@playwright/test'
test('button',async({page})=>{
await page.goto('https://leafground.com/button.xhtml');

await page.locator('[id="j_idt88:j_idt90"]').click();
const title=await page.title();
console.log("title: " + title);
await page.goBack();

const buttondisabled=await page.locator('[disabled="disabled"]');
const check=await buttondisabled.isDisabled();
console.log(check);

const position=await page.locator('[id="j_idt88:j_idt94"]');
const findsubmitposition=await position.boundingBox();
console.log(findsubmitposition);

const savebutton=await page.locator('[id="j_idt88:j_idt96"]');
const savebuttoncolor=await savebutton.evaluate((el)=>getComputedStyle(el).backgroundColor);
console.log(savebuttoncolor);

const size=await page.locator('[id="j_idt88:j_idt98"]');
const findsize=await size.boundingBox();
console.log(findsize.height);
console.log(findsize.width);
})