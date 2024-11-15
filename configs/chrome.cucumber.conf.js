import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";
import os from 'os';

export const config = {
    ...mainConfig,
    reporters: ['spec',
        ['allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true,
                disableMochaHooks: true,
                reportedEnvironmentVars: {
                    os_platform: os.platform(),
                    os_release: os.release(),
                    os_version: os.version(),
                    node_version: process.version,
                  },
            },
        ]
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