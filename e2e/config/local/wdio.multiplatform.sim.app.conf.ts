// @ts-ignore
const { config } = require('../wdio.shared.conf');
// @ts-ignore
const { join } = require('path');

// ============
// Specs
// ============
config.specs = ['./e2e/specs/**/*.spec.ts'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        automationName: 'UiAutomator2',
        deviceName: 'wdio-mobile-utils-demo',
        platformName: 'Android',
        maxInstances: 1,
        //platformVersion: '9.0',
        orientation: 'PORTRAIT',
        app: join(process.cwd(), './build/wdio-mobile-utils-demo.apk'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        fullReset: true, // if set to true, will uninstall app after the end of test. Should be the default to test changes in the code.
        noReset: false, // if set to true, will not have app uninstall after the end of the test. Can be set to speed up writing test cases.
        newCommandTimeout: 240,
    },
    {
        automationName: 'XCUITest',
        // The defaults you need to have in your config
        deviceName: 'iPhone 8',
        platformName: 'iOS',
        platformVersion: '13.0',
        orientation: 'PORTRAIT',
        maxInstances: 1,
        printPageSourceOnFindFailure: true,
        // The path to the app
        //app: join(process.cwd(), './build/wdio-mobile-utils-demo.app'),
        app: 'com.github.martinfrancois.demo',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        autoDismissAlerts: false,
    },
];

// ====================
// Appium Configuration
// ====================
// Default port for Appium
config.port = 4723;

exports.config = config;
