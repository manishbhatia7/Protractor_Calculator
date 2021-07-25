"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe('Calculator test', function () {
    beforeEach(function () {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
    });
    it('Launch Url Check ', function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
    });
    it('Perform Calculator functions', function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("12");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("12");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        expect(protractor_1.element(protractor_1.by.xpath("//h2[@class='ng-binding']")).getText()).toContain("24");
    });
});
