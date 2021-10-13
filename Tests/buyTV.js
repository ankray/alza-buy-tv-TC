const {By, Builder, WebElement} = require("selenium-webdriver");
require("chromedriver");

// TC steps:
// go to https://www.alza.cz/
// Assert logo is present
// click on element xpath=//*[@href="/tv-foto-audio-video"]
// Asset that tittle is  TV, foto, audio, video
// Click on Televize
// Assert Televize tittle is present
// Click on Od najdrazsiho
// Assert Od najdrazsiho tab is active
// TV_1 = Get text and price of 1st TV
// Click on Koupit on the 1st TV
// Click on Koupit bez sluzeb
// Assert TV added to Busket
// Go back to search results
// TV_2 = Get text and price of 2st TV
// Click on Koupit on the 2nd TV
// Assert TV is added to Busket
// Go to Busket and check that TV_1 and TV_2 are there.

async function buyTV() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.alza.cz/");

    const getLogoAlzaPath = '//div[@id="logo"]';
    const getTitleTVsection = '//h1[@itemprop="name" and text()="TV, foto, audio, video"]';
    const getTitleTV = '//h1[@itemprop="name" and text()="Televize"]';
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
    } else {
        console.log('Logo Alza is not present');
    }

    await driver.findElement(By.xpath(getTVsSectionPath)).click();
    if (titleTVsection) {
        console.log('Title for TV, foto, audio, video is present');
    } else {
        console.log('Title for TV, foto, audio, video is not present');
    }

    await driver.findElement(By.xpath(getTVsPath)).click();
    if (titleTV) {
        console.log('Title for TV is present');
    } else {
        console.log('Title for TV is not present');
    }

    await driver.findElement(By.xpath(getExpenciveTVs)).click();

    await buyTVBtn.click();
    await backBtn.click();
    await availableTVs[1].click();
    await buyTVBtn.click();

    await driver.quit();
}

buyTV();