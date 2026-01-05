import { Given, Then } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';
import { chromium } from 'playwright';

let browser: Browser, page: Page;
Given('I have launched the chr browser', { timeout: 30 * 1000 }, async function () {
    console.log("Launch Browser")
    browser = await chromium.launch({ headless: false, args: ['--start-maximized'] })
    const context = await browser.newContext({ viewport: null })
    page = await context.newPage()

});

Then('I will scroll right', async function () {
    //await page.goto("https://demo.guru99.com/test/guru99home/scrolling.html")
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider")

    //await page.getByText('VBScript').scrollIntoViewIfNeeded()
    //await page.waitForTimeout(10000)
   // await page.locator("//input[@type='range']").scrollIntoViewIfNeeded()
    await page.locator("//input[@type='range']").fill('4')

});

