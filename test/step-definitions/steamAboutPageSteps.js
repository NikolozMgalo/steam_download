import {  When, Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import SteamAboutPage from '../page-objects/SteamAboutPage.js';
import AllureReporter from '@wdio/allure-reporter';

Then('About page is open', async () => {
    AllureReporter.addStep('About page is open');
    assert.isTrue(await SteamAboutPage.isPageOpened(), 'About page is not open');
});

When('I click install steam', async () => {
    AllureReporter.addStep('I click install steam');
    await SteamAboutPage.downloadSteam();
});