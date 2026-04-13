import { browser, expect } from '@wdio/globals'
import DouMainPage from '../../pages/dou/dou.main.page';
import GamedevPage from '../../pages/dou/dou.gamedev.page';

describe.skip('Homework for lesson 23', () => {
    it("Page Object examples", async () => {
        await browser.url('https://dou.ua/');

        await browser.pause(1000)
        await DouMainPage.clickOnSalariesBtn()
        expect(DouMainPage.quarterResult).toHaveValue("Квартиль")

        await DouMainPage.clickOnWorkBtn()
        await browser.pause(1000)
        await browser.waitUntil(async () =>{return DouMainPage.searchBtn.isDisplayed();},5000, "Button is not displayed")
        await DouMainPage.clickOnSearchBtn()
        await browser.waitUntil(async () =>{return DouMainPage.fastRelocate.isDisplayed();},5000, "Fast relocate block is not displayed")

        await browser.pause(1000)
        await DouMainPage.clickOnGameDevBtn()
        await browser.waitUntil(async () =>{return GamedevPage.newsBlock.isDisplayed();},5000, "News block is not displayed")
        await browser.waitUntil(async () =>{return GamedevPage.blogsBlock.isDisplayed();},5000, "Blogs block is not displayed")
        await browser.waitUntil(async () =>{return GamedevPage.forumPopularBlock.isDisplayed();},5000, "Forum popular block is not displayed")
    });

});

//работаем с Page Object
//заходим на доу, зарплаты, проверить что написано квартиль // done
//потом переходим на работа, проверить что кнопка знайти видна и клацнуть на неё, проверить появились ли ссылочки быстрого перехода  // done
//потом переходим на геймдев, проверяем что там есть секция новини, блоги, популярне на форумі, // done
