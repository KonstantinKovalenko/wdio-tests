import fs from 'fs'                                                  // для работы с файлами на пк

describe.skip('Save cookies', () => {
    it('should save cookies after login', async () => {
        await browser.url('https://github.com')

        await browser.pause(30000) // 30 секунд на логин ВРУЧНУЮ!
        const cookies = await browser.getCookies()
        fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2))            //создаём файл и записываем в его куки
        console.log('Cookies saved!')
    })
})