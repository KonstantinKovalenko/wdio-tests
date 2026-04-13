import { browser, expect } from '@wdio/globals'

describe.skip('Homework for repeating already learned', () => {
    xit("should confirm browser url", async () => {
        await browser.url('https://webdriver.io/docs/api');

        const bUrl = await browser.getUrl();
        console.log(bUrl);
            
        expect(bUrl).toBe('https://webdriver.io/docs/api/')
    });

    it.only("should check for Heading", async () => {
        await browser.url('https://webdriver.io/docs/api/');

        //let heading = await $('#__docusaurus_skipToContent_fallback > div > div > main > div > div > div.col.docItemCol_RPnv > div > article > div.theme-doc-markdown.markdown').$('h1')      //parent
        let heading = await $('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div[1]/div/article/div[2]/header/h1')      //x-path
        let hText = await heading.getText()                             
        console.log(hText);

        expect(await heading.isExisting())
        expect(hText).toBe('Introduction')
    });

    it.skip("should check for breadcrumbs", async () => {
        await browser.url('https://webdriver.io/docs/api/');

        let bCrumbs = await $('#__docusaurus_skipToContent_fallback > div > div > main > div > div > div.col.docItemCol_RPnv > div > article > nav > ul > li.breadcrumbs__item.breadcrumbs__item--active > span')
        let bcText = await bCrumbs.getText()
        console.log(bcText);

        expect(await bCrumbs.isExisting())
        expect(bcText).toBe('Introduction')
    });

    it("should check for existing link", async () => {
        await browser.url('https://webdriver.io/docs/api/');

        let wdLink = await $('#__docusaurus_skipToContent_fallback > div > div > main > div > div > div.col.docItemCol_RPnv > div > article > div.theme-doc-markdown.markdown > p:nth-child(2) > a:nth-child(1)')
        console.log(await wdLink.getAttribute('href'));

        expect(await wdLink.getAttribute('href')).toBe('/docs/api/webdriver')
    });

    it("should work with search", async () => {
        await browser.url('https://webdriver.io/docs/api/');

        let search = await $('#__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-right.navbar__items.navbar__items--right > div.navbarSearchContainer_JPJR > button > span.DocSearch-Button-Container > span')
        await browser.pause(2000)
        await search.click()
        await browser.pause(2000)

        let activeSearch = await $('#docsearch-input')
        await browser.pause(1000)
        await activeSearch.addValue("all is done")
        await browser.pause(4000)
        //await activeSearch.setValue("")                                                                      // for noobs ^^
        let clearText = await $('body > div:nth-child(1) > div > div > header > form > button > svg > path')
        await clearText.click()
    });

    it("should work with language change", async () => {
        await browser.url('https://webdriver.io/docs/api/');

        let language = await $('#__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-right.navbar__items.navbar__items--right > div:nth-child(2) > a')
        await browser.pause(2000)
        await language.moveTo()
        await browser.pause(2000)

        let uaLanguage = await $('#__docusaurus > nav > div.navbar__inner > div.theme-layout-navbar-right.navbar__items.navbar__items--right > div:nth-child(2) > ul > li:nth-child(14) > a')
        await browser.pause(1000)
        await uaLanguage.moveTo()
        await browser.pause(2000)
        await uaLanguage.click()
        await browser.pause(4000)

        let b = await browser.getUrl();
        expect(b).toBe("https://webdriver.io/uk/docs/api/")
    });
});

//проверить что урл https://webdriver.io/docs/api/ // done
//проверить что есть заголовок h1 Introduction     //done
//проверить что breadcrumbs тоже Introduction      //done
//проверить что ссылка вебрайвер имеет ссылку которая высвечивается с левого края экрана <a class="" href="/docs/api/webdriver">WebDriver</a> // done
//далее нажимаем на search и вбиваем туда all is done и потом удалили этот текст // done
//своё: меняем английский язык на странцие на украинский и ждём //done