import { When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import SteamHomePage from '../page-objects/SteamHomePage.js';
import AllureReporter from '@wdio/allure-reporter';
import Browser from '../../framework/browser/Browser.js';

Then('Steam home page is open', async () => {
    AllureReporter.addStep('Steam home page is open');
    await Browser.addScreenshot('steam homepage');
    assert.isTrue(await SteamHomePage.isPageOpened(), 'Steam home page not open');
});

When('I click on about', async () => {
    AllureReporter.addStep('I click on about');
    await SteamHomePage.clickAboutButton();
    await Browser.addScreenshot('Steam about page');
});