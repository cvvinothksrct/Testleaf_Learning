
import {chromium,firefox,test} from "@playwright/test";

test("Launch a Browser and get the URL and Title", async() => {

//Launch redbus in Edge browser and get the URL and Title
    const edgeBrowser = await chromium.launch();
    const edgeContext =await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    await edgePage.goto("https://www.redbus.in");
 
    const urlFromEdge = await edgePage.url();
    const titleFromEdge = await edgePage.title();
    console.log("The url is "+urlFromEdge+" and the Browser Title is "+titleFromEdge+"")

//Launch Flipkart in firefox browser and get the URL and Title
const firefoxBrowser = await firefox.launch();
    const firefoxContext =await firefoxBrowser.newContext();
    const firefoxPage = await firefoxContext.newPage();
    await firefoxPage.goto("https://www.flipkart.com");
 
    const urlfromFixfox = await firefoxPage.url();
    const titleFromFirefox = await firefoxPage.title();
    console.log("The url is "+urlfromFixfox+" and the Browser Title is "+titleFromFirefox+"")
})
