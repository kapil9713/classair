Feature("Sensor");

Scenario("Verify total no of sensor @login",({ I, loginPage, sensorPage, dataVisualizationPage}) => {
    I.amOnPage("/");
    loginPage.performLogin();
    dataVisualizationPage.changeLanguage();
    sensorPage.totalSensorAndListOfSensor();
    

  }
)