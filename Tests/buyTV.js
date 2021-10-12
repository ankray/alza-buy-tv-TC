const {By, Builder, WebElement} = require("selenium-webdriver");
require("chromedriver");

async function buyTV() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.alza.cz/");

    const getLogoAlzaPath = '//div[@id="logo"]';
    const getTitleTVsection = '//h1[text()="TV, foto, audio, video"]';
    const getTitleTV = '//h1[text()="Televize"]';
    const getTVsSectionPath = '//*[@href="/tv-foto-audio-video"]';
    const getTVsPath = '//*[@href="/televize/18849604.htm"]';
    const getExpenciveTVs = '//a[@id="ui-id-5"]';
    const getAvailableTVsToBuy = '//a[@class="btnk1" and text()="Koupit"]';
    const getAlzaDialogue = '//div[@id="alzaDialog"]';
    const getBuyBtn = '//a[@id="confirm-product-accessories-dialog"]';
    const getBackBtn = '//a[@id="varBBackButton"]';

    const logo = await driver.findElement(By.xpath(getLogoAlzaPath));
    const titleTVsection = await driver.findElement(By.xpath(getTitleTVsection));
    const titleTV = await driver.findElement(By.xpath(getTitleTV));

    const availableTVs = driver.findElements(By.xpath(getAvailableTVsToBuy));
    const buyTVBtn = driver.findElement(By.xpath(getAlzaDialogue)).findElement(By.xpath(getBuyBtn));
    const backBtn = driver.findElement(By.xpath(getBackBtn));

    if (logo) {
        console.log('Logo Alza is present');
    }

    await driver.findElement(By.xpath(getTVsSectionPath)).click();
    if (titleTVsection) {
        console.log('Title TV, foto, audio, video is present');
    }
    await driver.findElement(By.xpath(getTVsPath)).click();
    if (titleTV) {
        console.log('Title TV is present');
    }
    await driver.findElement(By.xpath(getExpenciveTVs)).click();

    await availableTVs[0].click();
    await buyTVBtn.click();
    await backBtn.click();
    await availableTVs[1].click();
    await buyTVBtn.click();

    await driver.quit();
}

await buyTV();