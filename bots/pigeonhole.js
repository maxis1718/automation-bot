const { Builder, By, Key, until, logging } = require("selenium-webdriver");

class PigeonholeBot {
  init = async () => {
    this.driver = await new Builder().forBrowser("chrome").build();
  };
  quit = async () => {
    await this.driver.quit();
  };
  openURL = async (url) => {
    await this.driver.navigate().to(url);
    await this.driver.sleep(1500);
  };

  createProfile = async (name) => {
    const profileButton = await this.driver.findElement(
      By.css(".social-profile-menu-container")
    );
    await profileButton.click();

    const nameInputSelector = 'input.signin-input[data-attribute="Name"]';
    await this.driver.wait(until.elementLocated(By.css(nameInputSelector)));
    const nameInput = await this.driver.findElement(By.css(nameInputSelector));
    await this.driver.sleep(500);
    await nameInput.sendKeys(name);
    await this.driver.sleep(200);

    const signinButton = await this.driver.findElement(
      By.css("button.custom-signin-btn.signin-btn")
    );
    await signinButton.click();
    await this.driver.sleep(1500);

    const backButton = await this.driver.findElement(
      By.css("button.audience-header-back.signin-cancel-button")
    );
    await backButton.click();
    await this.driver.sleep(1200);
  };

  vote = async (dataId) => {
    const voteButton = await this.driver.findElement(
      By.css(
        `.question-item-wrap[data-id="${dataId}"] button.icon-qna-vote-outline.question-vote-triangle`
      )
    );
    await voteButton.click();
    await this.driver.sleep(800);
  };

  scrollTo = async (pixel) => {
    this.driver.executeScript(`window.scrollTo(0,${pixel});`);
    await this.driver.sleep(200);
  };
}

module.exports = PigeonholeBot;
