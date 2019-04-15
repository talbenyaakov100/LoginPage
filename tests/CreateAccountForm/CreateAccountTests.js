var CreateAccount = require('./CreateAccountForm');
var Consts = require('../Consts');

describe('Create Account Form', function() {

  beforeEach(function() {
       CreateAccount.get();
  });

 it('Check correct labels name appear',  function() {
       expect(CreateAccount.getCreateAccountHeader()).toEqual('CREATE AN ACCOUNT');
       expect(CreateAccount.getCreateAccountLabel()).toEqual('Please enter your email address to create an account.');
       expect(CreateAccount.getEmailAddressLabel()).toEqual('Email address');
  });

  it('A valid scenario',  function() {
    CreateAccount.getEmailAddressCheckbox().sendKeys(Consts.getFakeEmail());
    CreateAccount.getCreateAccountButton().click();

    expect(browser.driver.getCurrentUrl()).toEqual(Consts.getCreateNewAccountUrl());
  });
});