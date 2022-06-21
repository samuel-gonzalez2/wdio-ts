import AbstractPage from "./AbstractPage";

class FeedbackPage extends AbstractPage{
    public get nameInput(){
        return $('#name');
    }
    
    public get emailInput(){
        return $('#email');
    }
    public get subjectInput(){
        return $('#subject');
    }
    public get messageInput(){
        return $('#comment');
    }
    public get submitButton(){
        return $('input[type="submit"]');
    }

    public get successMessage(){
        return $('.span6');
    }

    public async submitFeedback(name: string, email: string, subject: string, message: string){
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
        await this.subjectInput.setValue(subject);
        await this.messageInput.setValue(message);
        await this.submitButton.click();
    }

    public async assertFeedbackSuccessMessage(){
        await expect (this.successMessage).toHaveTextContaining("Thank you for your comments");
    }

}

export default new FeedbackPage();