import path from 'node:path';
import fs from 'fs-extra';
import allure from 'allure-commandline';
import AllureReporter from '@wdio/allure-reporter';


export const downloadDir = path.resolve('./tmp');

export const mainConfig = {
    runner: 'local',
    exclude: [
    ],
    maxInstances: 1,
    logLevel: 'warn',
    bail: 0,
    waitforTimeout: 0,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    baseUrl: 'https://store.steampowered.com/',

    onPrepare: function() {
        fs.ensureDir(downloadDir);
    },

    after: function (result, capabilities, specs) {
        fs.emptyDir(downloadDir);
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    beforeScenario: (scenario) => {
        const tags = scenario.pickle.tags.map(tag => tag.name);
        if (tags.includes('@blocker')) {
            AllureReporter.addLabel('severity', 'blocker');
        } else if (tags.includes('@critical')) {
            AllureReporter.addLabel('severity', 'critical');
        } else if (tags.includes('@normal')) {
            AllureReporter.addLabel('severity', 'normal');
        } else if (tags.includes('@minor')) {
            AllureReporter.addLabel('severity', 'minor');
        } else if (tags.includes('@trivial')) {
            AllureReporter.addLabel('severity', 'trivial');
        }
    },
};
