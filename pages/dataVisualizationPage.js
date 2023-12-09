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
      type:"(//input[@placeholder='Select..' and contains(@class, 'form-control')])",//dd
      bSelect:"(//input[@type='text'])[2]/following-sibling::div/a[1]",
      selectType:"//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Client']",
      next:"(//button[@type='button'])[2]",//btn
      name:"//input[@id='clientName']",//ff
      serviceProvided:"(//input[@placeholder='Select..' and contains(@class, 'form-control')])[1]",//dd
      selectServiceProvider:"//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Sensors only']",
      distributor:"(//input[@placeholder='Select..' and contains(@class, 'form-control')])[2]",//dd
      selectDistributor:"//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Pyrescom']",
      sageID:"//input[@id='sage']",//ff
      interlocutor:"//input[@id='interlocutor']",//ff
      status:"(//input[@placeholder='Select..' and contains(@class, 'form-control')])[3]",//dd
      selectStatus:"//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Active']",
      installationDate:"//input[@id='date']",//click
      clientType:"(//input[@placeholder='Select..' and contains(@class, 'form-control')])[4]",//dd
      selectClientType:"(//input[@type='text'])[9]/following-sibling::div/a[1]",
      uploadImage:"//div[@data-v-d5d060a3]//input[@type='file']",//click
      country:"//input[@id='clientCountry']",//ff
      city:"//input[@id='clientCity']",//ff
      address:"//input[@id='clientAddress']",//ff
      postalCode:"//input[@id='clientPostCode']",//ff
      left:"//div[@class='headerLeft']",
      
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
        I.waitForElement(this.fields.addNewClientAndDistributor,10);
        I.click(this.fields.addNewClientAndDistributor);
        I.waitForElement(this.fields.type,10);
        I.click(this.fields.type);
        I.waitForElement(this.fields.selectType, 5);
        I.click(this.fields.selectType);
        
        I.click(this.fields.next);
        I.fillField(this.fields.name,'vespa');
        
        I.click(this.fields.serviceProvided);
        I.waitForElement(this.fields.selectServiceProvider, 5);
        I.click(this.fields.selectServiceProvider);
        I.click(this.fields.distributor);
        I.waitForElement(this.fields.selectDistributor, 5);
        I.click(this.fields.selectDistributor);

        
        I.fillField(this.fields.sageID,'1');
        I.fillField(this.fields.interlocutor, 'kp');
        
        I.click(this.fields.status);
        I.waitForElement(this.fields.selectStatus, 5);
        I.click(this.fields.selectStatus);
        
        // I.waitForElement(this.fields.installationDate, 10);
        // I.click(this.fields.installationDate);
       
        I.click(this.fields.clientType);
        I.waitForElement(this.fields.selectClientType, 5);
        I.click(this.fields.selectClientType);
       // I.click(this.fields.uploadImage);
        I.attachFile(this.fields.uploadImage, 'tests/upload/img.png');
        I.waitForElement(this.fields.country, 5);
        I.fillField(this.fields.country,'india');
        I.fillField(this.fields.city, 'sehore');
        I.fillField(this.fields.address, 'dlf');
        I.fillField(this.fields.postalCode, '466001');
       



      }



};