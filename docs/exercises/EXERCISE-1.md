# Exercise 1

## Goal
At the end of this exercise you are able:
- to use Appium-Desktop to find elements
- add the selectors of the element to the `login`-page -object
- add some test cases to test the login screen

## Prerequisites
- Configure Appium-Desktop:
  - Enter port `4774` in the `Port`-input field 
  
  > **NOTE:** <br>
  If you don't change the port you might get problems running the testscript later!!
  
  - Click on `Start Server`
  - A black screen is shown, click on the magnifying glass / search icon to start a new session
  - A grey window is opened. You will see that `Desired Capabilities` is active but you don't have any capabilities
  - Add the following configuration (for the `app`, locate it to the folder where you can find the app):
    
    ```json
    {
      "automationName": "UiAutomator2",
      "deviceName": "Pixel_8.1",
      "platformName": "Android",
      "platformVersion": "8.1",
      "noReset": true,
      "app": "/your-absolute-path-to/appium-workshop/apps/Android.SauceLabs.Mobile.Sample.app.1.0.0.apk",
      "appWaitActivity": "com.swaglabsmobileapp.MainActivity"
    }
    ```
    
  - When done, save the configuration and give it a name. This will make reuse much easier next time
  - Click on `Start Session`, this will install the app on the Android Emulator and opens a new window which can be used to inspect the elements. 

## What to do
- Open a coding editor and open [`tests/specs/login.spec.js`](../../tests/specs/login.spec.js). There you will find the steps about what you need to do
- After following all the steps and adding all missing code you can run the tests with 

  `npm run test.android`
  
  This should give you the following result
  
  ```log
  ➜  appium-workshop git:(master) ✗ npm run test.android
  
  > appium-workshop@1.0.0 test.android /Users/wswebcreation/Git/appium-workshop
  > wdio tests/configs/wdio.local.app.android.conf.js
  
  
  Execution of 1 spec files started at 2019-06-13T06:39:46.040Z
  
  [0-0] RUNNING in com.swaglabsmobileapp.MainActivity - /tests/specs/login.spec.js
  [0-0] PASSED in com.swaglabsmobileapp.MainActivity - /tests/specs/login.spec.js
  
   "spec" Reporter:
  ------------------------------------------------------------------
  [emulator-5554 LINUX 8.1.0 #0-0] Spec: /Users/wswebcreation/Git/appium-workshop/tests/specs/login.spec.js
  [emulator-5554 LINUX 8.1.0 #0-0] Running: emulator-5554 on LINUX 8.1.0 executing /Users/wswebcreation/Git/appium-workshop/apps/Android.SauceLabs.Mobile.Sample.app.1.0.0.apk
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] Login
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should be able to login with a standard user
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should not be able to login with a locked user
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should show an error when no username is provided
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should show an error when no password is provided
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should show an error when no match is found
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] 5 passing (21.9s)
  
  
  Spec Files:      1 passed, 1 total (100% completed) in 00:00:36 
  ```
