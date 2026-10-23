//import-keyword, test-property9to check test cases, expect-verity test cases , playwright-package
import{test,expect}from '@playwright/test';
test('practice',async({page})=>{//browser launch-test name-any name
    //navigation functions
await page.goto('https://www.instagram.com/?hl=en');
await page.goto('https://www.youtube.com/watch?v=tzXYQGFUqmo&list=RDtzXYQGFUqmo&start_radio=1');
await page.goBack();
await page.goForward();
await page.reload();
const title=await page.title();
console.log(title);
const url=await page.url();
console.log(url);

}
)