Feature("Login");

Scenario("Verify that user is logged in successfully with valid data @login", async({ I, loginPage,dataVisualizationPage }) => {
    I.amOnPage("/");
    await loginPage.performLogin();
    
    
  }
).retry(1);