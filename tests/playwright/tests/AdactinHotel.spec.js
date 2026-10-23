import { test, expect } from "@playwright/test";
test("Adactin Hotel", async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: "video",
    }
  });
  const page = await context.newPage();//browser
  await page.goto("https://adactinhotelapp.com/");//navigation
  
  const adactinTitle = await page.title();//title
  console.log("Title:", adactinTitle);
  const adactinUrl = await page.url();//url
  console.log("URL:", adactinUrl);

  const username = await page.locator("#username").fill("admin791");
  await page.keyboard.press("Tab");
  const password = await page.locator("#password").fill("admin791");

  const login=await page.locator('#login')

  const loginbuttonsize=await login.boundingBox();// find size of the login button
  console.log("Login Button Size:",loginbuttonsize);

  const loginbuttoncolor=await login.evaluate((el)=>getComputedStyle(el).backgroundColor);
  console.log("Login Buton Color:",loginbuttoncolor);//find color of the login button

  await login.click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'adactinafterlogin.png' });
  console.log("login button clicked->next page");

  await page.reload();
  console.log("page reloaded");//reloading the page

  const location=await page.locator('//select[@name="location"]');//basic attribute xPath
  await location.selectOption({label:'Adelaide'});//label
  const locationdd=await location.evaluate(el=>el.multiple)//checks whether multiple or single dropdown?
  console.log("is Location multiple dropdown:",locationdd);
  await page.waitForTimeout(1000);

  const hotels=await page.locator("//select[contains(@id,'hotels')]");//contains xPath
  await hotels.selectOption({value:"Hotel Cornice"});//value
  const hotelsdd=await hotels.evaluate(el=>el.multiple);
  console.log("is Hotels multiple dropdown:",hotelsdd);
  await page.waitForTimeout(1000);

  const roomtype=await page.locator("//select[starts-with(@name,'room_type')]");//starts-with xPath
  await roomtype.selectOption({index:3});//index
  const roomtypedropdown=await roomtype.evaluate(el=>el.multiple);
  console.log("is RoomType multiple dropdown:",roomtypedropdown);
  await page.waitForTimeout(1000);

  const roomnos=await page.locator('//select[@id="room_nos"]'); 
  await roomnos.selectOption({label:'2 - Two'});
  const roomnosdropdown=await roomnos.evaluate(el=>el.multiple);
  console.log("is RoomNos multiple dropdown:",roomnosdropdown);
  await page.waitForTimeout(1000);

  const checkin=await page.locator('#datepick_in');
  await checkin.clear();
  await checkin.fill('10/06/2027');
  await page.waitForTimeout(1000);

  const checkout=await page.locator('#datepick_out');
  await checkout.clear();
  await checkout.fill('12/06/2027');
  await page.waitForTimeout(1000);

  const adultroom=await page.locator("//select[contains(@name,'adult_room')]");
  await adultroom.selectOption({value:"2"});
  const adultroomdropdown=await adultroom.evaluate(el=>el.multiple);
  console.log("is AdultRoom multiple dropdown:",adultroomdropdown);
  await page.waitForTimeout(1000);

  const childroom=await page.locator('#child_room');
  await childroom.selectOption({index:0});
  const childroomdropdown=await childroom.evaluate(el=>el.multiple);
  console.log("is ChildRoom multiple dropdown:",childroomdropdown);
  await page.waitForTimeout(1000);

  const search=await page.locator('//input[@value="Search"]').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'aftersearchpage.png' });
  console.log("search button clicked->next page");

  const hotel=await page.locator('//form[@name="select_form"]')

  const hoteltable=await hotel.locator('//table/tbody/tr/td').allInnerTexts();
  console.log("hotel table data:",hoteltable);

  const selecthotel=await page.locator('#radiobutton_0')
  await selecthotel.click();
  await page.waitForTimeout(1000);
  const check=await selecthotel.isChecked();
  console.log("is hotel selected:",check);

  const continuebutton=await page.locator('#continue').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'aftercontinuepage.png' });
  console.log("continue button clicked->next page");

  const firstname=await page.locator("//input[starts-with(@name,'first_name')]").fill('Lavanya');
  const lastname=await page.locator("//input[starts-with(@name,'last_name')]").fill('M');
  const address=await page.locator("//textarea[contains(@name,'address')]").fill('ABCD,xyz street,city');
  const ccnum=await page.locator("//input[contains(@name,'cc_num')]").fill('1234567890123456');
  const cctype=await page.locator("//select[contains(@name,'cc_type')]");
  await cctype.selectOption({value:'VISA'});
  await page.waitForTimeout(1000);

  const expmonth=await page.locator("//select[starts-with(@name,'cc_exp_month')]");
  await expmonth.selectOption({index:12});
  await page.waitForTimeout(1000);

  const expyear=await page.locator("//select[contains(@name,'cc_exp_year')]");
  await expyear.selectOption({label:'2029'});
  await page.waitForTimeout(1000);

  const cvv=await page.locator("//input[@id='cc_cvv']");
  await cvv.fill('123');
  await page.waitForTimeout(1000);  

  const booknow=await page.locator('#book_now')
  const booknowbutton=await booknow.isEnabled();
  console.log("is booknow button enabled:",booknowbutton);
  await booknow.click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'afterbooknowpage.png' });
  console.log("booknow button clicked->next page");

  const orderno=page.locator('#order_no');
  const order_ID=await orderno.isDisabled();
  console.log("Is OrderIdNO Disabled? ",order_ID);
  const ordernoValue=await orderno.inputValue();
  console.log("order number:",ordernoValue);
  await page.waitForTimeout(3000);

  const myitinerary=await page.locator('#my_itinerary').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'aftermyitinerarypage.png' });
  console.log("myitinerary button clicked->next page");

 /* const itinerarytablerow=await page.locator('//table/tbody/tr[4]/td')
  await itinerarytablerow.allInnerTexts();
  console.log("itinerary table particular rowdata:",itinerarytablerow);
  const itinerarytablecolumn=await page.locator('//table/tbody/tr/td[11]')
  await itinerarytablecolumn.allInnerTexts();
  console.log("itinerary table particular columndata:",itinerarytablecolumn);
  const particulardata=await page.locator('//table/tbody/tr[2]/td[5]')
  await particulardata.allInnerTexts();
  console.log("Particluar  table Data:",particulardata);*/

  const selectall=await page.locator('//input[@name="check_all"]').click();
  const unselect=await page.locator('[value="1620258"]').click();
  await page.on("dialog", async (dialog) => {
    await page.waitForTimeout(2000);
    await dialog.accept();
  });
  const cancelbutton=await page.locator('//input[@value="Cancel Selected"]').click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'aftercancelpage.png' });
  console.log("cancel button clicked");

  const logout=await page.locator('//input[@name="logout"]').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'afterlogoutpage.png' });
  console.log("logout button clicked->next page");

  const file=await page.locator('(//a[text()="DOWNLOAD"])[3]');
  await file.click();
  await page.waitForTimeout(3000);
  await page.keyboard.press('Control+s');
  await page.waitForTimeout(3000);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  console.log("file checked and downloaded");

  
  await context.close();


  
});
