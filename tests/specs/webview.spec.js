import LoginScreen from '../screen-objects/login';
import Menu from '../screen-objects/menu';
import SwagListScreen from '../screen-objects/swagList';
import Webview, { CONTEXT_REF } from '../screen-objects/webview';
import { restartApp } from '../helpers/utils';
import { LOGIN_USERS } from '../helpers/e2eConstants';

describe('Webview', () => {
  /**
   * The before each will be executed before each `it`-test case and it will prevent
   * code duplication
   */
  beforeEach(() => {
    /**
     * Make sure we have a `fresh` state for each test case so the previous state will not
     * interfere with the new test
     */
    restartApp();
    // Wait for the screen to be loaded before starting a testcase
    LoginScreen.waitForIsShown();

    // Login
    LoginScreen.signIn(LOGIN_USERS.STANDARD);

    // Wait for the swag list to be shown
    SwagListScreen.waitForIsShown();

    // Open the menu and click on the webview and wait for it to be shown
    Menu.open();
    Menu.openWebview();
    Webview.waitForIsShown();
  });

  /**
   * Assignment 3:
   * 1. Validate that menu in the webview is not open
   *    see `../screen-objects/webview.js` to add the selector
   * 2. Validate that menu button in the webview is shown
   * 3. Open the menu
   * 4. Validate that the menu is open
   */
  it('should be able to interact with the webview and open the menu', () => {
    // I already made the code to:
    // - fill in the Raiffeisen website url
    // - wait and switch the context from Native to Webview
    // to make life a little bit easier =)
    Webview.submitURL('https://www.raiffeisen.at');
    // Now wait for the Webview context to be loaded
    Webview.waitForWebViewContextLoaded();
    // This will only tell us that there is a webview context, now we need to switch to it
    Webview.switchToContext(CONTEXT_REF.WEBVIEW);
    // Now we are in the Webview, BUT, we still don't know if the site has fully loaded,
    // there are multiple ways for checking this, but I normally use this method
    Webview.waitForWebviewDocumentFullyLoaded();
    // Now we can interact with the webview by using the normal (CSS) selectors we would
    // use for a Selenium test

    // 1. Validate that menu in the webview is not open
    //    - First find it and add it to the Webview screen object
    //    - Use this method from WebdriverIO to wait for it to be displayed
    //      https://webdriver.io/docs/api/element/isDisplayed.html


    // 2. Validate that menu button in the webview is shown
    //    - First find it and add it to the Webview screen object
    //    - Use this method from WebdriverIO to wait for it to be displayed
    //      https://webdriver.io/docs/api/element/waitForDisplayed.html


    // 3. Open the menu


    // 4. Validate that the menu is open
    //    TIP: use something like this method https://webdriver.io/docs/api/element/isDisplayed.html
    //         to verify that the button is not there anymore


    /**
     * EXTRA!!
     * This can be an extra assignment if you have time
     *
     * Assignment 3b:
     * When the previous test has been successful try to
     * log out from the app in the same session.
     */
    // Remember that you are in the Webview context, so you need to switch


    // Open the menu and select LOGOUT


    // Verify that you are logged out

  });
});
