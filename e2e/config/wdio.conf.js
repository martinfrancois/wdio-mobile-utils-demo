require('ts-node/register');
var path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.default') });

// to use config files with typescript, we need to specify this file for every test and choose the different
// test configurations to be used with an environment variable.
// e.g.: TEST_CONFIG=wdio.android.app.conf
// will use wdio.android.app.conf.ts for the test
module.exports = require('./' + process.env.TEST_CONFIG);
