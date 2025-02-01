import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { Login } from "../pages/login.js"
import { ProductsPage } from "../pages/products.js"
import { CartPage } from "../pages/cart.js"

describe("Purchase Test", function () {
    /** @type {WebDriver} */
    let driver;
    let loginPage;
    let productsPage;
    let cartPage;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        loginPage = new Login(driver);
        productsPage = new ProductsPage(driver);
        cartPage = new CartPage(driver);
        await driver.get('https://www.saucedemo.com');
        await driver.manage().window().maximize();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it("Test 3 - Kupovina proizvoda", async function () {
        
        // Logiranje sa ispravnim kredencijalima
        await loginPage.login("standard_user", "secret_sauce");

        // Verifikacija da se nalazimo na Product stranici
        let productPageText = await productsPage.getProductPageTitle();
        expect(productPageText).to.equal("Products");

        // Dodavanje dva produkta u korpu
        await productsPage.addFirstProductToCart();
        await productsPage.addSecondProductToCart();

        // Verifikacija da se pojavio bedz sa brojem dodanih artikala na korpa ikonici
        let badgeIconNumber = await productsPage.getBadgeCartIcon();
        expect(badgeIconNumber).to.equal("2");
        
        // Idi na Korpu
        await productsPage.goToCart();

        // Verifikacija da se nalazimo na Your Cart stranici
        let cartPageText = await cartPage.getYourCartPageTitle();
        expect(cartPageText).to.equal("Your Cart");

        // Verifikacija prvog dodanog produkta u korpi
        let firstAddedProductInCart = await cartPage.getFirstProductTitle();
        expect(firstAddedProductInCart).to.equal("Sauce Labs Backpack");

         // Verifikacija drugog dodanog produkta u korpi
         let secondAddedProductInCart = await cartPage.getSecondProductTitle();
         expect(secondAddedProductInCart).to.equal("Sauce Labs Bike Light");

        // Klik na checkout
        await cartPage.proceedToCheckout();

        // Verifikacija da se nalazimo na Checkout stranici
        let checkoutPage = await cartPage.getCheckoutPageTitle();
        expect(checkoutPage).to.equal("Checkout: Your Information");
        // Dodatna provjera da smo na ispravnoj stranici
        expect(await driver.getCurrentUrl()).to.include("/checkout-step-one.html");

         // Unos podataka za logiranje i klik na Continue dugme
        await cartPage.login("Elma","Vrebac-Pasic","71000");

        // Verifikacija da se nalazimo na Checkout Overview stranici
        let chkOverviewPageText = await cartPage.getCheckoutOverviewPageTitle();
        expect(chkOverviewPageText).to.equal("Checkout: Overview");

         // Verifikacija prvog dodanog produkta u korpi
         let firstProductIsVisibleOnCheckoutOverviewPage = await cartPage.getFirstProductTitle();
         expect(firstProductIsVisibleOnCheckoutOverviewPage).to.equal("Sauce Labs Backpack");
 
          // Verifikacija drugog dodanog produkta u korpi
          let secondProductIsVisibleOnCheckoutOverviewPage = await cartPage.getSecondProductTitle();
          expect(secondProductIsVisibleOnCheckoutOverviewPage).to.equal("Sauce Labs Bike Light");

        // Klik na finish
        await cartPage.proceedToFinish();

        // Verifikacija da se nalazimo na Checkout Commplete stranici
        let chkCompletePageText = await cartPage.getCheckoutCompletePageTitle();
        expect(chkCompletePageText).to.equal("Checkout: Complete!");

        // Klik na Main menu
        await productsPage.goToMainMenu();

        // Klik na Logout
        await productsPage.goToLogout();

        // Verifikacija da se nalazimo na Login stranici
        let loginLogo = await loginPage.getLoginLogo();
        expect(loginLogo).to.equal("Swag Labs");
    });
});