import{test,expect} from '@playwright/test';
test('navigation functions',async({page})=>{
    await page.goto('https://www.w3schools.com/');
    const title=await page.title();
    console.log(title);
    const url=await page.url();
    console.log(url);
    await page.goto('https://www.wikipedia.org/');
    const title1=await page.title();
    console.log(title1);
    const url1=await page.url();
    console.log(url1);
    await page.goBack();
    const backurl=await page.url();
    console.log(backurl);
    await page.goForward();
    await page.reload();
    const finalurl=await page.url();
    console.log(finalurl);

});