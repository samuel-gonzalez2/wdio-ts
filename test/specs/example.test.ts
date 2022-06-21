import HomePage from '../pageobjects/HomePage';
import LoginPage from '../pageobjects/LoginPage';
import FeedbackPage from '../pageobjects/FeedbackPage';

import NavBar from '../pageobjects/components/NavBar';

describe('First Test Using Page Objects Pattern', () => {
    it('should should load homepage', async () => {
        await HomePage.visit();

        await NavBar.clickSignInButton();

        await LoginPage.assertLoginPageIsVisible();
        await LoginPage.login('invalid-username', 'invalid-password');
        await LoginPage.assertErrorMessageIsVisible();  
    })
})

describe.only ('FeedBack Test', () => {
    it('should should load feedback page', async () => {
        await HomePage.visit();
        await HomePage.clickFeedbackLink();

        await FeedbackPage.submitFeedback('John', 'Doe@doe.com', 'Subject', 'Message');
        await FeedbackPage.assertFeedbackSuccessMessage();

        await FeedbackPage.waitForSeconds(2);
    })
})