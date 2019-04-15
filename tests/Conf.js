exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [
      {
          shardTestFiles: true,
          maxInstances: 2,
          sequential: true,
          browserName: 'chrome',
          specs: [
          'LoginForm/LoginFormTests.js',
          'CreateAccountForm/CreateAccountValidation.js',
          'CreateAccountForm/CreateAccountTests.js']
      },
      {
          shardTestFiles: true,
          maxInstances: 1,
          sequential: true,
          browserName: 'firefox',
          specs: ['LoginForm/Validation.js'
          ]
      }
  ]

}