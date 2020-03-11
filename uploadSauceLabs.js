// Usage: node uploadSauceLabsRunTests appPath
// Example: node uploadSauceLabsRunTests build/wdio-mobile-utils-demo.apk

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

// Determine which data (API key, endpoint URL) to use for Sauce Labs (Android, iOS, iOS Simulator)
var apiKey;
var endpointUrl = 'https://app.testobject.com:443/api/storage/upload'; // is only different for iOS Simulator

if (appExtension === 'apk') {
  // Android
  console.log('Uploading App for Android');
  apiKey = process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID;
} else if (appExtension === 'ipa') {
  // iOS
  console.log('Uploading App for iOS');
  apiKey = process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS;
} else if (appExtension === 'zip') {
  console.log('Uploading App for iOS Simulator');
  apiKey = process.env.SAUCE_ACCESS_KEY;
  endpointUrl =
    'https://eu-central-1.saucelabs.com/rest/v1/storage/' +
    process.env.SAUCE_USERNAME +
    '/' +
    appName +
    '?overwrite=true';
} else {
  console.error(
    "File extension '" +
      appExtension +
      "' is invalid. Has to be an apk, ipa or app.zip file."
  );
  process.exit(1);
}

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
        // RDC Upload
        console.log('Successfully uploaded with appId: ' + response.data);
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
