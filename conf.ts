import {Config,browser} from "protractor";
export let config:Config=
    {
        framework:"jasmine",
        capabilities:
            {
                browserName:'chrome'
            },
        specs:['./specs/calculator.js'],
        onPrepare:function()
        {
            browser.manage().timeouts().implicitlyWait(5000);

        }

    }