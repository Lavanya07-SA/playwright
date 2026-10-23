//import-keyword, test-property9to check test cases, expect-verity test cases , playwright-package
import{test,expect}from '@playwright/test';
test('browser launch',async({page})=>{//browser launch-test name-any name
    //navigation functions
await page.goto('https://www.amazon.in/');
await page.goto('https://www.flipkart.com/');
await page.goBack();
await page.goForward();
await page.reload();
const title=await page.title();
console.log(title);
const url=await page.url();
console.log(url);

}
)