import { browser, expect } from '@wdio/globals'
import { log } from 'console';
import { subscribe } from 'diagnostics_channel';
import fs from 'fs'

describe('Homework for test-cases l19', () => {
    xit("Test-case 1", async () => {
        await browser.url('https://github.com/');

        let resourceButton = await $('//*[contains(text(), "Resources") and @class="NavDropdown-module__button__PEHWX js-details-target"]')
        await resourceButton.click()
        let aiButton = await $('//*[contains(text(), "AI") and @class="NavLink-module__title__Q7t0p"]')
        await aiButton.moveTo()
        await browser.pause(1000)
        await aiButton.click()

        let checkURL = await browser.getUrl()
        expect(checkURL).toBe("https://github.com/resources/articles?topic=ai")

        let logoButton = await $('//*[@class="octicon octicon-mark-github"]')
        await logoButton.click()

        await browser.pause(1000)
        checkURL = await browser.getUrl()
        expect(checkURL).toBe("https://github.com/")
    });

    xit("Test-case 2", async () => {
        await browser.url('https://github.com/');

        let emailInputText = await $('#hero_user_email')
        await emailInputText.setValue("itams.ua.starlink4@gmail.com")
        await browser.pause(1000)
        
        const sifghButton = await $('#FormControl--_R_2da5b_ > div > button')
        await sifghButton.click()

        await browser.pause(1000)
        let currentURl = await browser.getUrl()
        expect(currentURl).toContain('&user_email=itams.ua.starlink4')

        let regEmailInputText = await $('#email')
        let expectedEmail = await regEmailInputText.getValue()
        expect(expectedEmail).toBe('itams.ua.starlink4@gmail.com')
    });

    xit('Test-case 3', async () => {
        const cookies = JSON.parse(fs.readFileSync('./cookies.json'))
        await browser.url('https://github.com')

        for (const cookie of cookies) {
            const { name, value, domain, path, secure, httpOnly, expiry } = cookie
            await browser.setCookies({ name, value, domain, path, secure, httpOnly, expiry })
        }

        await browser.refresh()

        const loginPicButton = await $('[class="GlobalNavUserMenu-module__container__NaVIt"]')
        await loginPicButton.moveTo()
        await browser.pause(1000)
        await loginPicButton.click()
        const logoutButton = await $('[href="/logout"]')
        await logoutButton.moveTo()
        await browser.pause(1000)
        await logoutButton.click()
        await browser.pause(1000)
    })

    xit("Test-case 4", async () => {
        await browser.url('https://github.com/');

        const signInButton = await $('body > div.logged-out.env-production.page-responsive.header-overlay.header-overlay-fixed.js-header-overlay-fixed > div.position-relative.header-wrapper.js-header-wrapper > header > div > div.HeaderMenu.js-header-menu.height-fit.position-lg-relative.d-lg-flex.flex-column.flex-auto.top-0 > div > div > div > a')
        await signInButton.moveTo()
        await browser.pause(1000)
        await signInButton.click()

        let loginField = await $('#login_field')
        let isEnabled = await loginField.isEnabled()
        console.log("Is login field is enabled?: " + isEnabled)

        await loginField.setValue("SELECT * FROM Users WHERE Username='$username' AND Password='$password'")
        await browser.pause(1000)

        let passField = await $('#password')
        await passField.setValue('Gasdas1')
        await browser.pause(1000)

        const siButton = await $('[name="commit"]')
        await siButton.click()
        let errLabel = await $('.js-flash-alert')
        const errText = await errLabel.getText()
        await browser.pause(1000)
        expect(errText).toBe('Incorrect username or password.')
    });

    xit("Test-case 5", async () => {
        await browser.url('https://github.com/');

        const suButton = await $ ('/html/body/div[1]/div[4]/header/div/div[2]/div/div/a')                            // x-path, weak locator?
        await browser.pause(1000)
        await suButton.click()

        let emailInputText = await $('#email')
        await emailInputText.setValue('asdasd123gmail.com')
        await browser.pause(1000)

        const createAccButton = await $('#signup-form > form > div:nth-child(7) > button')
        await createAccButton.click()
        await browser.pause(1000)

        let errLabel = await $('[class="mb-0"]')
        const errText = await errLabel.getText()
        expect(errText).toBe('Email is invalid or already taken')
    });

    xit("Test-case 6", async () => {
        await browser.url('https://github.com/');
        const searchWord = "cat"
        const errors = []
        const resultsClass = '[class="Result-module__Result__Up5vk"]'

        const searchButton = await $ ('/html/body/div[1]/div[4]/header/div/div[2]/div/div/qbsearch-input/div[1]/button')
        await browser.pause(1000)
        await searchButton.click()

        let searchInputText = await $('#query-builder-test')
        
        await searchInputText.setValue(searchWord)
        await browser.pause(1000)
        await browser.keys("Enter")                                 
        
        let currentURl = await browser.getUrl()
        expect(currentURl).toContain(searchWord)
        await browser.pause(1000)

        await browser.waitUntil(async () => {
            return (await $$(resultsClass)).length > 0
        }, { timeout: 5000 })

        const results = await $$(resultsClass)
        for (let i = 0; i < results.length; i++){
            const text = await results[i].getText()                                          
            const title = text.split('\n')[0]

            if(!title.toLowerCase().includes(searchWord)){
                errors.push(`Title ${i + 1} does not contain ${searchWord}`)
            }
        }

        if (errors.length > 0){
            throw new Error('\n' + errors.join('\n'))
        }
    });
});

//работаем с тест кейсами
//5 рандомных тест-кейсов по сайту гитхаб и создать по ним автотесты
//1 - работоспособность любой ссылки, затем клик на лого и возврат на главную страницу // positive  // done
//2 - "sign up for github" с корректным мылом + проверка введения его в урл + проверка перехода на страницу регистрации + автозаполнение // positive // done
//3 - sign in через гугл апи //smoke positive в итоге пришлось обманывать апи (вручную зашёл, сохранин куки через saveCookies.js и залогинился таким образом) // done?
//4 - простейшая sql инъекция SELECT * FROM Users WHERE Username='$username' AND Password='$password' // non-functional security negative // done
//5 - sign up с некорректным мылом // negative // done

//6(свой) - создать тест кейс с использованием поиска и проверки выданного контента + проверочное слово должно содержаться в урл // done