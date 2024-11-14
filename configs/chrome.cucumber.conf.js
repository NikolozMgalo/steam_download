import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
    ...mainConfig,
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],
    ...{
        framework: 'cucumber',
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
        },
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: [ "headless", "disable-gpu" ],
                    prefs: {
                        "download.default_directory": downloadDir,
                        'safebrowsing.enabled': true,
                        'safebrowsing.disable_download_protection': true, // Disable download protection
                    }
                },
            },
        ],
    },
};