import { browser, expect } from '@wdio/globals'
import assert from "assert/strict"
import LoginPage from "../pages/hero.main.page.js"

describe.skip('Webdriverio main page', () => {
    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);
            
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    xit("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.addValue("hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue("hello123")
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username")
        await input.setValue("world")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("world")
    });

    xit("should show click command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $('.radius')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputUsername = await $("#username")
        await inputUsername.addValue("tomsmith")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.addValue('SuperSecretPassword!')
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)
    });

    xit("should show getAttribute command", async () => {
        await browser.url('https://dou.ua/search');

       let inputSearch = await $('#gsc-i-id1')
       let attr = await inputSearch.getAttribute('aria-label')
       console.log("Placeholder attribute is: "+attr)         // outputs: шукати

       await inputSearch.setValue('Cat')
       attr = await inputSearch.getValue()
       await browser.pause(2000)

        console.log("Value attribute is: " +attr)                   //outputs: Cat
    });

    xit("should show getlocation command", async () => {
        await browser.url('https://dou.ua');

       let inputSearch = await $('#txtGlobalSearch')
       let location = await inputSearch.getLocation()
       console.log("Location is: "+ location)                        //outputs: x, y
       console.log("Location by x is: " + location.x)                //outputs: x
       console.log("Location by y is: " + location.y)                //outputs: y
    
       //const elementSize = await inputSearch.getSize()
       //console.log("Location by width is: " + elementSize.width)                //outputs: width
    });

    xit("should show getText command", async () => {
        await browser.url('https://webdriver.io');

       let subtitle = await $('.hero__subtitle')
       console.log("Subtitle text is: " + await subtitle.getText())                 //outputs: Next-gen browser...
    });

    xit("should show if an element is clickable", async () => {
       await browser.url('https://webdriver.io');

       const blogButton = await $('.button[href="/docs/gettingstarted"]')
       let clickable = await blogButton.isClickable()
       console.log("Is clickable: " + clickable)                                    //outputs: true
    });

    xit("should show if an element is displayed", async () => {
       await browser.url('https://webdriver.io');

       const blogButton = await $('.button[href="/docs/gettingstarted"]')
       let displayed = await blogButton.isDisplayed()
       console.log("Is displayed: " + displayed)                                    //outputs: true
    });

    xit("should show getText command", async () => {
       await browser.url('https://webdriver.io');

       const blogButton = await $('.button[href="/docs/gettingstarted"]')
       let displayedInViewport = await blogButton.isDisplayed({ withinViewport: false });
       console.log("Is displayed in viewport: " + displayedInViewport)                            //outputs: false
    });

    xit("should show if an element is enabled", async () => {
       await browser.url('https://webdriver.io');

       const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
       let isEnabled = await getStartedButton.isEnabled();
       console.log("Is get started button is enabled? : " + isEnabled)                            //outputs: true
    });

    xit("should show if an element is focused", async () => {
       await browser.url('https://webdriver.io');

       const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
       let isFocused = await getStartedButton.isFocused();
       console.log("Is get started button is focused before click? : " + isFocused)                            //outputs: false
       await browser.pause(2000)
       await getStartedButton.click();
       console.log("Is get started button is focused after click? : " + isFocused)                            //outputs: false (new page)
       await browser.pause(2000)
    });

    xit("should show movement to element action", async () => {
       await browser.url('https://webdriver.io');

       const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
       await browser.pause(2000)
       await getStartedLink.scrollIntoView()
       await browser.pause(2000)
    });

    xit("should show save screenshot command", async () => {
       await browser.url('https://webdriver.io');

       const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
       await browser.pause(2000)
       await getStartedLink.scrollIntoView()
       await browser.pause(2000)
       await getStartedLink.saveScreenshot('linkScreenshot.png')
    });

    xit("should switch to another window", async () => {
       await browser.url('https://webdriver.io');

       await browser.newWindow('https://google.com')
       await browser.pause(2000)
       await browser.switchWindow('https://webdriver.io');
       await browser.pause(2000)
    });

    xit("should show wait until command", async () => {
       await browser.url('https://webdriver.io');

       await browser.waitUntil(async () =>{
        return $('.button[href="/docs/gettingstarted"]').isDisplayed();
       },5000, "Button is not displayed")
    });

    xit("should get html for certain elements", async () => {
       await browser.url('https://webdriver.io');

       let outerHTML = await $('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[2]/a').getHTML()
       console.log("outerHTML: " + outerHTML)

       const innerHTML = await $('//*[@id="__docusaurus"]/nav/div[1]/div[2]/div[2]/a').getHTML(false)
       console.log("innerHtml: "+innerHTML)
    });

    xit("should use assert", async () => {
       await browser.url('https://webdriver.io');

       assert(1 === 1, "1 not equal 1")
       assert(1 === "hello", "1 not equal hello")
    });

    it("should show Page Object example", async () => {
            await browser.url('https://the-internet.herokuapp.com/login');
    
            await LoginPage.setUsernameInput(123)
            await browser.pause(2000)
    
            await LoginPage.username.addValue("hello")
            await browser.pause(2000)    
    
            await LoginPage.setPasswordInput("superpassword!")
            await browser.pause(2000)    
    
            await LoginPage.clickOnLoginBtn()
        });
});

