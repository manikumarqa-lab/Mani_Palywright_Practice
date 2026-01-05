import {Given,Then} from '@cucumber/cucumber';
import {Page, Browser, firefox, webkit} from 'playwright';
import {chromium} from 'playwright';


let page:Page, browser:Browser;

Given('I have opened the browser for frames', async function () {
   console.log("Launching the browser")
   // browser= await chromium.launch({headless:false,args:['--size-maximized']});
      browser= await chromium.launch({headless:false,args:['--start-maximized']});
    const context= await browser.newContext({viewport:null})
    page=await context.newPage()  


});
Given('I have opened the firefox browser', async function () {

    console.log("launching the rowser")
    browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null })
    page = await context.newPage();

});

Given('I have opened the webkit browser', async function () {

    console.log("launching the rowser")
    browser = await webkit.launch({ headless: false, args: ['--start-maximized'] });
    const context = await browser.newContext({ viewport: null })
    page = await context.newPage();

});

Given('I have opened the headless browser', async function () {
   console.log("Launching the browser")
    browser= await chromium.launch({headless:true,args:['--start-maximized']});
    const context= await browser.newContext({viewport:null})
    page=await context.newPage()  


});

Then('I launched the vision site', { timeout: 30 * 1000 }, async function () {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    
    console.log("site launched successfully")
});

Then('I performed actions on frames', async function () {

    await page.frameLocator('//frame[@src="frame_1.html"]').locator("//input[@name='mytext1']").fill('hello frame1')
    await page.frameLocator('//frame[@src="frame_2.html"]').locator("//input[@name='mytext2']").fill('hello frame2')

    //await page.frameLocator('//frame[@src="frame_3.html"]').frameLocator("{url: 'https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true'}").locator("//div[@class='AB7Lab Id5V1']").click()

    await page.frame({ url:'https://ui.vision/demo/webtest/frames/frame_3.html'})?.locator('//input[@name="mytext3"]').fill('hello')
    //var d= a.childFrames()
  
   // var b= await a.locator('{url: "https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"}')
    // await b.locator("//div[@class='AB7Lab Id5V1']").click()
});
Then('I will close the browser12', async function () {
    browser.close()



});

