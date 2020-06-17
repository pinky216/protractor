var angularHomePage = require("../pages/angularHomePage.js");
var angularDocs = require("../pages/angularDocs.js")

describe("Testing  Angular js website", function(){
    beforeAll(()=>{
        browser.get("https://angularjs.org/")
        browser.driver.manage().window().setSize(1300,2000)
    });

    it("Testing typing the name in the input", function(){    
        expect(angularHomePage.getInputText()).to.eventually.contain("AngularJS");
        angularHomePage.inputFileName("Pinky");
        expect(angularHomePage.getInputName()).to.eventually.contain("Pinky");
    });
//skippin the it blocks for describe we can use xdescribe
    xit("Testing the search element in the url", () => {
        angularDocs.clickMenu();
        angularDocs.search("angular.element");
        
        expect(angularDocs.getResult()).to.eventually.equal("angular.element")
        });  
      
        
        

    //All actions like mouse keys , enters , sendKeys , expect statements are returning promises

        


   // });
})