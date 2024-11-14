import {  Given, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import Browser from '../../framework/browser/Browser.js';
import { downloadDir } from '../../framework/configs/main.wdio.conf.js';
import * as path from 'path';
import AllureReporter from '@wdio/allure-reporter';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';

Given('I am on steam main page', async () => {
    AllureReporter.addStep('I am on steam main page');
    await Browser.openUrl(mainConfig.baseUrl);
});

Then(/^The file '(.*)' was downloaded$/, async (fileName) => {
    AllureReporter.addStep(`The file ${fileName} was downloaded`);
    const downloadFilePath = path.join(downloadDir, fileName);
    assert.isTrue(await Browser.File.isFileExist(downloadFilePath), 'File was not downloaded')
});