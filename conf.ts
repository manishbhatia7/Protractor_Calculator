import {Config,Browser} from "protractor";
export let config:Config=
    {
        framework:"jasmine",
        capabilities:
            {
                browserName:'chrome'
            },
        specs:['./specs/calculator.js']

    }