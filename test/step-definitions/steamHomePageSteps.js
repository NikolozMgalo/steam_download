import { When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import SteamHomePage from '../page-objects/SteamHomePage.js';
import AllureReporter from '@wdio/allure-reporter';

Then('Steam home page is open', async () => {
    AllureReporter.addStep('Steam home page is open');
    assert.isTrue(await SteamHomePage.isPageOpened(), 'Steam home page not open');
});

When('I click on about', async () => {
    AllureReporter.addStep('I click on about');
    await SteamHomePage.clickAboutButton();
});