const clientData = require("../pages/data/clientData");
Feature("DataVisualization");

// Scenario("Verify that user is landed on homepage @login", async({ I, loginPage, dataVisualizationPage}) => {
//     I.amOnPage("/");
//     await loginPage.performLogin();
//     await dataVisualizationPage.verifyTopHeading();
//     await dataVisualizationPage.changeLanguage();
//   }
// )
// Scenario("Client Verification on DataVisualizationPage @login", async({ I, loginPage, dataVisualizationPage}) => {
//     I.amOnPage("/");
//     await loginPage.performLogin();
//     await dataVisualizationPage.verifyTopHeading();
//     await dataVisualizationPage.changeLanguage();
//     await dataVisualizationPage.verifyClient();
//   }
// )
// Scenario("Verify List Of ClientName on DataVisualizationPage @login", async({ I, loginPage, dataVisualizationPage}) => {
//     I.amOnPage("/");
//     await loginPage.performLogin();
//     await dataVisualizationPage.verifyTopHeading();
//     await dataVisualizationPage.changeLanguage();
//     await dataVisualizationPage.verifyListOfClientName();
//   }
// )
Scenario("Add new Client on DataVisualizationPage @login", async({ I, loginPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    await loginPage.performLogin();
    await dataVisualizationPage.verifyTopHeading();
    await dataVisualizationPage.changeLanguage();
    //dataVisualizationPage.verifyListOfClientName();
    await dataVisualizationPage.addNewClientAndDistributor();
    
  }
)
Scenario("verify new Client on DataVisualizationPage @login", async({ I, loginPage, dataVisualizationPage}) => {
  I.amOnPage("/");
  await loginPage.performLogin();
  await dataVisualizationPage.verifyTopHeading();
  await dataVisualizationPage.changeLanguage();
  await dataVisualizationPage.verifyNewClient(clientData.enterClient);
}
)