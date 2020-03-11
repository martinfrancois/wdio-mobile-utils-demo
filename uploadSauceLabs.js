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

// Determine which API key to use for Sauce Labs (Android or iOS)
var apiKey;
if (appExtension === 'apk') {
  // Android
  console.log('Uploading App on Android');
  apiKey = process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID;
} else if (appExtension === 'ipa') {
  // iOS
  console.log('Uploading App on iOS');
  apiKey = process.env.SAUCE_RDC_EU_ACCESS_KEY_IOS;
} else {
  console.err(
    'File extension of app is invalid. Has to be an apk or ipa file.'
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
  .post(
    'https://app.testobject.com:443/api/storage/upload',
    fileBuffer,
    options
  )
  .then(function(response) {
    if (response.status === 200) {
      console.log('Successfully uploaded with appId: ' + response.data);
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
