Feature("DataVisualization");

Scenario("Verify that user is landed on homepage @login",({ I, loginPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    loginPage.performLogin();
    dataVisualizationPage.verifyTopHeading();
    dataVisualizationPage.changeLanguage();
  }
)
Scenario("Client Verification on DataVisualizationPage @login",({ I, loginPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    loginPage.performLogin();
    dataVisualizationPage.verifyTopHeading();
    dataVisualizationPage.changeLanguage();
    dataVisualizationPage.verifyClient();
  }
)
Scenario("Verify List Of ClientName on DataVisualizationPage @login",({ I, loginPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    loginPage.performLogin();
    dataVisualizationPage.verifyTopHeading();
    dataVisualizationPage.changeLanguage();
    dataVisualizationPage.verifyListOfClientName();
  }
)
Scenario("Add new Client on DataVisualizationPage @login",({ I, loginPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    loginPage.performLogin();
    dataVisualizationPage.verifyTopHeading();
    dataVisualizationPage.changeLanguage();
    //dataVisualizationPage.verifyListOfClientName();
    dataVisualizationPage.addNewClientAndDistributor();
  }
)