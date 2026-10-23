import{test,expect}from '@playwright/test'
test('frame',async({page})=>{
    await page.goto('https://letcode.in/frame');

    const parentframe=await page.frameLocator('#firstFr')//({name:'firstFr'})called by object.frameLocator is used to locate the frame
    await parentframe.locator('[name="fname"]').fill('Rohit');
    await page.waitForTimeout(2000);

    await parentframe.locator('[name="lname"]').fill('Kumar');
    await page.waitForTimeout(2000);

    const childframe=await parentframe.frameLocator('[title="Inner Frame"]');
    await childframe.locator('[name="email"]').fill('rohit.kumar@example.com');
    await page.waitForTimeout(2000);

    await page.locator('//span[text()="Watch Tutorial"]').click();
    await page.waitForTimeout(3000);
    
});