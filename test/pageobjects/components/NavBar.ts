import AbstractPage from "../AbstractPage";

class NavBar extends AbstractPage {
    public get signInButton(){
        return $('#signin_button');
    }

    public async clickSignInButton(){
        await this.signInButton.click();
    }
}

export default new NavBar();