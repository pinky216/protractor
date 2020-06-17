//spec.js is container for protractor
//describe is like a test scenario
//describe : what need to be tested and is container for our test cases or is a test scenario
//it : test with logic, test case
//describe can contain multiple test cases
// We can multiple test scenarios 
// interact with non-angular we need to deal with browser.driver

describe("This test scenario will test Calculator", () => {
    beforeAll(function() {
        browser.get("https://juliemr.github.io/protractor-demo/")
      
     });
    //  afterEach(function() {
    //     console.log("After each being executed after all the functions to be executed")
    //  });
    afterAll(function()
    {
        console.log("After all will be executed , after all the functions are been executed")
    });

     it("should add two numbers", () => {
         //open the calculator page
         element(by.model("first")).sendKeys(12)
         element(by.model("operator")).sendKeys("-")
         element(by.model("second")).sendKeys(12)
         element(by.id("gobutton")).click()
         var result = element(by.binding("latest")).getText()
         expect(result).to.eventually.eql('0')
    });
    it("should multiply two numbers", () => {
        //open the calculator page
        element(by.model("first")).sendKeys(2)
        element(by.model("operator")).sendKeys("*")
        element(by.model("second")).sendKeys(2)
        element(by.id("gobutton")).click()
        var result = element(by.binding("latest")).getText()
        expect(result).to.eventually.equal('4')
   });
   it("should count the numbers", () => {
    //open the calculator page
    var result = element.all(by.repeater("result in memory"))
    expect(result.count()).to.eventually.equal(2)
});

});