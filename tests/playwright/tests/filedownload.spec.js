import{test,expect} from '@playwright/test'
test('file download',async({page})=>{
    await page.goto('https://letcode.in/file');

    // const excel=await page.locator('#xls');
    // await excel.click();
    // await page.waitForTimeout(3000);
    // console.log('excel file downloaded successfully');

    const pdf=await page.locator('#pdf');
    await pdf.click();
    await page.waitForTimeout(3000);
    console.log('pdf file downloaded successfully');

    // const text=await page.locator('#txt'); 
    // await text.click();
    // await page.waitForTimeout(3000);
    // console.log('text file downloaded successfully');
})