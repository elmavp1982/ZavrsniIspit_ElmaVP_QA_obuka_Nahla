import { By, until, WebDriver } from "selenium-webdriver";

class Login {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.loginButton = By.id("login-button"); //Login dugme na Home stranici
        this.usernameField = By.id('user-name'); //Username polje na Home stranici
        this.passwordField = By.id('password'); //Password polje na Home stranici
        this.errorIconForUsername = By.css("#user-name + svg");  //Ikonica X kod polja Username
        this.errorIconForPassword = By.css("#password + svg");  //Ikonica X kod polja Password
        this.errorMessage = By.css("h3[data-test='error']");  //Poruka ispod Password polja
        this.errorMessageIcon = By.css(".error-button"); //Ikonica X kod poruke o gresci
        this.loginLogo = By.css(".login_logo"); //Logo na Home stranici
    }

    async clickLogin() {
        let button = await this.driver.wait(until.elementLocated(this.loginButton), 5000)
        await button.click();
    }

    async isErrorIconUsernameDisplayed() {
        let usernameErrorIcon = await this.driver.wait(until.elementLocated(this.errorIconForUsername), 7000)
        return await usernameErrorIcon.isDisplayed();
    }

    async isErrorIconPasswordDisplayed() {
        let passwordErrorIcon = await this.driver.wait(until.elementLocated(this.errorIconForPassword), 7000)
        return await passwordErrorIcon.isDisplayed();
    }

    async getErrorMessage() {
        let errorMessageText = await this.driver.wait(until.elementLocated(this.errorMessage), 5000);
        return await errorMessageText.getText();
    }

    async clickErrorMessageIcon() {
        let errorMessageIcon = await this.driver.wait(until.elementLocated(this.errorMessageIcon), 5000)
        await errorMessageIcon.click();
    }

    async isErrorMessageUnvisible() {
        try{
            await this.driver.wait(until.stalenessOf(await this.driver.findElement(this.errorMessage)), 5000);
            let isErrorMessagePresent = await this.driver.findElements(this.errorMessage);
            return isErrorMessagePresent.length === 0; // Vraća true ako je nestao
        }        
        catch (error) {
            return true; // Ako element nikad ne postoji, smatra se nestalim
        }
    }

    async fillInUsernameField(username) {
        let usernameField = await this.driver.wait(until.elementLocated(this.usernameField), 10000);
        await this.driver.wait(until.elementIsVisible(usernameField));
        await usernameField.click();
        await usernameField.clear();
        await usernameField.sendKeys(username);
    }

    async fillInPasswordField(password) {
        let passwordField = this.driver.findElement(this.passwordField);
        await passwordField.click();
        await passwordField.clear();
        await passwordField.sendKeys(password);
    }

    async submitLoginForm() {
        let loginButton = this.driver.findElement(this.loginButton);
        await loginButton.click();
    }

    async login(username, password) {
        await this.fillInUsernameField(username);
        await this.fillInPasswordField(password);
        await this.submitLoginForm();
    }

    async getLoginLogo() {
        let logo = await this.driver.wait(until.elementLocated(this.loginLogo), 5000);
        return await logo.getText();
    }
}

export { Login };
