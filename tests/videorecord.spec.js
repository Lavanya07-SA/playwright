import{test,expect}from '@playwright/test'
test('record video',async({browser})=>{
    const context=await browser.newContext({
        recordVideo:{
            dir:'video'
        }            
        })
        const page=await context.newPage()
        await page.goto('https://www.facebook.com/')    
        await page.waitForTimeout(3000)
        await context.close();
})