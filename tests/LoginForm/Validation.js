var LoginForm = require('./LoginForm');
var Consts = require('../Consts');

    describe('Login Form - Validation', function() {
      beforeEach(function() {
           LoginForm.get();
      });

    it('email doesnt exists',  function() {
           LoginForm.getEmailTextbox().sendKeys(Consts.getFakeEmail());
           LoginForm.getPasswordTextbox().sendKeys(Consts.getPassword());
           LoginForm.getLoginButton().click();

           expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'Authentication failed.');
      });

    it('email is not in the format',  function() {
           LoginForm.getEmailTextbox().sendKeys(Consts.getEmailNotInFormat());
           LoginForm.getPasswordTextbox().sendKeys(Consts.getPassword());
           LoginForm.getLoginButton().click();

           expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'Invalid email address.');
      });

    it('Email exists with wrong password',  function() {
              LoginForm.getEmailTextbox().sendKeys(Consts.getEmail());
              LoginForm.getPasswordTextbox().sendKeys(Consts.getFakePassword());
              LoginForm.getLoginButton().click();

         expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'Invalid password.');
         });

    it('Empty email with password',  function() {
         LoginForm.getPasswordTextbox().sendKeys(Consts.getPassword());
         LoginForm.getLoginButton().click();

         expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'An email address required.');
    });

    it('Email and empty password',  function() {
         LoginForm.getEmailTextbox().sendKeys(Consts.getEmail());
         LoginForm.getLoginButton().click();

         expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'Password is required.');
    });

    it('Email with long input',  function() {
           LoginForm.getEmailTextbox().sendKeys(Consts.getLongInput());
           LoginForm.getPasswordTextbox().sendKeys(Consts.getPassword());
           LoginForm.getLoginButton().click();

           expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'Invalid email address.');
    });

    it('Password with long input',  function() {
             LoginForm.getPasswordTextbox().sendKeys(Consts.getLongInput());
             LoginForm.getEmailTextbox().sendKeys(Consts.getEmail());
             LoginForm.getLoginButton().click();

             expect(LoginForm.getErrorMessage()).toEqual('There is 1 error' + '\n' + 'Authentication failed.');
    });

  });