//hooks are special method used to run code before or after a test
//types: 
//beforeEach-run before every test, 
// afterEach-runs after every test
//beforeAll- runs only once before all test
//afterAll- runs only once after all test
import{test,expect}from '@playwright/test';
let page;
test.beforeAll(async({browser})=>{
    page=await browser.newPage()
    console.log("browser launched using beforeall")
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForLoadState('domcontentloaded')//page load
    await page.fill('[name="username"]','Admin')
    await page.fill('[name="password"]','admin123')
    await page.click('[type="submit"]')

    await expect(page).toHaveURL(/dashboard/)
})
test.beforeEach(async()=>{
    console.log('starting test')
})
test('check dashboard page',async()=>{
    await expect(page.locator('h6')).toHaveText('Dashboard')
})
test('open admin',async()=>{
     await page.click("//span[text()='Admin']")
     await expect(page).toHaveURL(/admin/)
})
test.afterEach(async()=>{
    console.log('Test Completed')
})
test.afterAll(async()=>{
    await page.close()
    console.log('browser closed');
})


