import { browser, expect } from '@wdio/globals'
import GitPage from '../../pages/github/git.page'

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

        await GitPage.clickOnCountriesSpanBtn()
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

    xit("Page Object example 2", async () => {
        await browser.url('https://github.com');

        await GitPage.clickOnEnterpriseSpanBtn()
        await browser.pause(1000)
        await GitPage.clickOnEnterpriseLink()

        const captionText = await GitPage.welcomeEnterpriseCaption.getText()
        expect(captionText).toBe("The AI-powered developer platform for the agent-ready enterprise")

        await GitPage.clickOnStartTrialEnterpriseLink()
        await browser.pause(1000)
    });

    xit("Page Object example 3", async () => {
        await browser.url('https://github.com');

        await GitPage.subscribeLink.scrollIntoView()
        expect(await GitPage.subscribeLink.isClickable()).toBe(true)
        await GitPage.clickOnSubscribeLink()
        expect(await browser.getUrl()).toBe("https://github.com/newsletter")
        expect(await GitPage.welcomeSubscribeCaption.getText()).toBe('Get our developer newsletter')

        await GitPage.addEmailSubscribeInputValue("asdqweert123@gmail.com")

        await GitPage.countriesSelect.click()
        await browser.pause(1000)
        await GitPage.countriesSelect.selectByAttribute('value', 'UA')
        const value = await GitPage.countriesSelect.getValue()
        expect(value).toBe('UA')
        await GitPage.clickOnPersonalInfoCheckBox()
        await GitPage.clickOnSubscribeBtn()
    }); 

    xit("Page Object example 4", async () => {
        const searchWord = "act"
        const errors = []

        await GitPage.open()

        await GitPage.clickOnSearchBtn()
        await GitPage.addSearchInputValue(searchWord)
        await browser.pause(1000)
        await GitPage.clickOnSearchResultTip(searchWord)
       
        let searchResultArray = await GitPage.getSearchResultArray()
        for (let i = 0; i < searchResultArray.length; i++){
            const text = await searchResultArray[i].getText()                                          
            const title = text.split('\n')[0]

            if(!title.toLowerCase().includes(searchWord)){
                errors.push(`Title ${i + 1} does not contain ${searchWord}`)
            }
        }

        if (errors.length > 0){
            throw new Error('\n' + errors.join('\n'))
        }

        
    });

    it("Page Object example 5", async () => {
        await GitPage.open()

        await GitPage.clickOnPricingLink()
        expect(await GitPage.welcomePrisingCaption.getText()).toBe('Try the Copilot-powered platform')
        await GitPage.compareFeaturesLink.scrollIntoView();
        await browser.pause(1000)
        await GitPage.compareFeaturesLink.click()
        let text = await GitPage.compareFeaturesCaption.getText()
        expect(text).toBe('Compare features')
        expect(GitPage.compareFeaturesCaption).toBeDisplayedInViewport()
    });
});

//финальное задание
//1 - регистрируемся на гитхабе, проверяем есть ли надпись create your free account, 
//заполняем example12341@gmail.com, Swallowed123, Chchch123-star, ставим галочку, клацаем на регистрацию // DONE
//2 - заходим на главную, нажимаем энтерпрайз - энтерпрайз платформ
//проверяем есть ли надпись The AI-powered developer platform for the agent-ready enterprise, кликаем на старт триал // DONE
//3 - скролл инто вью на кнопку сабскрайб, проверяем кликабельность, клацаем, проверяем урл, и существование заголовка Get our developer newsletter
//вводим емэйл, кликаем по выбору страны и выбираем что заходтим, ставим галочку, потом тыцаем сабскрайб //done
//4 - поиск - клик - поиск act - нажимаем тултип и проверяем, что слово акт есть во всех тайтлах результатов, если нет - бросаем ошибку // done
//5 - клик pricing проверяем наличие Try the Copilot-powered platform, скроллим до ссылки compare all features, клацаем на неё
//проверяем есть ли заголовок на видимом экране Compare features // done
