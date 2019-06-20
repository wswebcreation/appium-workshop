# Exercise 2

## Goal
At the end of this exercise you:
- know **when** to use XPATH
- are able to add swag to the cart based on it's text
- are able to verify that the swag was added to the cart

## What to do
- Open Appium-Desktop with the configuration you created in exercise 1

  > **NOTE:**<br> Be aware of the port, it needs to be `4774`

- Use the default credentials to log in.
- Look at the cart icon, check what happens with the code when you:
  1. add an item (refresh the UI-Hierarchy after adding an item)
  2. remove an item (refresh the UI-Hierarchy after adding an item)
- Look at the second swag item and try to find:
  1. the text element for the second swag item
  2. the add button for the second swag item
- Open a coding editor and open [`tests/specs/swag.list.spec.js`](../../tests/specs/swag.list.spec.js) for what to do.

> HINT: Try to come up with a XPATH selector that returns the `Add to cart` button and uses the text of the swag item to find it

- After following all the steps and adding all missing code you can run the tests with (the `-- --spec=` will only run a specific test file, if you remove  it will  run all test files) 

  `npm run test.android -- --spec=tests/specs/swag.list.spec.js`
  
  This should give you the following result
  
  ```log
  ➜  appium-workshop git:(exercise-2) ✗ npm run test.android -- --spec=tests/specs/swag.list.spec.js
  
  > appium-workshop@1.0.0 test.android /Users/wswebcreation/Git/appium-workshop
  > wdio tests/configs/wdio.local.app.android.conf.js "--spec=tests/specs/swag.list.spec.js"
  
  
  Execution of 1 spec files started at 2019-06-19T10:10:13.914Z
  
  [0-0] RUNNING in com.swaglabsmobileapp.MainActivity - /tests/specs/swag.list.spec.js
  [0-0] PASSED in com.swaglabsmobileapp.MainActivity - /tests/specs/swag.list.spec.js
  
   "spec" Reporter:
  ------------------------------------------------------------------
  [emulator-5554 LINUX 8.1.0 #0-0] Spec: /Users/wswebcreation/Git/appium-workshop/tests/specs/swag.list.spec.js
  [emulator-5554 LINUX 8.1.0 #0-0] Running: emulator-5554 on LINUX 8.1.0 executing /Users/wswebcreation/Git/appium-workshop/apps/Android.SauceLabs.Mobile.Sample.app.1.0.0.apk
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] Swag Item Overview
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should be able to add the "Sauce Labs Bike Light" to the cart
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] 1 passing (4.9s)
  
  
  Spec Files:      1 passed, 1 total (100% completed) in 00:00:15 
  ```
