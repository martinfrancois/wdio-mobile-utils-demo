import AllureReporter from '@wdio/allure-reporter';
const packagejson = require('../../package.json');

const debug = process.env.DEBUG;

const config: WebdriverIO.Config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    execArgv: debug ? ['--inspect'] : [],
    jasmineNodeOpts: {
        defaultTimeoutInterval: debug ? 60 * 60 * 500 : 60000,
        expectationResultHandler: function(passed, assertion) {
            // intercept every assertion
            if (!passed) {
                // get page source for debugging
                browser.getPageSource();
                // take screenshot of failed assertions
                browser.takeScreenshot();
            }
        },
        failFast: false
    },
    // @ts-ignore
    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    reporters: [
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverScreenshotsReporting: false
            }
        ],
        [
            'junit',
            {
                outputDir: './junit-results',
                outputFileFormat: function(opts) {
                    return `wdio.${opts.cid}.xml`;
                }
            }
        ],
        'spec'
    ],
    // ====================
    // Some hooks
    // ====================
    // Gets executed once before all workers get launched.
    onPrepare: function(config, capabilities) {
        // if test is running with sauce labs
        if (Object.keys(capabilities[0]).includes('testobject_api_key')) {
            console.log('Running test on Sauce Labs');
            console.log(
                'Amount of device configurations to test: ' +
                    (<any>capabilities).length
            );
        } else {
            console.log('Running test locally');
        }
    },
    // Gets executed before test execution begins. At this point you can access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function() {},
    beforeTest: function(test) {
        // addArguments can be called here for Allure Reporter
    },
    afterTest: function(test) {
        // addArguments can be called here for Allure Reporter
        const buildNumber = process.env.TRAVIS_BUILD_NUMBER;
        const branchName = process.env.TRAVIS_BRANCH;
        const platformName = browser.capabilities.platformName;
        const platformVersion = browser.capabilities.platformVersion;
        // @ts-ignore
        let deviceName = browser.capabilities.testobject_device_name;
        // @ts-ignore
        let sauceLabsUrl = browser.capabilities.testobject_test_report_url;

        if (!deviceName) {
            // in case we are not running on Sauce Labs
            deviceName = browser.capabilities.deviceName;
        }

        // addArgument writes into the "Parameters" section in the Allure report
        if (buildNumber) {
            AllureReporter.addArgument('buildNumber', buildNumber);
        }
        if (branchName) {
            AllureReporter.addArgument('branchName', branchName);
        }
        if (platformName) {
            AllureReporter.addArgument('platformName', platformName);
        }
        if (platformVersion) {
            AllureReporter.addArgument('platformVersion', platformVersion);
        }
        if (deviceName) {
            AllureReporter.addArgument('deviceName', deviceName);
        }
        if (sauceLabsUrl) {
            AllureReporter.addArgument('sauceLabsUrl', sauceLabsUrl);
        }
    },
    // Gets executed after all workers got shut down and the process is about to exit. An error
    // thrown in the onComplete hook will result in the test run failing.
    onComplete: function(exitCode, config, capabilities, results) {},
    processSauceCapabilities(capabilities) {
        console.log('Running test on app with latest version');

        const testName = getTestName();
        console.log('Sauce Labs Test Name: ' + testName);

        capabilities.map(capability => {
            capability.testobject_test_name = testName;
        });

        return capabilities;
    }
};

export { config };

function getTestName() {
    const buildNumber = process.env.BUILD_NUMBER;
    const version = packagejson.nativescript.version;
    const branchName = process.env.BUILD_BRANCH;

    let items;
    if (!buildNumber) {
        // test has been executed from local on Sauce Labs
        items = ['Local'];
    } else {
        // test has been executed from the build server
        items = [buildNumber];
    }
    items.push(version, branchName);

    // remove all items that are undefined / null
    items = items.filter(item => item);

    // end result will look something like this:
    // triggered from build server: 1234 | 0.5.2 | develop
    // triggered from local:        Local | AppID: 255 | 0.5.2
    return items.join(' | ');
}
