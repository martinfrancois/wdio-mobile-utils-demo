// @ts-ignore
const { config } = require('../wdio.shared.conf');

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
        // The api key that has a reference to the app-project in the TO cloud
        testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS,
        // The name of the test for in the cloud
        testobject_test_name: 'wdio-mobile-utils-demo-iOS',
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        platformName: 'iOS',
        platformVersion: '12',
        printPageSourceOnFindFailure: true,
        idleTimeout: 180,
        noReset: true,
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        phoneOnly: true,
        tabletOnly: false,
        autoDismissAlerts: false,
        deviceName: '^(?!iPhone 5|iPhone SE|iPhone 6).*$',
        // fix for "Remote debugger not connected" see: https://github.com/appium/appium/issues/12344
        safariGarbageCollect: false,
        showSafariNetworkLog: false,
        maxInstances: 5
    }
];

config.capabilities = config.processSauceCapabilities(config.capabilities);

// =========================
// Sauce RDC specific config
// =========================
// The new version of WebdriverIO will:
// - automatically update the job status in the RDC cloud
// - automatically default to the US RDC cloud
config.services = ['sauce'];
// If you need to connect to the US RDC cloud comment the below line of code
config.region = 'eu';
// and uncomment the below line of code
// config.region = 'us';

exports.config = config;
