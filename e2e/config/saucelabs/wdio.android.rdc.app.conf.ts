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
        automationName: 'UiAutomator2',
        deviceName: 'Samsung.*Galaxy.*',
        // Some default settings
        // You can find more info in the TO Appium Basic Setup section
        platformName: 'Android',
        platformVersion: '9',
        idleTimeout: 180,
        noReset: true,
        app: 'sauce-storage:wdio-mobile-utils-demo.apk',
        orientation: 'PORTRAIT',
        newCommandTimeout: 180,
        phoneOnly: true,
        tabletOnly: false,
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
config.region = process.env.SAUCE_REGION;
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;

exports.config = config;
