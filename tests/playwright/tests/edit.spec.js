import{test,expect}from '@playwright/test'
test('edit',async({page})=>{
    await page.goto('https://letcode.in/edit')
    await page.locator('#fullName').fill('Lavanya')

    const letter=await page.locator('#join')

    await letter.press('End')
    await letter.type(' Student')
    await letter.press('Tab')

    const input=await page.locator('#getMe')
    const getme=await input.inputValue()
    console.log(getme)

    const clear=await page.locator('#clearMe')
    await clear.clear()

    const enable=await page.locator('#noEdit')
    const edit=await enable.isEnabled()
    console.log(edit)

    const enable1=await page.locator('#dontwrite')
    const read=await enable1.isEnabled()
    console.log(read)
})