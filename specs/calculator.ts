import {browser, by, element} from "protractor";

describe('Calculator test', function () {
    beforeEach(function ()
    {
        browser.driver.manage().window().maximize();
        browser.get("https://juliemr.github.io/protractor-demo/");
    })
    it('Launch Url Check ', function () {
        expect(browser.getTitle()).toContain("Super");
    });
    it('Perform Calculator functions',function () {
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("12");
        element(by.id("gobutton")).click();
        browser.sleep(2000);
        expect<any>(element(by.xpath("//h2[@class='ng-binding']")).getText()).toContain("24");
    })

});