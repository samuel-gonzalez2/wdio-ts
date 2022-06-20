class HomePage{
    //Here Selectors
    public get signInButton(){
        return $('#signin_button');
    }
    //Here Functions
    public async visit(){
        await browser.url('http://zero.webappsecurity.com/');
    }

    public async clickSignInButton(){
        await this.signInButton.click();
    }
}

export default new HomePage();