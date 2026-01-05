import { Given, Then } from '@cucumber/cucumber';
import { Browser, Page } from 'playwright';
import { chromium } from 'playwright';


/*let page:Page, browser: Browser;
Given('I launch the browser', async function () {
    console.log('Launching Browser');
    browser= await chromium.launch({ headless: false,args: ['--start-maximized']})
    const context=await browser.newContext({viewport:null})
    page=await context.newPage();   ''

    });



Then('I open Jazz Pharma', async function () {
    await page.goto('https://www.amazon.in/');

});


/* Then('I close the browser', async function () {
    await page.close();

}); */

let p1: Page, b1: Browser;
Given('I lauch the browser', async function () {
    console.log('Launching the browser')
    b1 = await chromium.launch({ headless: false, args: ['--start-maximized'] })
    const context = await b1.newContext({ viewport: null })
    p1 = await context.newPage()

});



Then('I open testAUtomatio2 site', async function () {

    await p1.goto('https://testautomationpractice.blogspot.com/')

});

Then('I enter the details',{timeout:60000}, async function () {
    /*await p1.getByPlaceholder('Enter Name').fill('Mani')
    await p1.getByPlaceholder('Enter EMail').fill('manikumar.qa@gmail.com')
    await p1.getByText('START').click()
    await p1.getByText('STOP').click()
    await p1.getByRole('checkbox',{name:'Sunday'}).scrollIntoViewIfNeeded()
    await p1.getByRole('checkbox',{'name':'Wednesday'}).check()*/

    await p1.locator("//*[@id='name']").fill('Gulli')
    await p1.locator("//input[@id='email']").fill('mg@gmail.com')
    await p1.locator("//*[@placeholder='Enter Phone']").fill('12345678952')
    await p1.locator("//button[@class='start']").click()
    await p1.waitForTimeout(3000)
    await p1.locator("//button[@class='stop']").click()   
    await p1.locator("//input[@id='sunday']").scrollIntoViewIfNeeded()
    await p1.locator("//input[@id='male']").click()
    await p1.locator("//input[@id='sunday']").click()
    await p1.locator("//*[@id='saturday']").click()
    await p1.locator("//input[contains(@id,'wednesday')]").click() 

    var l=await p1.locator("//h2[text()='Dynamic Button']").innerHTML();
    console.log(" "+ l)

    await p1.locator("//input[@id='input2']").scrollIntoViewIfNeeded()
    await p1.locator("//input[@id='input2']").fill('GulliMani')
    await p1.locator("//button[@id='btn2']").click()

    await p1.locator("//input[@id='input2']//parent::div").type('Hello')
    


         });


Then('I close the browser', async function () {
    await p1.close();

});

