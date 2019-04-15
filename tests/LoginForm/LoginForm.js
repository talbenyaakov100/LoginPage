var Consts = require('../Consts');

var LoginForm = function() {

  var alreadyRegisteredText;
  var emailLabel;
  var emailTextbox;
  var passwordLabel;
  var passwordTextbox;
  var loginButton;
  var forgotPasswordButton;
  var errorMessage;

  this.get = function() {
    browser.driver.get(Consts.getLoginFormUrl());
    browser.driver.sleep(1000);
    alreadyRegisteredText =  browser.driver.findElement(by.css('#login_form h3'));
    emailLabel = browser.driver.findElement(by.css('.form-group label[for="email"]'));
    emailTextbox = browser.driver.findElement(by.id('email'));
    passwordLabel = browser.driver.findElement(by.css('.form-group label[for="passwd"]'));
    passwordTextbox = browser.driver.findElement(by.id('passwd'));
    loginButton = browser.driver.findElement(by.id('SubmitLogin'));
    forgotPasswordButton =browser.driver.findElement(by.css('.lost_password a'));
  };

  this.getAlreadyRegisteredText = function() {
    return alreadyRegisteredText.getText();
  };

 this.getEmailLabel = function() {
      return emailLabel.getText();
    };

     this.getEmailTextbox = function() {
          return emailTextbox;
        };
 this.getPasswordLabel = function() {
      return passwordLabel.getText();
    };
        this.getPasswordTextbox = function() {
                  return passwordTextbox;
                };

this.getLoginButton = function() {
   return loginButton;
 };

    this.getForgotPasswordButton = function() {
                   return forgotPasswordButton;
       };

       this.getErrorMessage = function() {
       errorMessage=browser.driver.findElement(by.css('.alert'));
          return errorMessage.getText();
        };
};
module.exports = new LoginForm();

