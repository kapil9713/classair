const { I } = inject();

module.exports = {
  // Insert your locators and methods here
  fields: {
    usernameTextbox: "//input[@id='loginID']",
    passwordTextbox: "//input[@type='password']",
    signInButton: "//input[@id='login' and @type='submit']",
    
  },

  async performLogin() {
    I.waitForElement(this.fields.usernameTextbox, 10);
    I.clearField(this.fields.usernameTextbox);
    I.fillField(this.fields.usernameTextbox, process.env.LOGINID);
    I.clearField(this.fields.passwordTextbox);
    I.fillField(this.fields.passwordTextbox, process.env.PASSWORD);
    I.waitForElement(this.fields.signInButton, 5);
    I.click(this.fields.signInButton);
    
  },
 
};