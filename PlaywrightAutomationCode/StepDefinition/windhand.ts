import { Given, Then } from "@cucumber/cucumber";
import { Context } from "node:vm";
import { Page, Browser } from "playwright";
import { chromium } from "playwright";
import { expect } from "playwright/test";

let p1: Page, p2: Page, p3: Page, p4: Page, p5: Page, browser: Browser, context: Context

Given('I have opened the browser1', async function () {
    console.log("launching the rowser")
    browser = await chromium.launch({ headless: false, args: ['--size-maximized'] });
    context = await browser.newContext({ viewport: null })
    p1 = await context.newPage()
    //  p2= await context.newPage()
    // p3=await context.newPage() 
});


Then('I Lauch the demoqa site', async function () {
    await p1.goto("https://testautomationpractice.blogspot.com/")

});

Then('I will click on new window button', async function () {
    await p1.locator('#PopUp').click()

    await p1.waitForEvent('popup')

    var a = await context.pages()
    console.log("total number of windows: ", a.length)

    await a[1].bringToFront()
    await a[1].waitForLoadState()
    var b = await a[1].title()
    console.log("New window title is: ", b)
    if (b == 'Selenium')
        console.log("==== PASS ====")

});



Then('I will get the new window title', async function () {



});


Then('I will launch the herokuapp', async function () {

    await p1.goto("https://the-internet.herokuapp.com/")

});

Then('I will switch between tabs and get the title', async function () {

    await p1.getByText('Multiple Windows').click()
    await p1.title()
    await expect(p1.locator('//h3')).toContainText("Opening")
    await p1.getByText('Click Here').click()
    await p1.getByText('Elemental Selenium').click()

    await p1.waitForLoadState('load')

    var pgcount = await context.pages()

    console.log("No of Pages :", pgcount.length)

    for (let i = 0; i < pgcount.length; i++) {
        var a = await pgcount[i].title()
        console.log(a)
    }

    console.log("End of For Loop")

});

Then('I will launch the 10 tabs', async function () {

    await p1.goto("https://testautomationpractice.blogspot.com/?m=1")
    await p1.waitForTimeout(10000)

    p2 = await context.newPage()
    await p2.goto("https://the-internet.herokuapp.com/")
     await p2.waitForTimeout(10000)

   /* p3 = await context.newPage()
    await p3.goto("https://elementalselenium.com/")
  await p3.waitForLoadState('load')

    p4 = await context.newPage()
    await p4.goto("https://www.amazon.in/")
   await p4.waitForLoadState('load')
s
    p5 = await context.newPage()
    await p5.goto("https://www.flipkart.com/")
  await p5.waitForLoadState('load') */




});

Then('I will verify switch between tabs and get the title', async function () {


    var pagecount = await context.pages()
    console.log("pages count : ", pagecount.length)

    for (let i = 0; i < pagecount.length; i++) {
        var title = await context[0].title()
        console.log(title)
    }

    console.log("End of For Loop")




});

Then('I will close the browser1', async function () {

    browser.close()

});