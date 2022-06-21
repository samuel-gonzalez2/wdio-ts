import AbstractPage from "./AbstractPage";

class HomePage extends AbstractPage{
    //Here Selectors
    public get feedbackLink(){
        return $('#feedback');
    }

    //Here Functions
    public async visit(){
        await browser.url('http://zero.webappsecurity.com/');
    }

    public async clickFeedbackLink(){
        await this.feedbackLink.click();
    }
}

export default new HomePage();