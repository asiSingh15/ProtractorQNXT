//protractor.conf.js
exports.config = {
    //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    directConnect : true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //frameworkPath: './cucumberConf.js',
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['--no-sandbox']
        }
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'tests/cucumber/Feature/firstTest.feature'
    ],
  
    //baseURL: 'http://localhost:8080/',
  
    cucumberOpts: {
      require: 'tests/cucumber/Step_Defination/stepDefination.js',
      tags: false,
      //format: 'pretty',
      profile: false,
      'no-source': true
    }
  };