const { I } = inject();
const assert = require("assert");

module.exports = {
    // Insert your locators and methods here
    fields: {
      topHeading:"//p[contains(text(), 'Pyrescom')]",
      clientLabel:"//div[label[contains(text(), 'Clients')]]",
      myPortfolioClient:"(//div[contains(text(), 'Clients')]/../div[2])[1]",
      listName:"(//div[contains(text(), 'Name: All')])[1]",
      clientName:"(//div[@class='dropdownList']//input[@type='checkbox'][1])[1]",
      confirm:"(//button[contains(text(), 'Confirm')])[1]",
      selectClientName:"//div[@class='firstFew' and @for='location']",
      listOfClientName:"//tbody/tr/td[2]",
      dropdown:"//select[@class='dropdownClass']",
      addNewClientAndDistributor:"//a[contains(text(), 'Add New Client or Distributor')]", //btn
      type:"//input[@type='text']",//dd
      next:"(//button[@type='button'])[2]",//btn
      name:"//input[@id='clientName']",//ff
      serviceProvided:"",//dd
      distributor:"",//dd
      sageID:"",//ff
      interlocutor:"",//ff
      status:"",//dd
      installationDate:"",//click
      clientType:"",//dd
      uploadImage:"//button[contains(text(), 'Upload Logo')]",//click
      country:"",//ff
      city:"",//ff
      address:"",//ff
      postalCode:"",//ff
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
        I.waitForElement(this.fields.listName, 10);
        I.click(this.fields.listName);
        I.waitForElement(this.fields.clientName,10);
        I.click(this.fields.clientName);
        I.scrollTo(this.fields.confirm);
        I.click(this.fields.confirm);
        const fullText = await I.grabTextFrom(selectClientName);
        const actualclientName = fullText.split(' ').slice(1).join(' ').split(' Type:')[0];
        const expectedClientName = await I.grabTextFrom(this.fields.listOfClientName);
        I.assert.equal(actualclientName, expectedClientName);
    },
    async changeLanguage(){
        I.click(this.fields.dropdown);
        I.selectOption(this.fields.dropdown,'English');
        
      },
      async addNewClientAndDistributor(){

      }



}