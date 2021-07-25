"use strict";
exports.__esModule = true;
exports.config = void 0;
var protractor_1 = require("protractor");
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/calculator.js'],
    onPrepare: function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
    }
};
