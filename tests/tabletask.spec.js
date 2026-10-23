import{test,expect}from '@playwright/test'
test('table task',async({page})=>{
    await page.goto('https://letcode.in/table');

    const alldata=await page.locator('//table/tbody/tr/td').allTextContents()
    console.log("All Data:",alldata)

    const rowdata=await page.locator('//table/tbody/tr[2]/td').allTextContents()
    console.log("Row Data:",rowdata)

    const columndata=await page.locator('//table/tbody/tr/td[5]').allTextContents()
    console.log("Column Data:",columndata)

    const particulardata=await page.locator('//table/tbody/tr[5]/td[5]').allTextContents()
    console.log("Particular Data:",particulardata)

    const header=await page.locator('//table/thead/tr/th').allTextContents()
    console.log("Header:",header)

    await page.goto('https://testautomationpractice.blogspot.com/');

    const alldata1=await page.locator('//table[@name="BookTable"]/tbody/tr/td').allTextContents()
    console.log("All Data From Static Table:",alldata1)

    const rowdata1=await page.locator('//table[@name="BookTable"]/tbody/tr[2]/td').allTextContents()
    console.log("Row Data From Static Table:",rowdata1)

    const columndata1=await page.locator('//table[@name="BookTable"]/tbody/tr/td[4]').allTextContents()
    console.log("Column Data From Static Table:",columndata1)

    const particulardata1=await page.locator('//table[@name="BookTable"]/tbody/tr[4]/td[2]').allTextContents()
    console.log("Particular Data From Static Table:",particulardata1)

    const header1=await page.locator('(//table)[1]/thead/tr/th').allTextContents()
    console.log("Header From Static Table:",header1) //static webtable has a bug there is no header ,no thead directly has tbody
})