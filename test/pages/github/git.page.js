class GitPage{
    
    get signUpBtn () {return $('[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    get countriesSpanBtn () {return $('#country-dropdown-panel-button')}
    get createAccountBtn () {return $('[class="js-octocaptcha-load-captcha signup-form-fields__button Button--primary Button--medium Button Button--fullWidth"]')}
    get enterpriseSpanBtn () {return $('//*[contains(text(), "Enterprise") and @class="NavDropdown-module__button__PEHWX js-details-target"]')}
    get countriesSelect () {return $('#form-field-country')}
    get subscribeBtn () {return $('[class="Primer_Brand__Button-module__Button___lDruK Primer_Brand__Button-module__Button--primary___xIC7G Primer_Brand__Button-module__Button--size-medium___EyCyw"]')}
    get searchBtn () {return $('/html/body/div[1]/div[4]/header/div/div[2]/div/div/qbsearch-input/div[1]/button')}

    get emailInput () {return $('#email')}
    get passwordInput () {return $('#password')}
    get loginInput () {return $('#login')}
    get countriesSearchInput () {return $('#country-dropdown-panel-filter')}
    get emailSubscribeInput () {return $('#form-field-emailAddress')}
    get searchInput () {return $('#query-builder-test')}

    get countriesSpanTip () {return $('[data-value="UA"]')}
    get receiveCheckBox () {return $('[class="FormControl-checkbox"]')}
    get personalInfoCheckBox () {return $('[class="Primer_Brand__Checkbox-module__Checkbox-checkmark___atiwt"]')}
    get enterpriseLink () {return $('//*[contains(text(), "Enterprise platform") and @class="NavLink-module__title__Q7t0p"]')}
    get startTrialEnterpriseLink() {return $('//*[@href="https://github.com/get_started?with=enterprise&locale=en-US" and @data-ref="hero-primary-action-3ctc8Gu0mjiIhwW3nxsjNf"]')}
    get subscribeLink () {return $('[class="btn-mktg tmp-mb-4 btn-muted-mktg"]')}

    get welcomeSignUpCaption () {return $('.signups-rebrand__container-content h1')}
    get welcomeEnterpriseCaption () {return $('#hero-section-brand-heading')}
    get welcomeSubscribeCaption () {return $('[class="Primer_Brand__Heading-module__Heading___IVpmp Primer_Brand__Heading-module__Heading-font--mona-sans___SCnTx Primer_Brand__Heading-module__Heading--3___wsITu Primer_Brand__Heading-module__Heading--textWrap-balance___AOKvC tmp-mb-4 ContactSalesTemplate-module__heading__HSt5u"]')}
    get #searchTipsArray () {return $$('[class="ActionListItem-label text-normal"]')}
    get #searchResultsArray () {return $$('[class="Result-module__Result__Up5vk"]')}
    get errorsArray () {return $$('.error')}
    
    async open(){
        await browser.url('https://github.com/')
    }

    async clickOnSignUpBtn(){
        await this.signUpBtn.click()
    }

    async clickOnCountriesSpanBtn(){
        await this.countriesSpanBtn.click()
    }

    async clickOnCountriesSpanTip(){
        await this.countriesSpanTip.click()
    }

    async clickOnCreateAccountBtn(){
        await this.createAccountBtn.click()
    }

    async clickOnEnterpriseSpanBtn(){
        await this.enterpriseSpanBtn.click()
    }

    async clickOnSubscribeBtn(){
        await this.subscribeBtn.click()
    }

    async clickOnSearchBtn(){
        await this.searchBtn.click()
    }

    async clickOnReceiveCheckBox(){
        await this.receiveCheckBox.click()
    }

    async clickOnPersonalInfoCheckBox(){
        await this.personalInfoCheckBox.click()
    }

    async clickOnEnterpriseLink(){
        await this.enterpriseLink.click()
    }

    async clickOnSubscribeLink(){
        await this.subscribeLink.click()
    }
    
    async clickOnStartTrialEnterpriseLink(){
        await this.startTrialEnterpriseLink.click()
    }

    async addEmailInputValue (value){
        await this.emailInput.addValue(value)
    }

    async addEmailSubscribeInputValue (value){
        await this.emailSubscribeInput.addValue(value)
    }

    async addPasswprdInputValue (value){
        await this.passwordInput.addValue(value)
    }

    async addLoginInputValue (value){
        await this.loginInput.addValue(value)
    }

    async addCountriesSearchInputValue (value){
        await this.countriesSearchInput.addValue(value)
    }

    async addSearchInputValue (value){
        await this.searchInput.addValue(value)
    }

    async clickOnSearchResultTip(value){
        let array = await this.#searchTipsArray
        for (let i = 0; i < array.length; i++){
                const text = await array[i].getText()
                if(text === value){
                    await array[i].click() 
                    return
                }
        }
    }

    async getSearchResultArray (){
        let array = await this.#searchResultsArray
        return array
    }

    async checkForErrors (){
        let array = await this.errorsArray
        return array.length > 0
    }
}

export default new GitPage()