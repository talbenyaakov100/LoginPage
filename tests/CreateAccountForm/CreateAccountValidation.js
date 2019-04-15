var CreateAccountForm = require('./CreateAccountForm');
var Consts = require('../Consts');

describe('Create Account Form - Validation', function() {

  beforeEach(function() {
       CreateAccountForm.get();
  });

 it('Email that is already exists',  function() {
    CreateAccountForm.getEmailAddressCheckbox().sendKeys(Consts.getEmail());
    CreateAccountForm.getCreateAccountButton().click();
     browser.driver.sleep(2000);

    expect(CreateAccountForm.getErrorMessage()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
  });

  it('Email which is not in the format',  function() {
    CreateAccountForm.getEmailAddressCheckbox().sendKeys(Consts.getEmailNotInFormat());
    CreateAccountForm.getCreateAccountButton().click();
    browser.driver.sleep(2000);

    expect(CreateAccountForm.getErrorMessage()).toEqual('Invalid email address.');
     });

   it('Email long input',  function() {
      CreateAccountForm.getEmailAddressCheckbox().sendKeys(Consts.getLongInput());
      CreateAccountForm.getCreateAccountButton().click();
      browser.driver.sleep(2000);

      expect(CreateAccountForm.getErrorMessage()).toEqual('Invalid email address.');
    });
});