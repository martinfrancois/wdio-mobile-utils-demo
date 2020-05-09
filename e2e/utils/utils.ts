const packagejson = require('../../package.json');

/**
 * Returns the packageId for Android and the bundleId for iOS.
 */
export function getAppId() {
    return browser.isIOS
        ? packagejson.nativescript.id.ios
        : packagejson.nativescript.id.android;
}
