import{test,expect}from '@playwright/test'
import { log } from 'console';
test('checkbox',async({page})=>{
    await page.goto('https://leafground.com/checkbox.xhtml');

    /*const basic=await page.locator("//span[text()='Basic']");
    await basic.click();
    const basiccheckbox=await page.locator('[id="j_idt87:j_idt89_input"]')
    const bcb=await basiccheckbox.isChecked();
    console.log(bcb)
   
    const notification=await page.locator('[id="j_idt87:j_idt91"]');
    await notification.click();
    const noti=await page.locator('[id="j_idt87:j_idt91_input"]');
    const notify=await noti.isChecked();
    console.log(notify)

    const fav1=await page.locator('[for="j_idt87:basic:0"]');
    await fav1.click();
    const check1=await fav1.isChecked();
    const fav2=await page.locator('[for="j_idt87:basic:2"]');
    await fav2.click();
    const check2=await fav2.isChecked();

    console.log(check1,check2);

    const tristate=await page.locator('[id="j_idt87:ajaxTriState"]')
    await tristate.click();
    await tristate.click();
    await tristate.click();

    console.log("Tristate checkbox runned successfully")
    
    const disablebtn=await page.locator('[disabled="disabled"]');
    const verify=await disablebtn.isDisabled();
    console.log(verify)*/

    const basic=await page.locator('[id="j_idt87:j_idt89"]')
    await basic.click();
    const bsccheckbox=await page.locator('[name="j_idt87:j_idt89_input"]')
    const checkbasic=await bsccheckbox.isChecked();
    console.log("basic checkbox:",checkbasic)

    const notification=await page.locator('[id="j_idt87:j_idt91"]')
    await notification.click()
    const notificationcheckbox=await page.locator('[name="j_idt87:j_idt91_input"]')
    const notify=await notificationcheckbox.isChecked()
    console.log("Notification Checkbox:",notify)

    const favlang1=await page.locator('[for="j_idt87:basic:0"]')
    await favlang1.click()
    const fv1=await page.locator('[id="j_idt87:basic:0"]')
    const check1=await fv1.isChecked()

    const favlang2=await page.locator('[for="j_idt87:basic:2"]')
    await favlang2.click()
    const fv2=await page.locator('[id="j_idt87:basic:2"]')
    const check2=await favlang2.isChecked()
    console.log("Favorite Languages:",check1,check2)

    const tristate=await page.locator('[id="j_idt87:ajaxTriState"]')
    await tristate.click();
    await tristate.click();
    await tristate.click();
    console.log("Tristate checkbox runned successfully")

    const toggle=await page.locator('[id="j_idt87:j_idt100"]')
    await toggle.click()
    const togglecheck=await page.locator('[id="j_idt87:j_idt100_input"]')
    const checktoggle=await togglecheck.isChecked()
    console.log("Toggle Switch Toggled:",checktoggle)

    const disabled=await page.locator('[id="j_idt87:j_idt102_input"]')
    const verify=await disabled.isDisabled()
    console.log("Verify button is disabled:", verify)


})