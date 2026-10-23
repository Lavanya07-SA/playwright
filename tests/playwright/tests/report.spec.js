import {test,expect } from "@playwright/test";
test('Descendant Xpath',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const allElements=await page.locator('//div[@id="post-body-1307673142697428135"]/descendant::*').count();//except text,comment nodes 
    console.log("Total Descendant Elements are: "+allElements);
    //const name=await page.locator('//div[@id="post-body-1307673142697428135"]/descendant::input[@id="name"]').fill('LAVANYA');
    //const button=await page.locator('//div[@id="post-body-1307673142697428135"]/descendant::button').click(); 

//allure report-tool-report-checks whether test case runs and report of that test case
})
