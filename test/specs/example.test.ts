import HomePage from '../pageobjects/HomePage';
import LoginPage from '../pageobjects/LoginPage';

describe('First Test Using Page Objects Pattern', () => {
    it('should should load homepage', async () => {
        await HomePage.visit();
        await HomePage.clickSignInButton();

        await LoginPage.assertLoginPageIsVisible();
        await LoginPage.login('username', 'password');
        
        await browser.pause(4000);
    })
})