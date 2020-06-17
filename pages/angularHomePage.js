var angularHomePage = function() {
    //variables
    var pinky = element(by.className("alert"));
    var result = element(by.css('h1[class = "ng-binding"]'));

    this.inputFileName = function(name) {
        element(by.model("yourName")).sendKeys(name);
    }
    this.getInputText = function() {
       return pinky.getText()
    }
    this.getInputName = function(name) {
       return result.getText()
    }
};

module.exports = new angularHomePage();