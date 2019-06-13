# Setting up Android and iOS on a local machine

## Table of content
- [Android](#android)
  - [Start the emulator](#start-the-emulator)
- [iOS](#ios)
  - [iOS versions](#ios-versions)
  - [Start a simulator](#start-a-simulator)

## Android
To use this project on a local machine for Android, emulator(s) need to be available.
To setup your local machine you should download Android Studio, see also the [Platform dependencies for Android](./APPIUM.md#platform-dependencies-for-android).

Follow the instructions to download and setup Android studio and configure your emulators with [this](https://developer.android.com/studio/run/managing-avds) tutorial.

Please use Google to find the correct instructions to setup your environment (Windows / Mac / Linux).

> **NOTE:** For this workshop we are going to use an Android emulator with Android `8.1`, make sure you are selecting `Android 8.1` as the Android version and use THIS name `Pixel_8.1`.

### Start the emulator
If you were able to create emulators you can use the following options to start the emulators

- From Android Studio itself through:
    - Open `Tools > AVD Manager`
    
    ![Start Android AVD Manager](./assets/start-android-avd-manager.jpg)
    
    - Select your emulator and click on the `play`-button
    
    ![Select emulator](./assets/select-avd.jpg)
    
- From the command line with the default Android commands, see [this](https://developer.android.com/studio/run/emulator-commandline) link
- Use a module called `start-android-emulator` which can be found [here](https://github.com/wswebcreation/start-android-emulator)

> It is advised to keep an emulator open and start tests against an already opened emulator to speed up tests. Starting an emulator manually/by Appium is time consuming and will slow down the test execution.

## iOS
Make sure you have a Mac, if you don't have a Mac then buy/get one, otherwise it will not work (no legal way to use iOS on Windows/Linux).

To be able to configure iOS simulators you need to download Xcode on your machine, check [this](https://developer.apple.com/xcode/) on how to install it.

### iOS versions
After installation you'll get the latest supported iOS version already installed. At the moment of writing this was `iOS 12.2`. If you want an older version of iOS please download them manually by doing the following:

1. Open Xcode (you don't need to start a project, having the project selector open is sufficient)
1. Go to Xcode preferences like below

    ![Xcode preferences](./assets/xcode-preferences.jpg)
    
1. A pop-up will appear like below

    ![Xcode preferences pop-up](./assets/xcode-preferences-popup.jpg)
    
1. Go to `Components` and download the needed versions like below 

    ![Xcode components](./assets/xcode-components.jpg)
    
    
### Start a simulator
You can use the following options to manually start a simulator:

- Through the Simulator app, find it on Mac and add it to your dock like below

    ![Simulator App](./assets/simualtor-app.jpg)

    ![Simulator start](./assets/start-simulator.jpg)

- Use a module called `start-ios-simulator` which can be found [here](https://github.com/wswebcreation/start-ios-simulator). With this module you can easily use your terminal to select your simulator

> It is advised to keep a simulator open and start tests against an already opened simulator to speed up tests. Starting a simulator manually/by Appium is time consuming and will slow down the test execution.
