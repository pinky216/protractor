var angularDocs = function() {
    //variables
        var develop = element(by.linkText("DEVELOP"))
        var apiReference = element(by.linkText("API Reference"))
        var searchbox = element(by.name("as_q"))
        var blackFrame = element(by.className("search-results-frame"))
        var result = element(by.className("api-profile-header-heading"))
       
    //methods

      this.clickMenu = function(){
        develop.click();
        browser.wait(EC.elementToBeClickable(apiReference),standardTimeout)
        apiReference.click();
        browser.wait(EC.urlContains("api"), standardTimeout);
      }

      this.search = function(searchElement){
        searchbox.sendKeys(searchElement).then(() => {
        browser.wait(EC.visibilityOf(blackFrame), standardTimeout)
            //searchbox.submit();// Submit is fine for  if the element is used inside the form
            //or else we can use protractor.key.Enter
        searchbox.sendKeys(protractor.Key.RETURN)
      });
    }

    this.getResult = function(){
        return result.getText();
    }

};

module.exports = new angularDocs()