import{test,expect} from '@playwright/test'
test('file upload',async({page})=>{
    await page.goto('https://letcode.in/file');

    await page.waitForSelector('[for="resume"]');
    await page.setInputFiles('[name="resume"]','C:/Users/ADMIN/Documents/playwright/tests/demo.txt');
    await page.waitForTimeout(3000);
    console.log('file uploaded successfully');
})