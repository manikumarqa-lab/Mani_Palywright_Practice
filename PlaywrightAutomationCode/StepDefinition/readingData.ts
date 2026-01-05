import { Given, Then } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";
import { TestData1, TestDate2 } from "../Files/Datafile.json"


let page: Page, browser: Browser
Given('I have opened the ch browser', async function () {
    browser = await chromium.launch({ headless: false, args: ['--size-maximized'] })
    const context = await browser.newContext({ viewport: null })
    page = await context.newPage()
});

Then('I launch the app and test the data from json', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder('Enter Name').fill(TestData1.Name)
    await page.getByPlaceholder('Enter EMail').fill(TestData1.Email)
    await page.screenshot({ path: './test-result/screenshot/emaildata.jpg', fullPage: true })
    await page.getByPlaceholder('Enter EMail').press("Control+A")
    await page.keyboard.press("Delete")
    await page.keyboard.up("Control")
    await page.keyboard.insertText("gulli@getMaxListeners.com")
    await page.screenshot({ path: './test-result/screenshot/emaildatakeyboard.jpg' })
    
    await page.getByPlaceholder('Enter Phone').fill(TestData1.Phone)
    await page.locator('#textarea').fill(TestDate2.Address)
    await page.locator("#country").selectOption(TestData1.Country)
    await page.locator("//input[@id='datepicker']").fill(TestData1["Date Picker 1 (mm/dd/yyyy)"]
        //await page.locator("//input[@id='datepicker']").press("Control+A")


    )

});

 Then('I will refer data from featurefile {string},{string},{string},{string},{string}', async function (Name, Email, Phone, Address,Country) {
        await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder('Enter Name').fill(Name)
    await page.getByPlaceholder('Enter EMail').fill(Email)
    await page.getByPlaceholder('Enter Phone').fill(Phone)
    await page.locator('#textarea').fill(Address)
    await page.locator("#country").selectOption(Country)
    await page.screenshot({ path: './test-result/screenshot/datafromfeaturefile.jpg' })
    
        
         });