import {browser, by, element} from "protractor";
import {log4jsconfig} from "../config/log4jsconfig";

describe('Calculator test', function () {
    beforeEach(function ()
    {
        browser.driver.manage().window().maximize();
        browser.get("https://juliemr.github.io/protractor-demo/");
    })
    it('Launch Url Check ', function () {
        expect(browser.getTitle()).toContain("Super");
        let browsertitle=browser.getTitle();
        browsertitle.then(function(txt)
        {
            console.log("Browser title:-"+txt);
            log4jsconfig.Log().debug("Browser title:-"+txt);
        })
    });
    it('Perform Calculator functions',function () {
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("12");
        element(by.id("gobutton")).click();
        expect<any>(element(by.xpath("//h2[@class='ng-binding']")).getText()).toContain("24");
    })

});