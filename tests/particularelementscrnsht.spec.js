import{test,expect}from '@playwright/test'
test('particularelement',async({page})=>{
await page.goto('https://www.facebook.com/') 
const email=await page.locator('[name="email"]')
await email.screenshot({path:'particularelement.png',particularelement:true})   
})