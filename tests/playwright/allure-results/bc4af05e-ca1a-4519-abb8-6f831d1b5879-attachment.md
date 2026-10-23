# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hooksminiproject.spec.js >> search hotel
- Location: tests\hooksminiproject.spec.js:18:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.login_title')
Expected: "Search Hotel"
Received: "Search Hotel (Fields marked with Red asterix (*) are mandatory)"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('.login_title') with timeout 5000ms
  - waiting for locator('.login_title')
    14 × locator resolved to <td colspan="2" class="login_title">…</td>
       - unexpected value "Search Hotel (Fields marked with Red asterix (*) are mandatory)"

```

```yaml
- cell "Search Hotel (Fields marked with Red asterix (*) are mandatory)"
```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test'
  2  | let page;
  3  | test.beforeAll(async({browser})=>{
  4  |     page=await browser.newPage()
  5  |     console.log("Browser Launched Using beforeAll")
  6  | 
  7  |     await page.goto('https://adactinhotelapp.com/')
  8  |     await page.waitForLoadState('domcontentloaded')
  9  |     await page.fill('#username','admin791')
  10 |     await page.fill('#password','admin791')
  11 |     await page.click('#login')
  12 | 
  13 |     await expect(page).toHaveURL(/SearchHotel/)
  14 | })
  15 | test.beforeEach(async()=>{
  16 |     console.log('search hotel page test')
  17 | })
  18 | test('search hotel',async()=>{
> 19 |   await expect(page.locator('.login_title')).toHaveText('Search Hotel')
     |                                              ^ Error: expect(locator).toHaveText(expected) failed
  20 |   await page.selectOption('#location',"{label:'Adelaide'}");
  21 |   await page.selectOption('#hotels','{value:"Hotel Cornice"}');
  22 |   await page.selectOption('#room_type','{index:3}');
  23 |   await page.selectOption('#room_nos',"{label:'2 - Two'}");
  24 |   await page.fill('#datepick_in','10/06/2027');
  25 |   await page.fill('#datepick_out','12/06/2027');
  26 |   await page.selectOption("#adult_room",'{value:"2"}');
  27 |   await page.selectOption('#child_room','{index:0}');
  28 |   await page.click('//input[@value="Search"]');
  29 | 
  30 |   await expect(page).toHaveURL(/SearchHotel/)
  31 | })
  32 | test.afterEach(async()=>{
  33 |     console.log('Search Hotel page Test Completed')
  34 | })
  35 | test.beforeEach(async()=>{
  36 |     console.log('Select hotel page Test')
  37 | })
  38 | test('select hotel',async()=>{
  39 |     await expect(page.locator('.login_title')).toHaveText('Select Hotel')
  40 |     await page.click('#radiobutton_0')
  41 |     await page.click('#continue')
  42 |  
  43 |     await expect(page).toHaveText(/BookHotel/)
  44 | })
  45 | test.afterEach(async()=>{
  46 |     console.log('Select hotel page Test Completed')
  47 | })
```