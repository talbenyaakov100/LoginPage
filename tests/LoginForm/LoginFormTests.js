var LoginForm = require('./LoginForm');
var Consts = require('../Consts');

describe('Login Form', function() {

  beforeEach(function() {
       LoginForm.get();
  });

 it('Check correct labels name appear',  function() {
       expect(browser.driver.getTitle()).toEqual('Login - My Store');
       expect(LoginForm.getAlreadyRegisteredText()).toEqual('ALREADY REGISTERED?');
       expect(LoginForm.getEmailLabel()).toEqual('Email address');
       expect(LoginForm.getPasswordLabel()).toEqual('Password');
  });

  it('Forgot Password link',  function() {
          LoginForm.getForgotPasswordButton().click();

          expect(browser.driver.getCurrentUrl()).toEqual(Consts.getForgotPasswordUrl());
     });

  it('A valid scenario',  function() {
    LoginForm.getEmailTextbox().sendKeys(Consts.getEmail());
    LoginForm.getPasswordTextbox().sendKeys(Consts.getPassword());
    LoginForm.getLoginButton().click();

    expect(browser.driver.getCurrentUrl()).toEqual(Consts.getFirstPageUrl());
  });

});