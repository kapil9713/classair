const { I } = inject();
const assert = require("assert");
module.exports = {
    // Insert your locators and methods here
    fields: {
      topHeading:"//p[contains(text(), 'Pyrescom')]",
      clientLabel:"//div[label[contains(text(), 'Clients')]]",
      myPortfolioClient:"(//div[contains(text(), 'Clients')]/../div[2])[1]",
      name:"(//div[contains(text(), 'Name: All')])[1]",
      clientName:"(//div[@class='dropdownList']//input[@type='checkbox'][1])[1]",
      confirm:"(//button[contains(text(), 'Confirm')])[1]",
      selectClientName:"(//div[@class='firstFew' and @for='location']/text())[1]",
      listOfClientName:"//tbody/tr/td[2]",
    },
    
    async verifyTopHeading() {
      I.waitForElement(this.fields.topHeading, 20);
      I.seeElement(this.fields.topHeading);
    },

    async verifyClient(){
        I.waitForElement(this.fields.clientLabel, 10);
        const actualVerifyClient = await I.grabTextFrom(this.fields.clientLabel);
        I.waitForElement(this.fields.myPortfolioClient,10);
        const expectedVerifyClient = await I.grabTextFrom(this.fields.myPortfolioClient);
        I.assert.equal(actualVerifyClient, expectedVerifyClient);
    },

    async verifyListOfClientName(){
        I.waitForElement(this.fields.name, 10);
        I.click(this.fields.name);
        I.waitForElement(this.fields.clientName,10);
        I.click(this.fields.clientName);
        I.scrollTo(this.fields.confirm);
        I.click(this.fields.confirm);
        const actualClientName = await I.grabTextFrom(this.fields.selectClientName);
        const expectedClientName = await I.grabTextFrom(this.fields.listOfClientName);
        I.assert.equal(actualClientName, expectedClientName);
    }



}