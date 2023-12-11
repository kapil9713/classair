const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
//const { pageObjects } = require("./configHelper");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
require('dotenv').config();

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
const uiURL = process.env.UI_URL || 'https://localhost/';

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://128.140.1.135',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    dataVisualizationPage:"./pages/dataVisualizationPage.js",
    sensorPage:"./pages/sensorPage.js",
    clientData:"./pages/data/clientData.js",
   
    
  },
  name: 'classair'
}