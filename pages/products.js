import { By, until, WebDriver } from "selenium-webdriver";

class ProductsPage {
    constructor(driver) {
        /** @type {WebDriver} */
        this.driver = driver;
        this.productPageTitle = By.css(".title");
        this.productTitle = By.className("inventory_item_name");
        this.addToCartButtonForFirstProduct = By.id('add-to-cart-sauce-labs-backpack');
        this.addToCartButtonForSecondProduct = By.id('add-to-cart-sauce-labs-bike-light');
        this.badgeCartIcon = By.css("span[data-test='shopping-cart-badge']");
        this.cartIcon = By.xpath("//div[@id='shopping_cart_container']//a[contains(@class, 'shopping_cart_link')]");
        this.mainMenuIcon = By.id('react-burger-menu-btn');
        this.logoutLink = By.id('logout_sidebar_link');
    }

    async getProductPageTitle() {
        let productPageText = await this.driver.wait(until.elementLocated(this.productPageTitle), 5000);
        return await productPageText.getText();
    }

    async addFirstProductToCart() {
        await this.driver.findElement(this.addToCartButtonForFirstProduct).click();
    }

    async addSecondProductToCart() {
        await this.driver.findElement(this.addToCartButtonForSecondProduct).click();
    }

    async getBadgeCartIcon() {
        let badgeIconNum = await this.driver.findElement(this.badgeCartIcon);
        return await badgeIconNum.getText();
    }

    async goToCart() {
        let cart = await this.driver.findElement(this.cartIcon);
        return await cart.click();
    }

    async goToMainMenu() {
        let mainMenu = await this.driver.findElement(this.mainMenuIcon);
        return await mainMenu.click();
    }

    async goToLogout() {
        let logout = await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.logoutLink)), 5000);
        return await logout.click();
    }

}

export { ProductsPage } ;