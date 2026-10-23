import{test,expect}from '@playwright/test'
test('button',async({page})=>{
await page.goto('https://letcode.in/button');

await page.locator('#home').click();
await page.goBack();

const position=await page.locator('#position');
const location=await position.boundingBox();//find position or location and also find the height and width of the element
console.log(location.x);
console.log(location.y);

const color=await page.locator('#color');
const colorValue=await color.evaluate((el)=>getComputedStyle(el).backgroundColor);
//el-evaluate is used to get the computed style of the element, backgroundColor is used to get the background color of the element
console.log(colorValue);

const size=await page.locator('#property');
const size1=await size.boundingBox();
console.log(size1.height);
console.log(size1.width);

const disabledbutton=await page.locator('[title="Disabled button"]');
const check=await disabledbutton.isDisabled();
console.log(check);

const hold=await page.getByText('Button Hold!').click({delay:2000});//getbytext is used to get the element by text and click is used to click the element, delay is used to hold the button for 2 seconds
console.log(hold);
})