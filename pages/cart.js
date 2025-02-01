import { By, until, WebDriver } from "selenium-webdriver";

class CartPage {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.PageTitle = By.css("span[data-test='title']"); //Ovaj atribut/varijabla se koristi za sve naslove stranica (u nasem slucaju za: You Cart page, Checkout: Your Information, Checkout i Checkout: Overview naslove stranica)
        this.firstProductTitle = By.id('item_4_title_link');
        this.secondProductTitle = By.id('item_0_title_link');
        this.checkoutButton = By.id("checkout");
        this.firstNameField = By.id('first-name');
        this.lastNameField = By.id('last-name');
        this.postalCodeField = By.id('postal-code');
        this.continueButton = By.id("continue");
        this.finishButton = By.id("finish");
    }

    async getYourCartPageTitle() {
        let yourCartPageText = await this.driver.wait(until.elementLocated(this.PageTitle), 5000);
        return await yourCartPageText.getText();
    }

    async getFirstProductTitle() {
        let firstProductText = await this.driver.wait(until.elementLocated(this.firstProductTitle), 5000);
        return await firstProductText.getText();
    }

    async getSecondProductTitle() {
        let secondProductText = await this.driver.wait(until.elementLocated(this.secondProductTitle), 5000);
        return await secondProductText.getText();
    }
    
    async proceedToCheckout() {
        await this.driver.findElement(this.checkoutButton).click();
    }

    async getCheckoutPageTitle() {
        let checkoutPageText = await this.driver.wait(until.elementLocated(this.PageTitle), 5000);
        return await checkoutPageText.getText();
    }

    async fillInFirstNameField(firstname) {
        let fnField = await this.driver.wait(until.elementLocated(this.firstNameField), 5000);
        await fnField.click();
        await fnField.clear();
        await fnField.sendKeys(firstname);
    }

    async fillInLastNameField(lastname) {
        let lnField = this.driver.findElement(this.lastNameField);
        await lnField.click();
        await lnField.clear();
        await lnField.sendKeys(lastname);
    }

    async fillInPostalCodeField(postalcode) {
        let zipCodeField = this.driver.findElement(this.postalCodeField);
        await zipCodeField.click();
        await zipCodeField.clear();
        await zipCodeField.sendKeys(postalcode);
    }

    async proceedToContinue() {
        let continueButton = this.driver.findElement(this.continueButton);
        await continueButton.click();
    }

    async login(firstname,lastname,postalcode) {
        await this.fillInFirstNameField(firstname);
        await this.fillInLastNameField(lastname);
        await this.fillInPostalCodeField(postalcode);
        await this.proceedToContinue();
    }

    async getCheckoutOverviewPageTitle() {
        let checkoutOverviewTitle = await this.driver.wait(until.elementLocated(this.PageTitle), 5000);
        return await checkoutOverviewTitle.getText();
    }

    async proceedToFinish() {
        let clickFinish = this.driver.findElement(this.finishButton);
        await clickFinish.click();
    }

    async getCheckoutCompletePageTitle() {
        let checkoutComplete = await this.driver.wait(until.elementLocated(this.PageTitle), 5000);
        return await checkoutComplete.getText();
    }
}

export { CartPage } ;