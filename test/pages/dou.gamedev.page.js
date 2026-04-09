class GameDevPage{

    get companyGameDevsRateLink () {return $('//*[text()="Топ-25 компаній"]')}
    get topGamesRateLink () {return $('//*[text()="Ігри місяця"]')}
    get newsBlock () {return $('[class="b-block b-block_news"]')}
    get blogsBlock () {return $('[class="b-index-columnisty b-block"]')}
    get forumPopularBlock () {return $('[class="b-block b-index-forum"]')}
    
     async clickOnTopGamesRateLink(){
        await this.topGamesRateLink.click()
    }
}

export default new GameDevPage()