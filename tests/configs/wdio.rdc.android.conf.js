const { config } = require('./wdio.shared.conf');

// =========================
// Sauce RDC specific config
// =========================
// Determination of the the US or EU RDC cloud url will be done
// automatically with the webdriverio service, just tell WebdriverIO
// to or connect to the 'us', or the 'eu' region
config.services = ['sauce'];
config.region = 'eu'; // For us cloud, change this to 'us'

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 10;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung Galaxy S10*',
    automationName: 'UiAutomator2',
    // The reference to the app
    testobject_app_id: '1',
    // The api key that has a reference to the app-project in the TO cloud
    testobject_api_key: process.env.SAUCE_RDC_EU_ACCESS_KEY_ANDROID,
    // The name of the test for in the cloud
    testobject_test_name: 'appium-workshop',
    // The Appium version in the cloud
    // appiumVersion: '1.10.0',
    // Some default settings
    // You can find more info in the TO Appium Basic Setup section
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    platformName: 'Android',
    idleTimeout: 180,
    maxInstances: 2,
    testobject_cache_device: true,
    noReset: true,
    orientation: 'PORTRAIT',
    newCommandTimeout: 180,
    phoneOnly: true,
    tabletOnly: false,
  },
];

// Port is not needed anymore
delete config.port;

exports.config = config;
