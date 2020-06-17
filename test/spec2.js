describe("Testing  Angular js website", function(){
    beforeAll(()=>{

        browser.get("https://angularjs.org/")

    });

    it("Testing typing the alert in the input", function(){
        var pinky = element(by.className("alert"))
        expect(pinky.getText()).to.eventually.contain("AngularJS")
    });

    it("Testing typing the name in the input", function(){
        var result = element(by.css('h1[class = "ng-binding"]'));
        var name = "Pinky";
        element(by.model("yourName")).sendKeys(name);
        expect(result.getText()).to.eventually.contain(name);
    });
    
    it("Testing the search element in the url", () => {
        var develop = element(by.linkText("DEVELOP"))
        var apiReference = element(by.linkText("API Reference"))
        var searchbox = element(by.name("as_q"))
        var blackFrame = element(by.className("search-results-frame"))
        var result =element(by.className("api-profile-header-heading"))
        var searchElement = "angular.element"
        develop.click();
        browser.wait(EC.elementToBeClickable(apiReference),standardTimeout)
        apiReference.click();
        browser.wait(EC.urlContains("api"), standardTimeout);
        searchbox.sendKeys(searchElement).then(() => {
            browser.wait(EC.visibilityOf(blackFrame), standardTimeout)
            //searchbox.submit();// Submit is fine for  if the element is used inside the form
            //or else we can use protractor.key.Enter
            searchbox.sendKeys(protractor.Key.RETURN)
        expect(result.getText()).to.eventually.equal(searchElement)
        });  
    //All actions like mouse keys , enters , sendKeys , expect statements are returning promises

   });
})