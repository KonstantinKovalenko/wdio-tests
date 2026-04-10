class GitPage{
    
    get signUpBtn () {return $('[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    get countriesSpanBtn () {return $('#country-dropdown-panel-button')}
    get createAccountBtn () {return $('[class="js-octocaptcha-load-captcha signup-form-fields__button Button--primary Button--medium Button Button--fullWidth"]')}
    get enterpriseSpanBtn () {return $('//*[contains(text(), "Enterprise") and @class="NavDropdown-module__button__PEHWX js-details-target"]')}

    get emailInput () {return $('#email')}
    get passwordInput () {return $('#password')}
    get loginInput () {return $('#login')}
    get countriesSearchInput () {return $('#country-dropdown-panel-filter')}

    get countriesSpanTip () {return $('[data-value="UA"]')}
    get receiveCheckBox () {return $('[class="FormControl-checkbox"]')}
    get enterpriseLink () {return $('//*[contains(text(), "Enterprise platform") and @class="NavLink-module__title__Q7t0p"]')}
    get startTrialEnterpriseLink() {return $('//*[@href="https://github.com/get_started?with=enterprise&locale=en-US" and @data-ref="hero-primary-action-3ctc8Gu0mjiIhwW3nxsjNf"]')}

    get welcomeSignUpCaption () {return $('.signups-rebrand__container-content h1')}
    get welcomeEnterpriseCaption () {return $('#hero-section-brand-heading')}
    get errorsArray () {return $$('.error')}
    
    async clickOnSignUpBtn(){
        await this.signUpBtn.click()
    }

    async clickOnCountrisSpanBtn(){
        await this.countriesSpanBtn.click()
    }

    async clickOnCountriesSpanTip(){
        await this.countriesSpanTip.click()
    }

    async clickOnCreateAccountBtn(){
        await this.createAccountBtn.click()
    }

    async clickOnReceiveCheckBox(){
        await this.receiveCheckBox.click()
    }

    async clickOnEnterpriseLink(){
        await this.enterpriseLink.click()
    }

    async clickOnEnterpriseSpanBtn(){
        await this.enterpriseSpanBtn.click()
    }

    async clickOnStartTrialEnterpriseLink(){
        await this.startTrialEnterpriseLink.click()
    }

    async addEmailInputValue (value){
        await this.emailInput.addValue(value)
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

    async checkForErrors (){
        let array = await this.errorsArray
        return array.length > 0
    }
}

export default new GitPage()