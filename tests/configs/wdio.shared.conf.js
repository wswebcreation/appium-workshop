const { join } = require('path');

exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // ============
  // Capabilities
  // ============
  // The capabilities are defined in following files:
  // - `wdio.local.app.android.conf.js`
  // - `wdio.local.app.ios.conf.js`

  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: [ 'spec' ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },

  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './tests/specs/**/*.js',
  ],

  // ====================
  // Appium Configuration
  // ====================
  services: [ 'appium' ],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: {
      // For all arguments see
      // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
      // This executable is here because the simulator uses an old version of Chrome so
      // we need to have an older version of ChromeDriver
      chromedriverExecutable: join(process.cwd(), './apps/chromedriver'),
    },
  },
  port: 4723,

  // =====
  // Hooks
  // =====
  beforeSession: () => {
    // This makes sure we can compile all ES6 functionality, like for example the imports, on the fly
    require('@babel/register');
  },
  before: () => {
    /**
     * Custom property that is used to determine if the app is already launched for the first time
     * This property is needed because the first time the app is automatically started by Appium,
     * so a double restart is not needed.
     */
    browser.firstAppStart = true;
  },
}
