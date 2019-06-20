# Exercise 3

## Goal
At the end of this exercise you know how to:
- inspect a Webview
- switch to a Webview during an automated test
- access elements in the Webview during the test

## Intro
A native app can also hold a Webview. A *Webview* is a *browser* bundled inside of a mobile application producing what is called a hybrid app.
Using a Webview allows mobile apps to be built using Web technologies (HTML, JavaScript, CSS, etc.) but still package it as a native app and put it in the app store.

When we deal with hybrid apps we need to understand that we will get an extra context in our app. A native app initially has a `NATIVE`-context, but with a hybrid app you can add 1 or multiple `WEBVIEW`-contexts.
A Webview can also be accessed in a hybrid app and we can use *Selenium*-selectors to access and interact with the elements. To be able to access the Webview we need to *switch* between contexts.

## What to do
- Open Appium-Desktop with the configuration you created in exercise 1
- Use the default credentials to log in.
- Go to the Webview in the app by doing the following:
    - go to the `menu > WEBVIEW`
    - enter `https://www.raiffeisen.at` and submit the url
    - wait for the website to have loaded
- Refresh the source in Appium Desktop and find the find the selector that needs to be used to open the menu
- You will see you can't find it
- Open chrome, type `chrome://inspect/`
    - You will see a  `Remote target` text with the text `WebView in com.swaglabsmobileapp (61.0.3163.98)` below it
    - Click on `inspect`

  You are now able to inspect the webview of the page, find elements, adjust stuff and so on.

- Try to find the selector that needs to be used to open the menu and store it in [`tests/screen-objects/webview.js`](../../tests/screen-objects/webview.js)
- Try to find the selector of the menu and store it in [`tests/screen-objects/webview.js`](../../tests/screen-objects/webview.js)
- Now add the steps to the testcase
  1. Validate that menu in the webview is not open
  2. Validate that menu button in the webview is shown
  3. Open the menu
  4. Validate that the menu is open

- After following all the steps and adding all missing code you can run the tests with (the `-- --spec=` will only run a specific test file, if you remove  it will  run all test files) 

  `npm run test.android -- --spec=tests/specs/webview.spec.js`
  
  This should give you the following result
  
  ```log
  ➜  appium-workshop git:(exercise-3) ✗ npm run test.android -- --spec=tests/specs/webview.spec.js
  
  > appium-workshop@1.0.0 test.android /Users/wimselles/Sauce/Git/appium-workshop
  > wdio tests/configs/wdio.local.app.android.conf.js "--spec=tests/specs/webview.spec.js"
  
  
  Execution of 1 spec files started at 2019-06-20T09:47:27.037Z
  
  [0-0] RUNNING in com.swaglabsmobileapp.MainActivity - /tests/specs/webview.spec.js
  [0-0] PASSED in com.swaglabsmobileapp.MainActivity - /tests/specs/webview.spec.js
  
   "spec" Reporter:
  ------------------------------------------------------------------
  [emulator-5554 LINUX 8.1.0 #0-0] Spec: /Users/wswebcreation/Git/appium-workshop/tests/specs/webview.spec.js
  [emulator-5554 LINUX 8.1.0 #0-0] Running: emulator-5554 on LINUX 8.1.0 executing /Users/wswebcreation/Git/appium-workshop/apps/Android.SauceLabs.Mobile.Sample.app.1.0.0.apk
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] Webview
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should be able to interact with the webview and open the menu
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] 1 passing (9.4s)
  
  
  Spec Files:      1 passed, 1 total (100% completed) in 00:00:16  
  ```

## EXTRA
If you have time left you can follow the extra steps in the test case where you add steps to log out and verify that you are on the login screen again.

The goal of these extra steps is to show you how to switch between different contexts of the app.

When you added all code you can run your test with

  `npm run test.android -- --spec=tests/specs/webview.spec.js`
  
  This should give you the following result
  
  ```log
  ➜  appium-workshop git:(exercise-3) ✗ npm run test.android -- --spec=tests/specs/webview.spec.js
  
  > appium-workshop@1.0.0 test.android /Users/wswebcreation/Git/appium-workshop
  > wdio tests/configs/wdio.local.app.android.conf.js "--spec=tests/specs/webview.spec.js"
  
  
  Execution of 1 spec files started at 2019-06-20T09:44:16.842Z
  
  [0-0] RUNNING in com.swaglabsmobileapp.MainActivity - /tests/specs/webview.spec.js
  [0-0] PASSED in com.swaglabsmobileapp.MainActivity - /tests/specs/webview.spec.js
  
   "spec" Reporter:
  ------------------------------------------------------------------
  [emulator-5554 LINUX 8.1.0 #0-0] Spec: /Users/wswebcreation/Git/appium-workshop/tests/specs/webview.spec.js
  [emulator-5554 LINUX 8.1.0 #0-0] Running: emulator-5554 on LINUX 8.1.0 executing /Users/wswebcreation/Git/appium-workshop/apps/Android.SauceLabs.Mobile.Sample.app.1.0.0.apk
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] Webview
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should be able to interact with the webview and open the menu
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] 1 passing (12.6s)
  
  
  Spec Files:      1 passed, 1 total (100% completed) in 00:00:20 
  ```

 

