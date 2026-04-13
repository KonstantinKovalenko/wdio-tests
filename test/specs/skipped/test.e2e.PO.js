import DouMainPage from "../../pages/dou/dou.main.page.js"
import GameDevPage from "../../pages/dou/dou.gamedev.page.js"
import GameDevTopRatesPage from "../../pages/dou/dou.gamedev.toprates.page.js"

describe('Webdriverio main page', () => {

    xit("should show Page Object examples", async () => {
        await browser.url('https://dou.ua');

        await DouMainPage.clickOnForumBtn()
        await browser.pause(2000)

        await DouMainPage.clickOnBandBtn()
        await browser.pause(2000)    

        await DouMainPage.clickOnGameDevBtn()
        await browser.pause(2000)    

        expect(GameDevPage.companyGameDevsRateLink).toBeClickable()

        await GameDevPage.clickOnTopGamesRateLink()

        expect(GameDevTopRatesPage.title).toHaveValue("Матеріали на тему «ігри місяця»")
    });
});

