// Usage: node uploadSauceLabs.js appPath
// Example: node uploadSauceLabs.js build/wdio-mobile-utils-demo.apk

var path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.default') });

var axios = require('axios');
var fs = require('fs');

var args = process.argv.slice(2);
var appPath = args[0];
console.log('appPath: ' + appPath);

var appExtension = appPath
  .split('.')
  .pop()
  .toLowerCase(); // apk for Android, ipa for iOS

var appName = appPath.split('/');
if (appName.length > 1) {
  // file is in a subfolder
  appName = appName[appName.length - 1]; // last part after last / is filename
} else if (appName.length === 1) {
  // file is top level
  appName = appName[0];
} else {
  console.error("File name '" + appName + "' for app is invalid.");
  process.exit(1);
}

// Determine which data endpoint URL to use for Sauce Labs (Android RDC, iOS RDC, iOS Simulator)
var apiKey = process.env.SAUCE_ACCESS_KEY;
var endpoint;

if (process.env.SAUCE_REGION === 'us') {
  endpoint = 'app.saucelabs.com';
} else if (process.env.SAUCE_REGION === 'eu') {
  endpoint = 'app.eu-central-1.saucelabs.com';
}

if (appExtension === 'apk') {
  // Android
  console.log('Uploading App for Android');
} else if (appExtension === 'ipa') {
  // iOS
  console.log('Uploading App for iOS');
} else if (appExtension === 'zip') {
  console.log('Uploading App for iOS Simulator');
  if (process.env.SAUCE_REGION === 'us') {
    endpoint = 'saucelabs.com';
  } else if (process.env.SAUCE_REGION === 'eu') {
    endpoint = 'eu-central-1.saucelabs.com';
  }
} else {
  console.error(
    "File extension '" +
      appExtension +
      "' is invalid. Has to be an apk, ipa or app.zip file."
  );
  process.exit(1);
}

var endpointUrl =
  'https://' +
  endpoint +
  '/rest/v1/storage/' +
  process.env.SAUCE_USERNAME +
  '/' +
  appName +
  '?overwrite=true';

var fileBuffer = fs.readFileSync(appPath);

var headers = {
  'Content-Type': 'application/octet-stream'
};

var options = {
  headers: headers,
  auth: {
    username: process.env.SAUCE_USERNAME,
    password: apiKey
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity
};

// upload file to sauce labs
axios
  .post(endpointUrl, fileBuffer, options)
  .then(function(response) {
    if (response.status === 200) {
      if (typeof response.data === 'object') {
        // Sauce Storage Upload
        console.log(
          'Successfully uploaded with filename: ' + response.data.filename
        );
      } else {
        console.log('Unexpected response: ' + JSON.stringify(response));
        process.exit(1);
      }
      process.exit(0);
    } else {
      console.log('Unexpected status code: ' + JSON.stringify(response));
      process.exit(1);
    }
  })
  .catch(function(error) {
    console.log('Upload to Sauce Labs failed! ' + error.stack);
    process.exit(1);
  });
