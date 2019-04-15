var Consts = function() {

  var email="talbenyaakov100@gmail.com";
  var password = "Aa123456";
  var firstPageUrl= "http://automationpractice.com/index.php?controller=my-account";
  var LoginFormUrl ="http://automationpractice.com/index.php?controller=authentication&back=my-account";


  var fakeEmail="talbentaakov@walla.com";
  var emailNotInFormat="aaa";
  var fakePassword="bbb";
  var createNewAccountUrl= "http://automationpractice.com/index.php?controller=authentication&back=my-account";
  var forgotPasswordUrl= "http://automationpractice.com/index.php?controller=password";
  var longInput="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa";



 this.get = function() {
  };

   this.getEmail= function() {
            return email;
   };

   this.getPassword= function() {
            return password;
   };

    this.getFirstPageUrl= function() {
               return firstPageUrl;
      };

    this.getFakeEmail= function() {
             return fakeEmail;
    };

    this.getFakePassword= function() {
             return fakePassword;
    };

    this.getCreateNewAccountUrl= function() {
             return createNewAccountUrl;
    };

    this.getForgotPasswordUrl= function() {
             return forgotPasswordUrl;
    };

    this.getLoginFormUrl= function() {
             return LoginFormUrl;
    };

    this.getEmailNotInFormat= function() {
         return emailNotInFormat;
    };

     this.getLongInput= function() {
          return longInput;
     };
};
module.exports = new Consts();



