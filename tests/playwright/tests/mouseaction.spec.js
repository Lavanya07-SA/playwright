import{test,expect}from '@playwright/test'
test('mouseaction',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//click
    /*const click=await page.locator('[type="submit"]')
    await click.click()*/
//double click
    const doubleclick=await page.locator('[type="submit"]')
    await doubleclick.dblclick()
//right click
    const rightclick=await page.locator('[type="submit"]')
    await rightclick.click({button:'right'})

    //left click
    const leftclick=await page.locator('[type="submit"]')
    await leftclick.click({button:'left'})

    //middle click
    const mdlclick=await page.locator('[type="submit"]')
    await mdlclick.click({button:'middle'})

    //scroll down
    const scrolldown=await page.locator('(//a[@target="_blank"])[5]')
    await scrolldown.hover()

})