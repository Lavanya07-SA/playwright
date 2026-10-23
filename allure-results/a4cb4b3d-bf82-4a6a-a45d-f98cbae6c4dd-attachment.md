# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: miniprojectTest.spec.js >> Mini Project
- Location: tests\miniprojectTest.spec.js:7:1

# Error details

```
Error: locator.inputValue: Test ended.
Call log:
  - waiting for locator('#order_no')

```

# Test source

```ts
  1  | class BookingConfirmPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.orderno = page.locator("#order_no");
  5  |     this.myitinerary = page.locator("#my_itinerary");
  6  |   }
  7  |   async confirm(orderno) {
> 8  |     await this.orderno.inputValue();
     |                        ^ Error: locator.inputValue: Test ended.
  9  |     await this.myitinerary.click();
  10 |   }
  11 | }
  12 | module.exports = { BookingConfirmPage };
  13 | 
```