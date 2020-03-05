/* eslint-disable max-len */
// Test iOS on Simulator on Sauce Labs

// @ts-ignore
const { config } = require('../wdio.shared.conf');

// ============
// Specs
// ============
config.specs = ['./e2e/specs/**/*.spec.ts'];

/**
 * To upload the app to Sauce Storage to use in a test, build the app for the simulator and zipped into a zip file.
 * Then upload it to Sauce Storage by running the following command:
 *
 * curl --ssl-no-revoke -u SAUCE_USERNAME:SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://eu-central-1.saucelabs.com/rest/v1/storage/SAUCE_USERNAME/wdio-mobile-utils-demo.zip?overwrite=true --data-binary @"C:\path\to\build\wdio-mobile-utils-demo.zip"
 *
 * Replace SAUCE_USERNAME and SAUCE_ACCESS_KEY with the username and the access key you can find here:
 * https://app.eu-central-1.saucelabs.com/user-settings
 *
 * NOTE: For the test to work it's essential the name `wdio-mobile-utils-demo.zip` is the same as the file name of the file that is uploaded!
 */

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        // see here for supported combinations: https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
        platformVersion: '12.2',
        deviceName: 'iPhone 8 Simulator',
        printPageSourceOnFindFailure: true,
        idleTimeout: 120,
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 120,
        phoneOnly: true,
        tabletOnly: false,
        autoDismissAlerts: false,
        app: 'sauce-storage:wdio-mobile-utils-demo.zip',
        waitForAppScript: 'true;',
        build: process.env.BUILD_NUMBER,
        appiumVersion: '1.13.0',
        browserName: '',
        // fix for "Remote debugger not connected" see: https://github.com/appium/appium/issues/12344
        safariGarbageCollect: false,
        showSafariNetworkLog: false,
        maxInstances: 5
    }
];

// =========================
// Sauce RDC specific config
// =========================
// The new version of WebdriverIO will:
// - automatically update the job status in the RDC cloud
// - automatically default to the US RDC cloud
config.services = ['sauce'];
config.region = 'eu';
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;

exports.config = config;
