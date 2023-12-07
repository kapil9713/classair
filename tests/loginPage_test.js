Feature("Login");

Scenario("Verify that user is logged in successfully with valid data @login",({ I, loginPage,dataVisualizationPage }) => {
    I.amOnPage("/");
    loginPage.performLogin();
    
  }
).retry(1);