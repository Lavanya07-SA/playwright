import{test,expect}from '@playwright/test'
test('radiobox',async({page})=>{
    await page.goto('https://leafground.com/radio.xhtml')

    const select=await page.locator('[for="j_idt87:console1:1"]');
    await select.click();
    const favbrowser=await page.locator('[for="j_idt87:console1:1"]')
    const statuschecking=await favbrowser.isChecked();
    console.log("Favorite Browser:",statuschecking)

    const selectable=await page.locator('[for="j_idt87:city2:0"]');
    const beforeclick= await selectable.isChecked();
    console.log("Beforeclick:",beforeclick);
    await selectable.click();
    await page.waitForTimeout(1000);
    const afterclick= await selectable.isChecked();
    console.log("Afterclick:",afterclick)
    await selectable.click()
    await page.waitForTimeout(1000);
    const again=await selectable.isChecked();
    console.log("Finalclick:",again)

    const defaultselect=await page.locator('[id="j_idt87:console2"]');
    if(await page.locator('[id="j_idt87:console2:0"]').isChecked()){
        console.log("default radio button is chrome")
    }else if(await page.locator('[id="j_idt87:console2:1"]').isChecked()){
        console.log("default radio button is firefox ")
    }else if(await page.locator('[id="j_idt87:console2:2"]').isChecked()){
                console.log("default radio button is safari")
    }else if(await page.locator('[id="j_idt87:console2:3"]').isChecked()){
        console.log("default radio button is edge")

    }else{
        console.log("no default radio button")
    }

    const age=await page.locator('[id="j_idt87:age"]')
    if(await page.locator('[id="j_idt87:age:0"]').isChecked()){
        console.log("1-20 years selected")
    }else if(await page.locator('[id="j_idt87:age:1"]').isChecked()){
        console.log("21-40 years selected")
    }else if(await page.locator('[id="j_idt87:age:2"]').isChecked()){
        console.log("41-60 years selected")
    }else{
        console.log("Age Group Selected")
    }
    /*const chrome=await page.locator('[id="j_idt87:console2:0"]')
    const firefox=await page.locator('[id="j_idt87:console2:1"]')
    const safari=await page.locator('[id="j_idt87:console2:2"]')
    const edge=await page.locator('[id="j_idt87:console2:3"]')

       console.log(await chrome.isChecked());
       console.log(await firefox.isChecked());
       console.log(await safari.isChecked());
       console.log(await edge.isChecked());*/
       

})