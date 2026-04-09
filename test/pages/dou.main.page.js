class DouMainPage{

    get forumBtn () {return $('a[href="https://dou.ua/forums/"]')}
    get bandBtn () {return $('a[href="https://dou.ua/lenta/"]')}
    get salariesBtn () {return $('a[href="https://jobs.dou.ua/salaries/"]')}
    get workBtn () {return $('a[href="https://jobs.dou.ua/"]')}
    get searchBtn () {return $('[class="dui-button btn-search"]')}
    get searchInput () {return $('.txtGlobalSearch')}
    get gameDevBtn () {return $('.menu-site__gamedev')}
    get relocateBtn () {return $('.menu-site__relocate')}
    get quarterResult () {return $('#q1 h4')}
    get fastRelocate () {return $('.example')}

    async clickOnForumBtn(){
        await this.forumBtn.click()
    }

    async clickOnBandBtn(){
        await this.bandBtn.click()
    }

    async clickOnGameDevBtn(){
        await this.gameDevBtn.click()
    }

    async clickOnWorkBtn(){
        await this.workBtn.click()
    }

    async clickOnSearchBtn(){
        await this.searchBtn.click()
    }

    async clickOnSalariesBtn(){
        await this.salariesBtn.click()
    }

    async setSearchInputValue(value){
        await this.searchInput.addValue(value)
    }
}

export default new DouMainPage()