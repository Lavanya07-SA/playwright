import{test,expect}from '@playwright/test'
test('multiple dropdown',async({page})=>{
    await page.goto('https://letcode.in/dropdowns');

    const multiple=await page.locator('#superheros')

    await multiple.selectOption([{label:'Captain America'},{label:'Thor'}])//selected CA and thor
    await page.waitForTimeout(3000);

    /*await multiple.selectOption([{value:'im'},{value:'sm'}])
    await page.waitForTimeout(3000);

    await multiple.selectOption([{index:10},{index:12}])
    await page.waitForTimeout(3000);*/

//           PARTIAL DESELECT
    await multiple.selectOption([{label:'Captain America'}])//deselected thor by selecting captain america
    await page.waitForTimeout(3000);

    const check=await multiple.evaluate(el=>el.multiple)
    console.log(check)//checks whether multiple or single dropdown?

    const options=await multiple.locator('option').allTextContents()
    console.log(options)//prints all options

    const selected=await multiple.inputValue()//prints the value of selected option
    console.log(selected)

    //       COMPLETE DESELECT

    await multiple.selectOption([])//deselects everything 
    await page.waitForTimeout(3000);

    const selected1=await multiple.inputValue()//nothing prints
    console.log(selected1)

    const superhero1=await multiple.locator('option:checked').allInnerTexts()//prints empty array
    console.log(superhero1)

})