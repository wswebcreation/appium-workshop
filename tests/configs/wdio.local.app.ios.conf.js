const { config } = require('./wdio.shared.conf');
const { join } = require('path');

// ======
// Appium
// ======
config.port = 4723;

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        deviceName: 'iPhone X',
        platformName: 'iOS',
        platformVersion: '12.2',
        orientation: 'PORTRAIT',
        // The path to the app
        app: join(process.cwd(), './apps/iOS.Simulator.SauceLabs.Mobile.Sample.app.1.0.0.app.zip'),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        noReset: true,
        newCommandTimeout: 240,
        maxInstances: 1,
    },
];

exports.config = config;
