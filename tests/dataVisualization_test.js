Feature("DataVisualization");

Scenario("Verify that user is landed on homepage @login",({ I, loginPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    loginPage.performLogin();
    dataVisualizationPage.verifyTopHeading();
  }
).retry(1);