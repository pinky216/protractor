//To create a package.json hit npm init in terminal
//conf.js is required to tell in which browser tests should run
// what are tests to be run
//This is a configuration file for our tests in protractor
//The describe and it syntax is from the Jasmine framework. browser is a global created by Protractor, 
//which is used for browser-level commands such as navigation with browser.get.

exports.setupTestGlobals = () => {
    var _ = require('lodash');
    EC = protractor.ExpectedConditions;
    moment = require('moment');
    //Page objects aid in performing actions in the UI in the same manner as a user would perform them.
    //A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates
    //Chai is an assertion library, similar to Node's built-in assert. It makes testing much easier
    // by giving you lots of assertions you can run against your code.
    expect = require('chai')
      .use(require('chai-as-promised'))
      //Matchers for chai to help with common date comparison assertions against JavaScript Date objects.
      .use(require('chai-datetime')).expect;
    standardTimeout = 30000;
  };
exports.config = {
    directConnect: true,
    framework: 'jasmine',
    showColors: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../test/spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
onPrepare: () => {
      browser.driver
      .manage()
     .window()
     .setSize(1351, 700);
    exports.setupTestGlobals();
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
    resultDir : 'allureReports'
    }));
    jasmine.getEnv().afterEach(function(done){
    browser.takeScreenshot().then(function(png){
    allure.createAttachment('Screenshot', function(){
        return new Buffer(png, 'base64')
      },  'image/png')();
      done();
      })
      })

    }
  }

