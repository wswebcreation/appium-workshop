# appium-workshop
An Appium workshop on how to automate a native iOS/Android app with Appium.

> This workshop holds the exercises for the Appium workshop. The master branch will hold exercise 1. All other exercises can be found in branches called `exercise-#`, the `#` is the number of the exercise. 
If you want you can cheat, to be honest I don't mind, but you might need to ask yourself if that would be the best way to learn ;-)

## Table of content
- [Requirements for the workshop](#requirements-for-the-workshop)
- [Setting up Appium on your machine](#setting-up-appium-on-your-machine)
- [Setting up Android and iOS on a local machine](#setting-up-android-and-ios-on-a-local-machine)
- [Installing this project](#installing-this-project)
  - [Check if all works](#check-if-all-works)
  - [Exercises](#exercises)
    - [Exercise-1](#exercise-1)
    - [Exercise-2](#exercise-2)
    - [Exercise-3](#exercise-3)


## Requirements for the workshop
This workshop already provides you with a complete project setup for doing automation with JavaScript. I'll not be teaching you how to write tests in JavaScript, but only how to use Appium, how to find elements and so on.

The only thing I ask from you is to follow the steps below before we start the workshop. 

> Keep in mind that we don’t have enough time during the workshop to dive into environmental issues. If your machine is not working we advise you to pair with someone who has his machine already configured and working.

I would also ask you to install a code editor that supports JavaScript, you can use a free trial version of for example WebStorm (download it from [here](https://www.jetbrains.com/webstorm/download/#section=mac)), or use your favourite one. 

## Setting up Appium on your machine:
During this workshop we’re going to focus on Android, because everybody can set this up on his machine (Windows / Linux / OSX). Please follow the instructions [here](./docs/APPIUM.md) for Android and make sure everything is working on your machine.

> If you have a Mac you might also want to install everything for iOS, but we will not be covering that during the workshop 

## Setting up Android and iOS on a local machine
For using Appium on your local machine you need an Android emulator or an iOS simulator on your machine. Check [this](./docs/ANDROID_IOS_SETUP.md) document for more information.

## Installing this project
Hopefully you've been able to set up your local machine for Android and or iOS. To use this project you need to download it to your local machine and install all the dependencies. This can be done with the following steps

- Clone the project to your local machine by opening a terminal and enter this
  
  `git clone https://github.com/wswebcreation/appium-workshop.git`
  
- Go to the folder of the project by entering this in your terminal
  
  `cd appium-workshop`
- Install all the dependencies by running this command in your terminal
  
  `npm install`

### Check if all works
I've created a simple test case to check if everything works on your machine. You can run this script by: 

- opening a terminal
- make sure you are in the `appium-workshop`-folder
- Open the just created Android emulator (**Make sure you created a Android emulator with the name `Pixel_8.1``, see [this](./docs/ANDROID_IOS_SETUP.md)-document**)
- Run the following command
  
  `npm run test.android`
  
  When everything was correct, you would see the following logs
  
  ```log
  ➜  appium-workshop git:(master) ✗ npm run test.android
  
  > appium-workshop@1.0.0 test.android /Users/wswebcreation/Git/appium-workshop
  > wdio tests/configs/wdio.local.app.android.conf.js
  
  
  Execution of 1 spec files started at 2019-06-13T06:12:34.384Z
  
  [0-0] RUNNING in com.swaglabsmobileapp.MainActivity - /tests/specs/login.spec.js
  [0-0] PASSED in com.swaglabsmobileapp.MainActivity - /tests/specs/login.spec.js
  
   "spec" Reporter:
  ------------------------------------------------------------------
  [emulator-5554 LINUX 8.1.0 #0-0] Spec: /Users/wswebcreation/Git/appium-workshop/tests/specs/login.spec.js
  [emulator-5554 LINUX 8.1.0 #0-0] Running: emulator-5554 on LINUX 8.1.0 executing /Users/wswebcreation/Git/appium-workshop/apps/Android.SauceLabs.Mobile.Sample.app.1.0.0.apk
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] Login
  [emulator-5554 LINUX 8.1.0 #0-0]    ✓ should be able to login with a standard user
  [emulator-5554 LINUX 8.1.0 #0-0]    - should not be able to login with a locked user
  [emulator-5554 LINUX 8.1.0 #0-0]    - should show an error when no username is provided
  [emulator-5554 LINUX 8.1.0 #0-0]    - should show an error when no password is provided
  [emulator-5554 LINUX 8.1.0 #0-0]    - should show an error when no match is found
  [emulator-5554 LINUX 8.1.0 #0-0]
  [emulator-5554 LINUX 8.1.0 #0-0] 1 passing (5s)
  [emulator-5554 LINUX 8.1.0 #0-0] 4 skipped
  
  
  Spec Files:      1 passed, 1 total (100% completed) in 00:00:16 
  ```

  If this is the case, congrats 🎉, if not, check the logs and see what is wrong / missing

### Exercises
In our previous step we already checked if the setup worked and we already ran our first test.
The master branch already holds the first exercise, which can be found [here](./docs/exercises/EXERCISE-1.md).

All other exercises can be found in branches called `exercise-#`, the `#` is the number of the exercise. Check the note at the beginning of this document!

The goal of each exercise and the steps you need to take can be found in the exercise documents.

#### Exercise-1
**Goal:<br>**
- You will learn how to find elements and their selectors with Appium-Desktop based on accessibilityID's

**Objectives:**
- Create multiple test cases based on an example
- Verify that the error message is not and is shown

**Part 1: Find the error message selector<br>**
Use Appium Desktop to find the accessibilityID of the error message and add that to [`tests/screen-objects/login.js`](./tests/screen-objects/login.js). 
(*The `~` is telling WebdriverIO that you are going to use the accessibilityID's*)

**Part 2: Create multiple test cases<br>**
See [`tests/specs/login.spec.js`](./tests/specs/login.spec.js) for the tests that need to be created. 
Verify for each test that the error message is not there and later is shown.

#### Exercise-2
**Goal:<br>**
- You know **when** to use XPATH

**Objectives:**
- Add swag to the cart based on it's text
- Verify the swag was added to the cart

**Part 1: Select the right branch<br>**
Check out the branch `exercise-2` with:

  `git checkout exercise-2`

> *or go to GitHub and select branch [`exercise-2`](https://github.com/wswebcreation/appium-workshop/tree/exercise-2)*

You will find:
- answers for exercise 1
- the new exercises for `exercise-2`

**Part 2: Find the `Add to cart` button<br>**
Open Appium Desktop and try to find:
 1. the text element for the first swag item
 2. the add button for the first swag item
 
See [`tests/screen-objects/inventoryList.js`](tests/screen-objects/swagList.js) for what to do (only visible when you did a checkout of branch `exercise-2`).
Also write the first part of the test case in [`tests/specs/swag.overview.spec.js`](./tests/specs/swag.overview.spec.js).
 
> Hint: Try to come up with a XPATH selector that uses the text of the first swag item and returns the `Add to cart` button

**Part 3: Find the `cart item` amount<br>**
1. Find the cart-icon
2. find a way to get the text

Now write the second part of the test case in [`tests/specs/swag.overview.spec.js`](./tests/specs/swag.overview.spec.js) and run the test.

#### Exercise-3
**Goal:<br>**
- You know how to inspect a webview

**Objectives:<br>**
- Switch to the Webview during a test
- Access elements in the Webview during the test

**Part 1: Select the right branch<br>**
Check out the branch `exercise-3` with:

  `git checkout exercise-3`

> *or go to GitHub and select branch [`exercise-3`](https://github.com/wswebcreation/appium-workshop/tree/exercise-3)*

You will find:
- answers for exercise 2
- the new exercises for `exercise-3`

**Part 2: Inspecting elements with Chrome browser<br>**
1. Go to the Webview in the app:
    - Open the app
    - login in with the standard user
    - go to the menu
    - enter a https url and submit the url
2. Open chrome, type `chrome://inspect/` and click on `inspect`

You are now able to inspect the webview of the page, find elements, adjust stuff and so on.

**Extra challenge:<br>**
The extra challenge is to create a test case that does the following:
- Open the app
- Log in and go to the menu
- Open the Webview screen and go a secure `https` website
- Switch the the Webview context (You can find more info here [getContexts](https://webdriver.io/docs/api/mjsonwp.html#getcontexts) and [switchContext](https://webdriver.io/docs/api/mjsonwp.html#switchcontext))
- Verify that an element is there

> Hint: You will be facing an issue that the ChromeDriver is not valid. See more info about how to solve that in the provided link in the log, of check [this](https://github.com/webdriverio/appium-boilerplate/blob/master/docs/FAQ.md#i-get-the-error-no-chromedriver-found-that-can-automate-chrome-)


