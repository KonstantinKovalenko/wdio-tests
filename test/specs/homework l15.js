import { browser, expect } from '@wdio/globals'

describe.skip('Homework for repeating already learned l15', () => {
    it("Selectors", async () => {
        await browser.url('https://dou.ua');

        const top1 = await $('[href="https://jobs.dou.ua/first-job/?from=doufp"]')                                  // attribute 
        let top1Text = await top1.getText()
        console.log("1st link text is: " + top1Text)

        const top2 = await $('//*[contains(text(), "Топ")]')                                                        //x-path contains text
        let top2Text = await top2.getText()
        console.log("2nd link text is: " + top2Text)

        const topInfoClose = await $('#topinfo-close')                                                              // id unique
        let isClickable = await topInfoClose.isClickable()
        console.log("Is top info closable?: " + isClickable)
        await browser.pause(2000)
        await topInfoClose.click()
        await browser.pause(2000)

        const bank = await $('//*[@alt="UKRSIBTECH" and @class="img"]')                                             //x-path by 2 attributes
        let attr = await bank.getAttribute('src')
        console.log("Src attribute is: " + attr)

        const iComm = await $('.b-index-communities-wrap')                                                          //class with no whitespace
        let isEnabled = await iComm.isEnabled()
        console.log("Is index communities wrap enabled?: " + isEnabled)
    });

});

//работаем с селекторами