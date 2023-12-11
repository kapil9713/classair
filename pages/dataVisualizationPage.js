const { I } = inject();
const assert = require("assert");
const clientData = require("../pages/data/clientData");

module.exports = {
  fields: {
    topHeading: "//p[contains(text(), 'Pyrescom')]",
    clientLabel: "//div[label[contains(text(), 'Clients')]]",
    myPortfolioClient: "(//div[contains(text(), 'Clients')]/../div[2])[1]",
    listName: "(//div[contains(text(), 'Name: All')])[1]",
    clientName: "(//div[@class='dropdownList']//input[@type='checkbox'][1])[1]",
    confirm: "(//button[contains(text(), 'Confirm')])[1]",
    selectClientName: "//div[@class='firstFew' and @for='location']",
    listOfClientName: "//tbody/tr/td[2]",
    listOfClientName:"(//div[@class='dropdown-content-multi'])",
    dropdown: "//select[@class='dropdownClass']",
    addNewClientAndDistributor: "//a[contains(text(), 'Add New Client or Distributor')]",
    type: "(//input[@placeholder='Select..' and contains(@class, 'form-control')])",
    bSelect: "(//input[@type='text'])[2]/following-sibling::div/a[1]",
    selectType: "//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Client']",
    next: "(//button[@type='button'])[2]",
    name: "//input[@id='clientName']",
    serviceProvided: "(//input[@placeholder='Select..' and contains(@class, 'form-control')])[1]",
    selectServiceProvider: "//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Sensors only']",
    distributor: "(//input[@placeholder='Select..' and contains(@class, 'form-control')])[2]",
    selectDistributor: "//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Pyrescom']",
    sageID: "//input[@id='sage']",
    interlocutor: "//input[@id='interlocutor']",
    status: "(//input[@placeholder='Select..' and contains(@class, 'form-control')])[3]",
    selectStatus: "//div[contains(@class, 'dropdown-content') and contains(@class, 'dropdownArea')]//a[text()='Active']",
    installationDate: "//input[@id='date']",
    clientType: "(//input[@placeholder='Select..' and contains(@class, 'form-control')])[4]",
    selectClientType: "(//input[@type='text'])[9]/following-sibling::div/a[1]",
    uploadImage: "//div[@data-v-d5d060a3]//input[@type='file']",
    country: "//input[@id='clientCountry']",
    city: "//input[@id='clientCity']",
    address: "//input[@id='clientAddress']",
    postalCode: "//input[@id='clientPostCode']",
    left: "//div[@class='headerLeft']",
    addClient: "//button[@type='button']",
    searchInput:"(//input[@class='myInputMulti' and @placeholder='Search..'])[1]",
    searchButton:"",
    searchResult:"(//div[@class='dropdownList']//input[contains(@id,'clientName') and @type='checkbox'])[last()]",
    searchResultName:"",
    
  },

  async verifyTopHeading() {
    I.waitForElement(this.fields.topHeading, 20);
    I.seeElement(this.fields.topHeading);
  },

  async verifyClient() {
    I.waitForElement(this.fields.clientLabel, 10);
    const actualVerifyClient = await I.grabTextFrom(this.fields.clientLabel);
    I.waitForElement(this.fields.myPortfolioClient, 10);
    const expectedVerifyClient = await I.grabTextFrom(this.fields.myPortfolioClient);
    assert.equal(actualVerifyClient, expectedVerifyClient);
  },

  async verifyListOfClientName() {
    I.waitForElement(this.fields.listName, 10);
    I.click(this.fields.listName);
    I.waitForElement(this.fields.clientName, 10);
    I.click(this.fields.clientName);
    I.scrollTo(this.fields.confirm);
    I.click(this.fields.confirm);
    const fullText = await I.grabTextFrom(this.fields.selectClientName);
    const actualclientName = fullText.split(' ').slice(1).join(' ').split(' Type:')[0];
    const expectedClientName = await I.grabTextFrom(this.fields.listOfClientName);
    assert.equal(actualclientName, expectedClientName);
  },

  async changeLanguage() {
    I.click(this.fields.dropdown);
    I.selectOption(this.fields.dropdown, clientData.dropdown);
  },

  async addNewClientAndDistributor() {
    I.waitForElement(this.fields.addNewClientAndDistributor, 10);
    I.click(this.fields.addNewClientAndDistributor);
    I.waitForElement(this.fields.type, 10);
    I.click(this.fields.type);
    I.waitForElement(this.fields.selectType, 5);
    I.click(this.fields.selectType);
    I.click(this.fields.next);
    I.fillField(this.fields.name, clientData.enterClient);
    I.click(this.fields.serviceProvided);
    I.waitForElement(this.fields.selectServiceProvider, 5);
    I.click(this.fields.selectServiceProvider);
    I.click(this.fields.distributor);
    I.waitForElement(this.fields.selectDistributor, 5);
    I.click(this.fields.selectDistributor);
    I.fillField(this.fields.sageID, clientData.sageID);
    I.fillField(this.fields.interlocutor, clientData.interlocutor);
    I.click(this.fields.status);
    I.waitForElement(this.fields.selectStatus, 5);
    I.click(this.fields.selectStatus);

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const currentDate = `${day}/${month}/${year}`;
    await I.fillField(this.fields.installationDate, currentDate);

    I.click(this.fields.clientType);
    I.waitForElement(this.fields.selectClientType, 5);
    I.click(this.fields.selectClientType);

    I.attachFile(this.fields.uploadImage, 'tests/upload/img.png');
    I.waitForElement(this.fields.country, 5);
    I.fillField(this.fields.country, clientData.country);
    I.fillField(this.fields.city, clientData.city);
    I.fillField(this.fields.address, clientData.address);
    I.fillField(this.fields.postalCode, clientData.postalCode);
    I.click(this.fields.addClient);
  },

  async verifyNewClient(name) {
    
    I.waitForElement(this.fields.listName, 5);
    I.click(this.fields.listName);
    I.waitForElement(this.fields.searchInput, 5);
    I.click(this.fields.searchInput);
    I.fillField(this.fields.searchInput,name);
    I.click(this.fields.searchResult);
    I.wait(10);
    I.scrollTo(this.fields.confirm);
    I.click(this.fields.confirm);
    
    
    
    



   
   
    
  
   
  }
  
};
