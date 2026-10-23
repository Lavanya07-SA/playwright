import{test,expect}from '@playwright/test'
test('task',async({page})=>{
    await page.goto('https://leafground.com/input.xhtml;jsessionid=node016329lsgmhbqk1hivniwhgvw9f246609.node0');
    await page.locator('[name="j_idt88:name"]').fill('Lavanya');

    const country = await page.locator('[name="j_idt88:j_idt91"]');
    await country.press('End');
    await country.type(' India');
    await country.press('Tab');

    const verify= await page.locator('[placeholder="Disabled"]');
    const disable=await verify.isDisabled();
    console.log(disable);

    const text=await page.locator('[name="j_idt88:j_idt95"]')
    await text.clear()
    console.log('Text cleared successfully');

    const retrieve=await page.locator('[name="j_idt88:j_idt97"]')
    const retrievedValue=await retrieve.inputValue();
    console.log(retrievedValue);

    const mail=await page.locator('[name="j_idt88:j_idt99"]')
    await mail.press('End')
    await mail.type('lavanya@gmail.com')
    await mail.press('Tab')
    console.log('Email entered successfully')

    const aboutmyself=await page.locator('[name="j_idt88:j_idt101"]')
    await aboutmyself.fill('I am a software engineer. I have 4 years of experience in automation testing. I am passionate about learning new technologies and improving my skills. I enjoy working in a collaborative environment and contributing to the success of the team.')
    console.log('About myself entered successfully')
 
    const texteditor=await page.locator('(//div[@class="ql-editor ql-blank"])[1]')
    await texteditor.press('End')
    await texteditor.fill('This is a text editor.')
    await texteditor.press('Tab')
    console.log('Text editor filled')

    // const error=await page.locator('[name="j_idt106:thisform:age"]')
    // error.press('Enter')

 
})