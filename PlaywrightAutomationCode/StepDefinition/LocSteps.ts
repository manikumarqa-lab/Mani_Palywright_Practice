import { Given, Then } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';
import { chromium } from 'playwright';
import { expect } from '@playwright/test';

let browser: Browser, page: Page;
Given('I opened the browser', { timeout: 30 * 1000 }, async function () {
    console.log("Launch Browser")
    browser = await chromium.launch({ headless: false, args: ['--start-maximized'] })
    const context = await browser.newContext({ viewport: null })
    page = await context.newPage()

});


Then('I launch TestAutomation1 site', { timeout: 30 * 1000 }, async function () {
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.waitForLoadState('networkidle');

});


Then('I fill fields in upper section', { timeout: 30 * 1000 }, async function () {

    var a = await page.locator("//h2[text()='Dynamic Button']").innerHTML();
    console.log(a);
    a = await page.title();
    console.log(a);
    await page.reload();
    console.log('Page Reloaded successfully');
    await page.locator("//input[@id='name']").fill('Mani787878')
    await page.locator("//input[@id='email']").fill('mani7474@gmail.com')
    await page.locator("//input[@id='phone']").fill('9874563252')
    await page.locator("//input[@id='male']").scrollIntoViewIfNeeded()

    await page.locator("//input[@id='male']").check()

    await page.locator("//input[@id='sunday']//parent::div").click()
    let l = await page.locator("//input[@id='wednesday']//child::span").all()
    console.log("Total elements found: " + l.length)
});


Then('I fill bottom fields in that page', { timeout: 30 * 1000 }, async function () {
    console.log("Started bottom fields ")
    let b = await page.url();
    console.log("Current URL is: " + b);
    let d = await page.locator("//*[@class='title']").allInnerTexts()
    for (let e = 0; e < d.length; e++) {
        console.log(" " + d[e])
    }
    console.log("end of botton fields")

});

Then('I select Country Doropdown', { timeout: 30 * 1000 }, async function () {
    console.log("Started drop down selection ")
    await page.locator("#country").scrollIntoViewIfNeeded()
    var cou = await page.locator("#country").innerText();
    console.log("Country List : ", cou)
    for (let i = 0; i < cou.length; i++) {
        if (cou[i] === 'India') {
            let a = await page.locator("#country").getAttribute(cou[i])
            await page.locator("#country").selectOption(a)
            break;
        }
    }
    console.log("End of Country Selection")

});
Then('I will take screen shot', { timeout: 30 * 1000 }, async function () {
    console.log("Started screen shhots")
    await page.screenshot({ path: './test-result/screenshot/page.png' });
    await page.locator("#country").screenshot({ path: './test-result/screenshot/country1.png' })
    await page.screenshot({ path: './test-result/screenshot/country1.png', fullPage: true })
    console.log("Complete  screen shhots")

});


Then('I will verify couple of methods', async function () {
    //key Board functions

    await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()

    await page.locator("//input[@id='field1']").press('Control+a')
    await page.keyboard.press('Delete')
    await page.keyboard.up("Control")
    await page.locator("//input[@id='field1']").fill('Mani123')

    var d = await page.locator("//div[@id='draggable']")
    var r = await page.locator("//div[@id='droppable']")

    await d.dragTo(r);

    await page.locator("//select[@id='country']").selectOption('India');
    await page.locator("//select[@id='colors']").selectOption(['Red', 'Green'])

    await page.locator("//input[@id='sunday']").check()

    await page.screenshot({
        path: './test-result/screenshot/sun1.png', fullPage: true
    })
    var a = await page.locator("//input[@id='sunday']").isChecked()
    if (a == true) {
        await page.locator("//input[@id='sunday']").uncheck()
    }
    await page.screenshot({
        path: './test-result/screenshot/rightclick.png', fullPage: true
    })
    await page.getByPlaceholder('Enter Name').click({ button: 'right' });



});

Then('I select the Table Content Static way', async function () {

    await expect(page.locator("//input[@class='form-control']")).toHaveCount(3)

    await expect(page.getByPlaceholder("Enter Name")).toBeVisible()
    await page.getByPlaceholder("Enter Name").fill("Hello Mani")
    await page.waitForTimeout(3000)
    await page.screenshot({ path: './test-result/screenshot/expect1.png', fullPage: true })

    //await expect(page.locator("//div[@class='widget-content']/ul/li[1]")).toHaveText('Home')


    console.log("==========Table Content Verification Started=============")
    await page.locator("//table[@name='BookTable']").scrollIntoViewIfNeeded()
    var vis = await page.locator("//table[@name='BookTable']").isVisible()


    if (vis == true) {
        let exp = 'Java'
        let act = await page.locator("//table[@name='BookTable']//tr[3]//td[3]").innerText()

        if (exp == act) {
            console.log("Table contains expected data: " + act)
        }
        else {
            console.log("Table does not contains expected data: " + act)
        }
    }

    else {
        console.log("Table Not visible")
    }
    console.log("==========Table Content Verification Ended=============")


});

Then('I select the Calender Content Static way', async function () {

    //div[@id='ui-datepicker-div']//tr[4]//td[3]

    console.log("==========Calender Selection Started=============")
        console.log("====***** Started ****======")

    await page.locator("//input[@id='datepicker']").click()

    var tablevis = await page.locator("//div[@id='ui-datepicker-div']").isVisible()
    if (tablevis == true) {
        var expdate = '15'
        var actual = await page.locator("//div[@id='ui-datepicker-div']//tr[3]//td[2]").innerText()
        if (expdate == actual) {
            console.log("matched date: " + actual)

        }
        else {

            console.log("Date not matched: ")
        }

        await page.locator("//div[@id='ui-datepicker-div']//tr[3]//td[2]").click()
    }
    console.log("***** ==========Calender Selection Ended=============******")

    await page.locator("//input[@id='datepicker']").screenshot({ path: './test-result/screenshot/calender.png' })
    await page.screenshot({ path: './test-result/screenshot/calfullpage.png', fullPage: true })

});

Then('I select the Calender Content dynamically way', async function () {

    console.log("==========Dynamic Calender Selection Started=============")

    await page.locator("//input[@id='datepicker']").click()
    await page.waitForTimeout(5000)
    var tablevis = await page.locator("//div[@id='ui-datepicker-div']").isVisible()

    if (tablevis == true) {
        console.log("Table is visible")
        var noofrows = await page.locator("//div[@id='ui-datepicker-div']//table//tr").all()
        console.log("No of rows in calender table: " + noofrows.length)
        for (let r = 1; r <= noofrows.length; r++) {
            var c = await page.locator("//div[@id='ui-datepicker-div']//table//tr[" + r + "]//td").all()
            console.log("No of cols in calender table: " + c.length)
            for (let col = 1; col <= c.length; col++) {
                var exp = '20'
                var act = await page.locator("//div[@id='ui-datepicker-div']//table//tr[" + r + "]//td[" + col + "]").innerText()
                if (exp == act) {
                    console.log("Pass")
                    await page.locator("//div[@id='ui-datepicker-div']//table//tr[" + r + "]//td[" + col + "]").click()
                }

            }
        }
        
    }
    else {
        console.log("Table Not visible")
    }
    await page.screenshot({ path: './test-result/screenshot/dynamiccal.png', fullPage: true })

    console.log("==========Dynamic Calender Selection Ended=============")

});

Then('I will verify file upload button', async function () {
 
    await page.locator("//input[@id='singleFileInput']").scrollIntoViewIfNeeded()
    await expect(page.locator("//input[@id='singleFileInput']")).toBeVisible()
    await page.locator("//input[@id='singleFileInput']").setInputFiles("C:\\Users\\Lenovo\\OneDrive\\Desktop\\4.jpg")
    // setInputFiles('./PlaywrightAutomationCode/FeatureFiles/calfullpage.png')
    await page.locator("#singleFileInput").click()
    await expect(page.locator("#singleFileStatus")).toContainText('selected')


});


Then('I will close the browser', async function () {
    await browser.close();

});


