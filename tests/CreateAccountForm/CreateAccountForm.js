var Consts = require('../Consts');

var CreateAccountForm = function() {
    var createAccountHeader;
    var createAccountLabel;
    var emailAddressLabel;
    var emailAddressCheckbox;
    var createAccountButton;
    var errorMessage;


  this.get = function() {
    browser.driver.get(Consts.getLoginFormUrl());
    browser.driver.sleep(1000);

    createAccountHeader=browser.driver.findElement(by.css('#create-account_form h3'));
    createAccountLabel=browser.driver.findElement(by.css('#create-account_form div p'));
    emailAddressLabel=browser.driver.findElement(by.css('.form-group label[for="email_create"]'));
    emailAddressCheckbox=browser.driver.findElement(by.id('email_create'));
    createAccountButton=browser.driver.findElement(by.id('SubmitCreate'));

  };

  this.getCreateAccountHeader = function() {
    return createAccountHeader.getText();
  };

   this.getCreateAccountLabel = function() {
      return createAccountLabel.getText();
    };

   this.getEmailAddressLabel = function() {
      return emailAddressLabel.getText();
    };

   this.getEmailAddressCheckbox = function() {
      return emailAddressCheckbox;
    };

   this.getCreateAccountButton = function() {
       return createAccountButton;
    };

   this.getErrorMessage = function() {
        errorMessage=browser.driver.findElement(by.id('create_account_error'));
        return errorMessage.getText();
   };
};
module.exports = new CreateAccountForm();

