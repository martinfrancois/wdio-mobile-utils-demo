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
        autoDismissAlerts: false
    }
];

// ====================
// Appium Configuration
// ====================
// Default port for Appium
config.port = 4723;

exports.config = config;
