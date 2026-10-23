import{test,expect}from '@playwright/test'
test('tablet',async({page})=>{
    await page.goto('https://letcode.in/table');
    const alldata=await page.locator('//table/tbody/tr/td').allTextContents()//to print all text in terminal
    console.log("all data:",alldata)

    const rowdata=await page.locator('//table/tbody/tr[3]/td').allTextContents()
    console.log("row data:",rowdata)

    const columndata=await page.locator('//table/tbody/tr/td[1]').allTextContents()
    console.log("column data:",columndata)

    const particulardata=await page.locator('//table/tbody/tr[3]/td[1]').allTextContents()
    console.log("particular data:",particulardata)

    const header=await page.locator('//table/thead/tr/th').allTextContents()
    console.log("header:",header)

    const selecthoteltable=await page.locator('//table/tbody/tr/td/strong').allTextContents();
    console.log("select hotel table:",selecthoteltable);

    

})