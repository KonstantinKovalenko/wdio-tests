import { browser, expect } from '@wdio/globals'
import GitPage from './../pages/git.page'

describe('Homework for lesson 25', () => {
    xit("Page Object example 1", async () => {
        const email = "example1234561@gmail.com"
        const password = "Swallowed123Sghj@"
        const login = "Chchch123-star1"
        let errorMSG = []

        await browser.url('https://github.com');

        await GitPage.clickOnSignUpBtn()
        const captionText = await GitPage.welcomeSignUpCaption.getText()
        expect(captionText).toBe("Create your free account")

        await GitPage.addEmailInputValue(email)
        await GitPage.addPasswprdInputValue(password)
        await GitPage.addLoginInputValue(login)

        await GitPage.clickOnCountrisSpanBtn()
        await GitPage.addCountriesSearchInputValue("uk")
        await GitPage.clickOnCountriesSpanTip()
        await GitPage.clickOnReceiveCheckBox()

        await browser.pause(1000)
        if (await GitPage.checkForErrors()){
            errorMSG = await GitPage.errorsArray
            for(let i = 0; i < errorMSG.length; i++){
                console.log(await errorMSG[i].getText())
            }
        }
        else {
            await GitPage.clickOnCreateAccountBtn()
        }
    });

    it("Page Object example 2", async () => {
        await browser.url('https://github.com');

        await GitPage.clickOnEnterpriseSpanBtn()
        await browser.pause(1000)
        await GitPage.clickOnEnterpriseLink()

        const captionText = await GitPage.welcomeEnterpriseCaption.getText()
        expect(captionText).toBe("The AI-powered developer platform for the agent-ready enterprise")

        await GitPage.clickOnStartTrialEnterpriseLink()
        await browser.pause(1000)
    });

});

//финальное задание
//1 - регистрируемся на гитхабе, проверяем есть ли надпись create your free account, 
//заполняем example12341@gmail.com, Swallowed123, Chchch123-star, ставим галочку, клацаем на регистрацию // DONE
//2 - заходим на главную, нажимаем энтерпрайз - энтерпрайз платформ
//проверяем есть ли надпись The AI-powered developer platform for the agent-ready enterprise, кликаем на старт триал // DONE

//3 - скролл инто вью на кнопку сабскрайб, проверяем кликабельность, клацаем, проверяем урл, и существование заголовка Get our developer newsletter
//вводим емэйл, кликаем по выбору страны и выбираем что заходтим, ставим галочку, потом тыцаем сабскрайб и проверяем что есть текст
//4 - поиск - клик - поиск act - нажимаем тултип и проверяем, что слово акт есть в одном из результатов
//5 - клик pricing проверяем наличие Try the Copilot-powered platform, скроллим до ссылки compare all features, клацаем на неё
//проверяем есть ли заголовок на видимом экране Compare features
