import { browser, expect } from '@wdio/globals'

describe.skip('Homework for repeating already learned l13', () => {
    it("should use learned", async () => {
        await browser.url('https://webdriver.io');

        const buttonAPI = await $('a.navbar__link[href="/docs/api"]')
        await buttonAPI.click()    
        await browser.pause(2000)

        const linkBlog = await $('#__docusaurus > footer > div > div.row.footer__links > div:nth-child(3) > ul > li:nth-child(1) > a')
        await browser.pause(2000)
        await linkBlog.scrollIntoView()
        let isDisplayed = await linkBlog.isDisplayed()
        console.log("Is blog link displayed?:" + isDisplayed);
        await browser.pause(2000)
        
        const linkPCommands = await $('#__docusaurus_skipToContent_fallback > div > div > main > div > div > div.col.docItemCol_RPnv > div > nav > a > div.pagination-nav__label')
        let isEnabled = await linkPCommands.isEnabled()
        let isClickable = await linkPCommands.isClickable()
        console.log("Is Protocol Commands link visible?:" + isEnabled);
        console.log("Is Protocol Commands link clickable?:" + isClickable);
        await browser.pause(2000)
        await linkPCommands.click()

        await browser.waitUntil(async () =>{
        return $('#webdriver-protocol').isDisplayed();},5000, "Header is not displayed")
        console.log("done")
        
    });

});

//заходим на основную страницу, переходим на страницу апи, скролим вниз и проверяем blog ссылку, что она дисплейед  //done
//проверяем кнопку протокол коммандс что она из визибл из кликбл и возьмём её html потом клацаем на неё             //done
//ждём вейт антил на заголовок WebDriverProtocol и проверяем что он появляется                                      //done