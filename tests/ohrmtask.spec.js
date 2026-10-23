import{test,expect}from '@playwright/test'
test('ohrm screenshot & videoRec',async({browser})=>{
    const context=await browser.newContext({
        recordVideo:{
            dir:'video'
        }
    })
    const page=await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000)

    const username=await page.locator('[name="username"]')
    await username.fill('Admin')

    const password=await page.locator('[name="password"]')
    await password.fill('admin123')

    const login=await page.locator('[type="submit"]')
    await login.click()
    console.log('login successful')
    await page.screenshot({path:'ohrm.png',fullPage:true})

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
    
    const empname=await page.locator('[name="firstName"]')
    await empname.press('End')
    await empname.fill('Lavanya')
    await empname.press('Tab')
    
    const empmidname=await page.locator('[name="middleName"]')
    await empmidname.press('End')
    await empmidname.fill(' ')
    await empmidname.press('Tab')

    const emplastname=await page.locator('[name="lastName"]')
    await emplastname.press('End')
    await emplastname.fill('M')
    await emplastname.press('Tab')

    const empid=await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    await empid.press('End')
    await empid.fill('MyEmpID007')
    await empid.press('Tab')
    
    const gender=await page.locator('(//input[@type="radio"])[2]')
    await gender.click()
    await context.close();



    // const otherid=await page.locator('(//input[@class="oxd-input oxd-input--active"])[3]')
    // await otherid.press('End')
    // await otherid.fill('ID07')
    // await otherid.press('Tab')
    // console.log('Employee ID & Other ID updated successfully')

    // const license=await page.locator('(//input[@class="oxd-input oxd-input--active"])[4]')
    // await license.fill('LIC007')
    // //await license.press('Tab')

    // const lEd=await page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]')
    // await lEd.fill('2024-06-01')




    


})