import{test,expect}from '@playwright/test'
test('window',async({page,context})=>{
    await page.goto('https://leafground.com/window.xhtml');
    const [singlewindow]=await Promise.all([
        context.waitForEvent('page'),
        await page.click("span:has-text('Open')")//span:has-text("Open") is used to locate the element with text "Open"
    ]);
    await singlewindow.waitForLoadState();//waitForLoadState() is used to wait for the page to load completely
    const email=await singlewindow.locator("//label[text()='E-mail Address']").allTextContents();//allTextContents() is used to get all the text contents of the element
    console.log(email);
    await singlewindow.close();

    await page.click("span:has-text('Open Multiple')");//span:has-text("Open Multiple") is used to locate the element with text "Open Multiple"
    const pages=context.pages();//pages() is used to get all the pages in the context
    console.log(pages.length);
    // await pages[2].close();
    // await pages[1].close();
    // await pages[0].close();

    const parent=page
    await page.click("span:has-text('Close Windows')");//span:has-text("Close Windows") is used to locate the element with text "Close Windows"
    for(const child of context.pages()){
        if (child!=parent) {//c!=p-true,p!=p condition becme false;keeps that page and closes remainijng pages
            await child.close()
        }

    }

})