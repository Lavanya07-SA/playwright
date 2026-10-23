import{test,expect}from '@playwright/test'
test('keyboardaction',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  

    await page.keyboard.press('A')
    await page.keyboard.press('d');
    await page.keyboard.press('m');
    await page.keyboard.press('i');
    await page.keyboard.press('n');
    //or

    // await page.keyboard.type('Admin');

    await page.keyboard.press('Tab');

    await page.keyboard.press('a');
    await page.keyboard.press('d');
    await page.keyboard.press('m');
    await page.keyboard.press('i');
    await page.keyboard.press('n');
    await page.keyboard.press('1');
    await page.keyboard.press('2');
    await page.keyboard.press('3');
//or
    // await page.keyboard.type('admin123');
    
    await page.keyboard.press('Tab');

    await page.keyboard.press('Enter');




})