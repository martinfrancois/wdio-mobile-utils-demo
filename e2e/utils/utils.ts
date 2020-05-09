const packagejson = require('../../package.json');

/**
 * Returns the packageId for Android and the bundleId for iOS.
 */
export function getAppId() {
    return packagejson.nativescript.id;
}
