import { Given, Then } from "@cucumber/cucumber";
import { Page, Browser } from "playwright";
//import { context } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { expect } from "playwright/test";

let p1: Page, browser: Browser
Given('I have opened the browser3', async function () {
    console.log("launching the rowser")
    browser = await chromium.launch({ headless: false, args: ['--size-maximized'] });
    const context = await browser.newContext({ viewport: null })
    p1 = await context.newPage()
});


Then('I will launch the herokuapp and perform download', async function () {
    await p1.goto("https://the-internet.herokuapp.com/")
    await p1.waitForSelector("//h1[@Class='heading']")
    await p1.waitForTimeout(20000)
    await p1.locator("//div[@id='content']//ul//li[17]").scrollIntoViewIfNeeded()
    await p1.getByText("//div[@id='content']//ul//li[17]").click()


    await p1.waitForTimeout(10000)
    

    const d = await p1.waitForEvent('download')

    await p1.getByText("4.jpg").click()
    await d.saveAs('./test-result/screenshot/4.jpg')






});

Then('I will close the browser3', async function () {

    browser.close()

});

