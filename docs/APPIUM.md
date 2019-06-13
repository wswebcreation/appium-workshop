# Setting up Appium on your machine
This document will provide you the instructions to install Appium on your local machine

## Table of content
- [Basic setup](#basic-setup)
- [Platform dependencies for Android](#platform-dependencies-for-android)
- [Platform dependencies for iOS](#platform-dependencies-for-ios)
- [Appium Server](#appium-server)
- [Appium Desktop](#appium-desktop)
- [`appium-doctor`](#appium-desktop)
  - [Running `appium-doctor`](#running-appium-doctor)
  

### Basic setup:
For the basic setup, we recommend the use of [Homebrew](https://brew.sh/) for installing system dependencies. 
Ensure that you have Appium's general dependencies (e.g. Node and NPM) installed and configured. For Node and NPM we advise you to use NVM, which is a Node version manager which makes maintaining different Node versions easier.
Follow the instructions of installing NVM [here](https://github.com/nvm-sh/nvm). 

### Platform dependencies for Android
For testing on Android, you'll need to do the following: 

- Install [JDK 8 or higher](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- Download and install [Android Studio](https://developer.android.com/studio)

Once done, open Android Studio and go to `Tools > SDK manager` and select the SDKs you want to use.
Then, go to `Tools > AVD manager` to create an emulator for your tests to use (for the workshop, we'll be using a `Google Pixel with Android 8.1`).

### Platform dependencies for iOS
For testing on iOS, you'll need to have a Mac and install: 

- [Xcode](https://developer.apple.com/xcode/)
- Xcode Command Line Tools Package. The Command Line Tools Package can be installed with the `xcode-select --install` command in your terminal once Xcode has been installed.
- Install the Carthage dependency manager by typing this in your terminal `brew install carthage`

### Appium Server
After installing the Android platform dependencies, you need to install the Appium Server onto your machine. You can use the command-line server, this is available through npm and install it with 

    npm install -g appium

After installation you can verify if it worked by entering the following in the command line

    appium -v

It will give you a version number

### Appium Desktop
Alternatively, you can use the Appium Desktop app, which is an open-source app for Mac, Windows, and Linux that gives you the Appium server in a simple and flexible UI (along with some extra functionality). You can download and install the latest version [here](https://github.com/appium/appium-desktop/releases).

### `appium-doctor` 
Appium uses more dependencies than just the Appium server. To check if all dependencies are installed, you can use [appium-doctor](https://github.com/appium/appium-doctor).
`appium-doctor` is a small NPM package that can diagnose and fix common Node, iOS, and Android configuration issues before starting Appium. 
`appium-doctor` can be installed with 

    npm install -g appium-doctor

### Running `appium-doctor`
`appium-doctor` can diagnose: 

- iOS and Android setup together by running 
    `appium-doctor`  
- iOS only by running 
    `appium-doctor --ios` 
- Android only by running
    `appium-doctor --android`

When you only need to set up for example Android you only need to run `appium-doctor --android`. It will result in a log in the terminal that might look like this

```log
info AppiumDoctor Appium Doctor v.1.9.0
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: /Users/wswebcreation/.nvm/versions/node/v10.15.2/bin/node
info AppiumDoctor  ✔ Node version is 10.15.2
info AppiumDoctor  ✔ ANDROID_HOME is set to: /Users/wswebcreation/Library/Android/sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: /Library/Java/JavaVirtualMachines/jdk1.8.0_191.jdk/Contents/Home
info AppiumDoctor  ✔ adb exists at: /Users/wswebcreation/Library/Android/sdk/platform-tools/adb
info AppiumDoctor  ✔ android exists at: /Users/wswebcreation/Library/Android/sdk/tools/android
info AppiumDoctor  ✔ emulator exists at: /Users/wswebcreation/Library/Android/sdk/tools/emulator
info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set
info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###
info AppiumDoctor
info AppiumDoctor ### Diagnostic for optional dependencies starting ###
info AppiumDoctor  ✔ Python required by node-gyp (used by heapdump) is installed at: /usr/bin/python. Installed version is: 2.7.10
WARN AppiumDoctor  ✖ opencv4nodejs cannot be found.
WARN AppiumDoctor  ✖ ffmpeg cannot be found
WARN AppiumDoctor  ✖ bundletool.jar cannot be found
info AppiumDoctor ### Diagnostic for optional dependencies completed, 3 fixes possible. ###
info AppiumDoctor
info AppiumDoctor ### Optional Manual Fixes ###
info AppiumDoctor The configuration can install optionally. Please do the following manually:
WARN AppiumDoctor  ➜ Why opencv4nodejs is needed and how to install it: https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/image-comparison.md
WARN AppiumDoctor  ➜ ffmpeg is needed to record screen features. Please read https://www.ffmpeg.org/ to install it
WARN AppiumDoctor  ➜ bundletool.jar is used to handle Android App Bundle. Please read http://appium.io/docs/en/writing-running-appium/android/android-appbundle/ to install it
info AppiumDoctor
info AppiumDoctor ###
info AppiumDoctor
info AppiumDoctor Bye! Run appium-doctor again when all manual fixes have been applied!
info AppiumDoctor
```

If there are any issues that can automatically be fixed, `appium-doctor` will do that for you. Otherwise, you will get a list of things that you need to fix. 
Run `appium-doctor` again to see if all the fixes were applied in the correct way. When everything is green, you are ready to start testing with Appium.
