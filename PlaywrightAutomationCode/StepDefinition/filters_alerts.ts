import { Given, Then } from '@cucumber/cucumber';
import { Page, Browser } from 'playwright';
import { chromium } from 'playwright';
import { expect } from 'playwright/test';


let page: Page, browser: Browser;

Given('I have opened the browser', async function () {

    console.log("launching the rowser")
    browser = await chromium.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null })
    page = await context.newPage();

});


Then('I launch the sauslabs site', async function () {
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator("//div[@class='login_logo']")).toHaveText('Swag Labs')
    await page.locator("//input[@data-test='username']").fill('problem_user')
    await page.locator("//input[@data-test='password']").fill('secret_sauce')
    await page.locator("//input[@data-test='login-button']").click()

    console.log("Login Successful")

    await page.on('dialog', (dialog) => {
        dialog.accept()
    })

});


Then('I will verify the filters in that page', async function () {

    /* await page.locator("//div[@class='inventory_item_description']")
        .filter({ hasText: 'Sauce Labs Fleece Jacket' })
        .getByRole('button', { name: 'Add to cart' })
        .click()

            console.log("First Item added successfully to cart") */


    await page.locator("//div[@class='inventory_item_description']")
        .filter({ hasText: 'Sauce Labs Onesie' })
        .getByRole('button', { name: 'Add to cart' })
        .click()

        await page.screenshot({ path: './test-result/screenshot/onesie1.png', fullPage: true })    

    console.log("second Item added successfully to cart")
    



});

Then('I will close the browser', async function () {
    browser.close();

});

Then('I will launch the script application', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  //  await expect(page.locator('//h3')).toHaveText('JavaScript Alerts')
   // await expect(page.locator("//p")).toContainText('troublesome')

    console.log("Alerts Site Launched Successfully  ")


});

Then('I will handel the alerts', async function () {

    await page.on('dialog', (dialog) => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am a JS Alert')
        dialog.accept()
    })

    await expect(page.locator("//button[@onclick='jsAlert()']")).toBeVisible()
    await page.locator("//button[@onclick='jsAlert()']").click()

    console.log("Alert handled successfully")

});








