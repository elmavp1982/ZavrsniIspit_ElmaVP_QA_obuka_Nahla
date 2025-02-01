import { Browser, Builder, WebDriver } from "selenium-webdriver";
import { expect } from "chai";
import { Login } from "../pages/login.js"


describe("Login Tests", function () {
  //Ovaj ispod komentar je za dodatak IntelliSense-a
  /** @type {WebDriver} */
  let driver;
  let loginPage;

  beforeEach(async function () {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    loginPage = new Login(driver);
    await driver.get('https://www.saucedemo.com');
    await driver.manage().window().maximize();
  });

  afterEach(async function () {
    await driver.quit();
  });

  it('Test 1 - Prijava bez unosa kredencijala', async function () {
    
    // Klik na Login button, bez unosa kredencijala
    await loginPage.clickLogin();

    // Verifikacija da je X ikonica prikazana u Username polju
    let  isIconUsernameDisplayed = await loginPage.isErrorIconUsernameDisplayed();
    expect(isIconUsernameDisplayed).to.be.true;

    // Verifikacija da je X ikonica prikazana u Password polju
    let  isIconPasswordDisplayed = await loginPage.isErrorIconPasswordDisplayed();
    expect(isIconPasswordDisplayed).to.be.true;

    // Verifikacija da se prikazuje error poruka ispod Password polja
    let  errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.equal("Epic sadface: Username is required");

    // Zatvaranje error poruke prikazane ispod Password polja, klikom na X
    await loginPage.clickErrorMessageIcon();

    // Verifikacija da je error poruka nestala
    const isMessageGone = await loginPage.isErrorMessageUnvisible();
    expect(isMessageGone).to.be.true;

});

it('Test 2 - Prijava koristenjem pogresne sifre', async function () {
  
  // Klik na Login button, bez unosa kredencijala
  await loginPage.clickLogin();

  // Unos kredencijala i klik na Login dugme
  await loginPage.login("standard_user", "pogresnaSifra");

  // Verifikacija da je X ikonica prikazana u Username polju
  let  isIconUsernameDisplayed = await loginPage.isErrorIconUsernameDisplayed();
  expect(isIconUsernameDisplayed).to.be.true;

  // Verifikacija da je X ikonica prikazana u Password polju
  let  isIconPasswordDisplayed = await loginPage.isErrorIconPasswordDisplayed();
  expect(isIconPasswordDisplayed).to.be.true;

  // Verifikacija da se prikazuje error poruka ispod Password polja
  let  errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).to.equal("Epic sadface: Username and password do not match any user in this service");

  // Zatvaranje error poruke prikazane ispod Password polja, klikom na X
  await loginPage.clickErrorMessageIcon();

  // Verifikacija da je error poruka nestala
  const isMessageGone = await loginPage.isErrorMessageUnvisible();
  expect(isMessageGone).to.be.true;

});

});
